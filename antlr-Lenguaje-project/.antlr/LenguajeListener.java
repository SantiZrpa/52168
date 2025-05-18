// Generated from Lenguaje.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LenguajeParser}.
 */
public interface LenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(LenguajeParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(LenguajeParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterFuncion(LenguajeParser.FuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitFuncion(LenguajeParser.FuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void enterArgumentos(LenguajeParser.ArgumentosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void exitArgumentos(LenguajeParser.ArgumentosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(LenguajeParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(LenguajeParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void enterOperacion_texto(LenguajeParser.Operacion_textoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void exitOperacion_texto(LenguajeParser.Operacion_textoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void enterConcatenar(LenguajeParser.ConcatenarContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void exitConcatenar(LenguajeParser.ConcatenarContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void enterTransformacion(LenguajeParser.TransformacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void exitTransformacion(LenguajeParser.TransformacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterImpresion(LenguajeParser.ImpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitImpresion(LenguajeParser.ImpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterRetorno(LenguajeParser.RetornoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitRetorno(LenguajeParser.RetornoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#ejecucion}.
	 * @param ctx the parse tree
	 */
	void enterEjecucion(LenguajeParser.EjecucionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#ejecucion}.
	 * @param ctx the parse tree
	 */
	void exitEjecucion(LenguajeParser.EjecucionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(LenguajeParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(LenguajeParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(LenguajeParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(LenguajeParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(LenguajeParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(LenguajeParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(LenguajeParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(LenguajeParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(LenguajeParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(LenguajeParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#nombre}.
	 * @param ctx the parse tree
	 */
	void enterNombre(LenguajeParser.NombreContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#nombre}.
	 * @param ctx the parse tree
	 */
	void exitNombre(LenguajeParser.NombreContext ctx);
}