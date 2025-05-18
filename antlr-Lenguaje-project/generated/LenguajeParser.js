// Generated from c:/Users/santi/.vscode/cli/52168/antlr-Lenguaje-project/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,23,128,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,5,0,38,8,0,10,0,12,0,
41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,49,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,57,
8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,5,3,68,8,3,10,3,12,3,71,9,3,1,4,
1,4,1,4,3,4,76,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
3,10,109,8,10,1,11,1,11,1,11,3,11,114,8,11,1,12,1,12,3,12,118,8,12,1,13,
1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,0,1,1,0,5,9,124,0,39,1,0,0,0,2,44,1,0,0,0,4,52,1,0,
0,0,6,64,1,0,0,0,8,75,1,0,0,0,10,77,1,0,0,0,12,85,1,0,0,0,14,92,1,0,0,0,
16,94,1,0,0,0,18,100,1,0,0,0,20,108,1,0,0,0,22,113,1,0,0,0,24,117,1,0,0,
0,26,119,1,0,0,0,28,121,1,0,0,0,30,123,1,0,0,0,32,125,1,0,0,0,34,38,3,2,
1,0,35,38,3,4,2,0,36,38,3,20,10,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,
0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,
0,42,43,5,0,0,1,43,1,1,0,0,0,44,45,5,1,0,0,45,48,3,32,16,0,46,47,5,10,0,
0,47,49,3,22,11,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,13,0,
0,51,3,1,0,0,0,52,53,5,2,0,0,53,54,3,32,16,0,54,56,5,14,0,0,55,57,3,6,3,
0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,15,0,0,59,60,1,0,0,0,
60,61,5,16,0,0,61,62,3,8,4,0,62,63,5,17,0,0,63,5,1,0,0,0,64,69,3,30,15,0,
65,66,5,12,0,0,66,68,3,30,15,0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,
69,70,1,0,0,0,70,7,1,0,0,0,71,69,1,0,0,0,72,76,3,10,5,0,73,76,3,16,8,0,74,
76,3,18,9,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,9,1,0,0,0,77,78,
3,30,15,0,78,79,5,10,0,0,79,80,3,14,7,0,80,81,5,14,0,0,81,82,3,24,12,0,82,
83,5,15,0,0,83,84,5,13,0,0,84,11,1,0,0,0,85,86,3,30,15,0,86,87,5,10,0,0,
87,88,3,24,12,0,88,89,5,11,0,0,89,90,3,24,12,0,90,91,5,13,0,0,91,13,1,0,
0,0,92,93,7,0,0,0,93,15,1,0,0,0,94,95,5,4,0,0,95,96,5,14,0,0,96,97,3,22,
11,0,97,98,5,15,0,0,98,99,5,13,0,0,99,17,1,0,0,0,100,101,5,3,0,0,101,102,
3,22,11,0,102,103,5,13,0,0,103,19,1,0,0,0,104,109,3,16,8,0,105,109,3,18,
9,0,106,109,3,10,5,0,107,109,3,12,6,0,108,104,1,0,0,0,108,105,1,0,0,0,108,
106,1,0,0,0,108,107,1,0,0,0,109,21,1,0,0,0,110,114,3,26,13,0,111,114,3,28,
14,0,112,114,3,30,15,0,113,110,1,0,0,0,113,111,1,0,0,0,113,112,1,0,0,0,114,
23,1,0,0,0,115,118,3,26,13,0,116,118,3,30,15,0,117,115,1,0,0,0,117,116,1,
0,0,0,118,25,1,0,0,0,119,120,5,19,0,0,120,27,1,0,0,0,121,122,5,20,0,0,122,
29,1,0,0,0,123,124,5,21,0,0,124,31,1,0,0,0,125,126,5,21,0,0,126,33,1,0,0,
0,9,37,39,48,56,69,75,108,113,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'variable'", "'funcion'", "'devolver'", 
                            "'imprimir'", "'mayusculas'", "'minusculas'", 
                            "'longitud'", "'invertir'", "'reemplazar'", 
                            "'='", "'+'", "','", "';'", "'('", "')'", "'{'", 
                            "'}'", "'!'" ];
    static symbolicNames = [ null, "VAR", "FUNCION", "DEVOLVER", "IMPRIMIR", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "IGUAL", "MAS", "COMA", "PYC", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "EXCLAMACION", 
                             "CADENA", "NUMERO", "IDENTIFICADOR", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "concatenar", 
                         "transformacion", "impresion", "retorno", "ejecucion", 
                         "valor", "cadena", "texto", "numero", "variable", 
                         "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2097182) !== 0)) {
	            this.state = 37;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 34;
	                this.declaracion();
	                break;
	            case 2:
	                this.state = 35;
	                this.funcion();
	                break;
	            case 3:
	            case 4:
	            case 21:
	                this.state = 36;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(LenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LenguajeParser.VAR);
	        this.state = 45;
	        this.nombre();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 46;
	            this.match(LenguajeParser.IGUAL);
	            this.state = 47;
	            this.valor();
	        }

	        this.state = 50;
	        this.match(LenguajeParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(LenguajeParser.FUNCION);
	        this.state = 53;
	        this.nombre();

	        this.state = 54;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 55;
	            this.argumentos();
	        }

	        this.state = 58;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 60;
	        this.match(LenguajeParser.LBRACE);
	        this.state = 61;
	        this.instrucciones();
	        this.state = 62;
	        this.match(LenguajeParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.variable();
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 65;
	            this.match(LenguajeParser.COMA);
	            this.state = 66;
	            this.variable();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_instrucciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.state = 72;
	            this.operacion_texto();
	            break;
	        case 4:
	            this.state = 73;
	            this.impresion();
	            break;
	        case 3:
	            this.state = 74;
	            this.retorno();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.variable();
	        this.state = 78;
	        this.match(LenguajeParser.IGUAL);
	        this.state = 79;
	        this.transformacion();
	        this.state = 80;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 81;
	        this.cadena();
	        this.state = 82;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 83;
	        this.match(LenguajeParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.variable();
	        this.state = 86;
	        this.match(LenguajeParser.IGUAL);
	        this.state = 87;
	        this.cadena();
	        this.state = 88;
	        this.match(LenguajeParser.MAS);
	        this.state = 89;
	        this.cadena();
	        this.state = 90;
	        this.match(LenguajeParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(LenguajeParser.IMPRIMIR);
	        this.state = 95;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 96;
	        this.valor();
	        this.state = 97;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 98;
	        this.match(LenguajeParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(LenguajeParser.DEVOLVER);
	        this.state = 101;
	        this.valor();
	        this.state = 102;
	        this.match(LenguajeParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_ejecucion);
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.impresion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.retorno();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.operacion_texto();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 107;
	            this.concatenar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LenguajeParser.RULE_valor);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.texto();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.numero();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LenguajeParser.RULE_cadena);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.texto();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LenguajeParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(LenguajeParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LenguajeParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(LenguajeParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LenguajeParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(LenguajeParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LenguajeParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(LenguajeParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.VAR = 1;
LenguajeParser.FUNCION = 2;
LenguajeParser.DEVOLVER = 3;
LenguajeParser.IMPRIMIR = 4;
LenguajeParser.MAYUSCULAS = 5;
LenguajeParser.MINUSCULAS = 6;
LenguajeParser.LONGITUD = 7;
LenguajeParser.INVERTIR = 8;
LenguajeParser.REEMPLAZAR = 9;
LenguajeParser.IGUAL = 10;
LenguajeParser.MAS = 11;
LenguajeParser.COMA = 12;
LenguajeParser.PYC = 13;
LenguajeParser.LPAREN = 14;
LenguajeParser.RPAREN = 15;
LenguajeParser.LBRACE = 16;
LenguajeParser.RBRACE = 17;
LenguajeParser.EXCLAMACION = 18;
LenguajeParser.CADENA = 19;
LenguajeParser.NUMERO = 20;
LenguajeParser.IDENTIFICADOR = 21;
LenguajeParser.NEWLINE = 22;
LenguajeParser.WS = 23;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_declaracion = 1;
LenguajeParser.RULE_funcion = 2;
LenguajeParser.RULE_argumentos = 3;
LenguajeParser.RULE_instrucciones = 4;
LenguajeParser.RULE_operacion_texto = 5;
LenguajeParser.RULE_concatenar = 6;
LenguajeParser.RULE_transformacion = 7;
LenguajeParser.RULE_impresion = 8;
LenguajeParser.RULE_retorno = 9;
LenguajeParser.RULE_ejecucion = 10;
LenguajeParser.RULE_valor = 11;
LenguajeParser.RULE_cadena = 12;
LenguajeParser.RULE_texto = 13;
LenguajeParser.RULE_numero = 14;
LenguajeParser.RULE_variable = 15;
LenguajeParser.RULE_nombre = 16;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_declaracion;
    }

	VAR() {
	    return this.getToken(LenguajeParser.VAR, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PYC() {
	    return this.getToken(LenguajeParser.PYC, 0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(LenguajeParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LBRACE() {
	    return this.getToken(LenguajeParser.LBRACE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	RBRACE() {
	    return this.getToken(LenguajeParser.RBRACE, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_argumentos;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.COMA);
	    } else {
	        return this.getToken(LenguajeParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	PYC() {
	    return this.getToken(LenguajeParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(LenguajeParser.MAS, 0);
	};

	PYC() {
	    return this.getToken(LenguajeParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(LenguajeParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(LenguajeParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(LenguajeParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(LenguajeParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(LenguajeParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	PYC() {
	    return this.getToken(LenguajeParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(LenguajeParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PYC() {
	    return this.getToken(LenguajeParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_ejecucion;
    }

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_cadena;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_texto;
    }

	CADENA() {
	    return this.getToken(LenguajeParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_nombre;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.DeclaracionContext = DeclaracionContext; 
LenguajeParser.FuncionContext = FuncionContext; 
LenguajeParser.ArgumentosContext = ArgumentosContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.Operacion_textoContext = Operacion_textoContext; 
LenguajeParser.ConcatenarContext = ConcatenarContext; 
LenguajeParser.TransformacionContext = TransformacionContext; 
LenguajeParser.ImpresionContext = ImpresionContext; 
LenguajeParser.RetornoContext = RetornoContext; 
LenguajeParser.EjecucionContext = EjecucionContext; 
LenguajeParser.ValorContext = ValorContext; 
LenguajeParser.CadenaContext = CadenaContext; 
LenguajeParser.TextoContext = TextoContext; 
LenguajeParser.NumeroContext = NumeroContext; 
LenguajeParser.VariableContext = VariableContext; 
LenguajeParser.NombreContext = NombreContext; 
