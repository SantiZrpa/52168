import LenguajeListener from './generated/LenguajeListener.js';

export class CustomLenguajeListener extends LenguajeListener {
    constructor() {
        super();
        this.jsCode = "";
        this.variables = new Set();
    }

    enterPrograma(ctx) {
        this.jsCode += "// Código generado automáticamente\n";
    }

    enterDeclaracion(ctx) {
        const varName = ctx.nombre().getText();
        this.variables.add(varName);
        
        if (ctx.valor()) {
            const value = this.getValue(ctx.valor());
            this.jsCode += `let ${varName} = ${value};\n`;
        } else {
            this.jsCode += `let ${varName};\n`;
        }
    }

    enterOperacion_texto(ctx) {
        const varName = ctx.variable().getText();
        const transform = ctx.transformacion().getText();
        const input = this.getCadena(ctx.cadena());
        
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
                // Asumimos reemplazar espacios por guiones como ejemplo
                operation = `${input}.replace(/ /g, '-')`;
                break;
            default:
                operation = input;
        }
        
        this.jsCode += `${varName} = ${operation};\n`;
    }

    enterConcatenar(ctx) {
        const varName = ctx.variable().getText();
        const left = this.getCadena(ctx.cadena(0));
        const right = this.getCadena(ctx.cadena(1));
        this.jsCode += `${varName} = ${left} + ${right};\n`;
    }

    enterImpresion(ctx) {
        const value = this.getValue(ctx.valor());
        this.jsCode += `console.log(${value});\n`;
    }

    enterFuncion(ctx) {
        const funcName = ctx.nombre().getText();
        let params = "";
        
        if (ctx.argumentos()) {
            params = ctx.argumentos().variable().map(v => v.getText()).join(", ");
        }
        
        this.jsCode += `function ${funcName}(${params}) {\n`;
    }

    exitFuncion(ctx) {
        this.jsCode += "}\n\n";
    }

    enterRetorno(ctx) {
        const value = this.getValue(ctx.valor());
        this.jsCode += `return ${value};\n`;
    }

    // Métodos auxiliares
    getValue(ctx) {
        if (ctx.texto()) return this.getTexto(ctx.texto());
        if (ctx.numero()) return ctx.numero().getText();
        if (ctx.variable()) return ctx.variable().getText();
        return "";
    }

    getCadena(ctx) {
        if (ctx.texto()) return this.getTexto(ctx.texto());
        if (ctx.variable()) return ctx.variable().getText();
        return "";
    }

    getTexto(ctx) {
        // Elimina las comillas y escapa caracteres especiales
        const text = ctx.getText();
        return text.substring(1, text.length - 1)
                  .replace(/\\/g, '\\\\')
                  .replace(/'/g, "\\'")
                  .replace(/"/g, '\\"');
    }
}