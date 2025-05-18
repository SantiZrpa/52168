import antlr4 from 'antlr4';
import fs from 'fs';

import LenguajeLexer from '../generated/LenguajeLexer.js';
import LenguajeParser from '../generated/LenguajeParser.js';
import { CustomLenguajeListener } from '../CustomLenguajeListener.js';
import { CustomLenguajeVisitor } from '../CustomLenguajeVisitor.js';

const Trees = antlr4.tree.Trees;

try {
    const input = fs.readFileSync('input.txt', 'utf8');
    const chars = new antlr4.InputStream(input);

     // Variable para rastrear errores
    let hasErrors = false;

    // Mensaje de introduccion
    console.log('\nANÁLISIS LÉXICO Y SINTÁCTICO:');
    
    // Configurar lexer con manejo de errores
    const lexer = new LenguajeLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
            hasErrors = true;
            console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new LenguajeParser(tokens);

    // Configurar parser con manejo de errores
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
            hasErrors = true;
            console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    parser.buildParseTrees = true;
    const parseTree = parser.programa();

    // Mensaje de éxito si no hubo errores
    if (!hasErrors) {
        console.log('\nAnálisis completado exitosamente. No se encontraron errores léxicos ni sintácticos.');
    } else {
        console.log('\nSe encontraron errores durante el análisis.');
    }

    // Mostrar tokens 
    console.log("\nTABLA DE TOKENS Y LEXEMAS:");
    try {
        tokens.fill();
    
        // Obtener nombres de tokens de manera segura
        const getTokenName = (tokenType) => {
            // Obtener nombre simbolico si está definido
            const symbolic = LenguajeLexer.symbolicNames?.[tokenType];
            if (symbolic && symbolic !== "null") return symbolic;

            // Sino, buscar literal names
            const literal = LenguajeLexer.literalNames?.[tokenType];
            if (literal && literal !== "null") return literal;

            // Fallback
            return `T_${tokenType}`;
        };

        // Procesar cada token
        tokens.tokens.forEach(token => {
            if (token.type !== -1) { // Ignorar EOF
                const tokenName = getTokenName(token.type);
                const tokenText = token.text 
                    ? token.text.replace(/\r/g, '\\r').replace(/\n/g, '\\n') 
                    : '';
            
                console.log(`Línea ${token.line}: ${tokenName.padEnd(15)} = ${tokenText}`);
            }
        });
    
        if (tokens.tokens.length <= 1) { // Solo EOF
            console.log("No se encontraron tokens en el input");
        }
    } catch (error) {
        console.error("Error al generar tabla de tokens:", error.message);
        hasErrors = true;
    }

    // Mostrar árbol sintáctico
    console.log("\nÁRBOL DE ANÁLISIS SINTÁCTICO:");
    console.log(Trees.toStringTree(parseTree, null, parser));

    // Interpretar con Visitor (para generación de código)
    console.log('\nINTERPRETACIÓN:')
    console.log('\n[Traducción a JavaScript]');
    const visitor = new CustomLenguajeVisitor();
    const jsCode = visitor.visit(parseTree);
    console.log(jsCode);
    console.log('\nResultado:');
    
    eval(jsCode); // Ejecutar el código generado
    
}

catch (err) {
    console.error('Error al procesar el archivo:', err.message);
}

