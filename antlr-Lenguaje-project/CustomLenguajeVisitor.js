import LenguajeVisitor from './generated/LenguajeVisitor.js';

export class CustomLenguajeVisitor extends LenguajeVisitor {
    constructor() {
        super();
        this.jsCode = "";
        this.variables = new Set();
    }

    visitPrograma(ctx) {
        this.jsCode += "// Código generado automáticamente\n";
        this.visitChildren(ctx);
        return this.jsCode;
    }

    visitDeclaracion(ctx) {
        const varName = ctx.nombre().accept(this);
        this.variables.add(varName);
        
        if (ctx.IGUAL()) {
            const value = ctx.valor().accept(this);
            this.jsCode += `let ${varName} = ${value};\n`;
        } else {
            this.jsCode += `let ${varName};\n`;
        }
        return null;
    }

    visitOperacion_texto(ctx) {
        const varName = ctx.variable().accept(this);
        const transform = ctx.transformacion().accept(this);
        const input = ctx.cadena().accept(this);
        
        let operation;
        switch(transform) {
            case 'mayusculas':
                operation = `${input}.toUpperCase()`;
                break;
            case 'minusculas':
                operation = `${input}.toLowerCase()`;
                break;
            case 'longitud':
                operation = `${input}.length`;
                break;
            case 'invertir':
                operation = `${input}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                operation = `${input}.replace(/ /g, '-')`;
                break;
            default:
                operation = input;
        }

        if (!this.variables.has(varName)) {
            this.variables.add(varName);
            this.jsCode += `let ${varName} = ${operation};\n`;
        } else {
            this.jsCode += `${varName} = ${operation};\n`;
        }
        
        return null;
    }

    visitConcatenar(ctx) {
        const varName = ctx.variable().accept(this);
        const left = ctx.cadena(0).accept(this);
        const right = ctx.cadena(1).accept(this);

        const resultado = `${left} + ${right}`;

        //Declarar si no se declaro antes
        if (!this.variables.has(varName)) {
            this.variables.add(varName);
            this.jsCode += `let ${varName} = ${resultado};\n`;
        } else {
            this.jsCode += `${varName} = ${resultado};\n`;
        }

        return null;
    }

    visitImpresion(ctx) {
        const value = ctx.valor().accept(this);
        this.jsCode += `console.log(${value});\n`;
        return null;
    }

    visitFuncion(ctx) {
        const funcName = ctx.nombre().accept(this);
        let params = "";
        
        if (ctx.argumentos()) {
            params = ctx.argumentos().accept(this);
        }
        
        this.jsCode += `function ${funcName}(${params}) {\n`;
        ctx.instrucciones().accept(this);
        this.jsCode += "}\n\n";
        return null;
    }

    visitArgumentos(ctx) {
        const currentArg = ctx.variable().accept(this);
        if (ctx.argumentos()) {
            const restArgs = ctx.argumentos().accept(this);
            return `${currentArg}, ${restArgs}`;
        }
        return currentArg;
    }

    visitRetorno(ctx) {
        const value = ctx.valor().accept(this);
        this.jsCode += `return ${value};\n`;
        return null;
    }

    // Métodos para nodos terminales
    visitVariable(ctx) {
        return ctx.getText();
    }

    visitNombre(ctx) {
        return ctx.getText();
    }

    visitTexto(ctx) {
        const text = ctx.getText();
        return `"${text.substring(1, text.length - 1)
                      .replace(/\\/g, '\\\\')
                      .replace(/"/g, '\\"')}"`;
    }

    visitNumero(ctx) {
        return ctx.getText();
    }

    visitTransformacion(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        if (ctx.texto()) return ctx.texto().accept(this);
        if (ctx.variable()) return ctx.variable().accept(this);
        return '""';
    }

    visitValor(ctx) {
        if (ctx.texto()) return ctx.texto().accept(this);
        if (ctx.numero()) return ctx.numero().accept(this);
        if (ctx.variable()) return ctx.variable().accept(this);
        return '""';
    }
}