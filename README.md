# README

Este es un archivo README para el repositorio. A continuación, se describe el propósito del proyecto, cómo instalarlo y cómo utilizarlo.

# IMPORTANTE

Se le recomienda a usted realizar primero la lectura completa de este archivo antes de ejecutar cualquier paso mencionado.

# Descripcion

Este proyecto consiste en un analizador léxico y sintáctico desarrollado con ANTLR4 y JavaScript (Node.js), basado en una gramática simple. El analizador procesa archivos de texto que contienen un codigo fuente; lo analiza léxica y sintácticamente e informa si hay errores, genera la tabla de tokens y lexemas correspondiente, construye el árbol sintáctico concreto de la entrada, y traduce el código fuente al lenguaje JavaScript, para luego ejecutarlo.

## Requisitos previos

- Tener instalado *Visual Studio Code* en su computadora para poder ejecutar el código de una manera sencilla, y para poder guiarse con el presente archivo sin tener complicaciones. Si aún no lo tiene instalado, se recomienda instalar desde la pagina oficial: https://code.visualstudio.com/.
 *IMPORTANTE:* durante la instalación de VS Code, habilita la opción "Add to PATH" para que
puedas abrir VS Code desde una terminal con code.
- Es necesario tener *Node.js* instalado en su sistema, ya que el proyecto esta construido con Node. En caso de no contar con Node instalado, se recomienda instalar desde https://nodejs.org/es. Se requiere
la *version 18* o *superior*.
- Es necesario tener *Java (JDK)* instalado en su sistema. Se requiere Java 11 o superior, aunque es recomendable instalar *Java 17* o *superior*.
- Instalar *GIT* desde la página oficial https://git-scm.com/downloads. Le permitirá clonar el repositorio desde VS Code o terminal. 

Para comprobar que está todo bien instalado, puede ejecutar los siguientes comandos en una terminal:
```bash
code -v

node -v

npm -v

java -version

git -v
```
Las respectivas salidas deberian ser:
```bash
versión de Visual Studio Code instalada
Ej.: 1.96.4
cd4ee3b1c348a13bafd8f9ad8060705f6d4b9cba
x64

versión de Node JS instalada
Ej.: v20.10.0 

versión de NPM instalada
Ej.: 10.2.3

version de Java instalada
openjdk version "17.0.9" 2025-05-19

versión de GIT instalada
git version 2.43.0.windows.1
```
### Configuracion de VS Code para trabajar con ANTLR
- Una vez que usted verifique que está todo instalado correctamente, debe instalar la *Extensión de ANTLR para VS Code* .
 1. En VS Code, presione `Ctrl+Shift+X`, o vaya a la seccion de "Extensions" (bloque cuadrado con una parte separada) que se encuentra en la barra lateral izquierda, y buscá: "ANTLR4 grammar syntax support".
 2. Instale la extensión de Mike Lischke.
 ![alt text](screenshots/image.png)
 *IMPORTANTE:* Luego de instalar la extensión, reinicie VS Code para que tome los cambios.

 3. Configure las preferencias de generación de código de ANTLR: vaya al menú Archivo/Preferencias/Configuración ( CTRL + ,) y busca las preferencias de ANTLR. Baja hasta la sección Antlr4:Generation y edita `settings.json.`
 ![alt text](screenshots/image-1.png)

 La configuracion debe quedar del siguiente modo:
 ```bash
    "antlr4.generation": {
        "alternativeJar": "antlr-4.13.2-complete.jar",
        "mode": "external",
        "listeners": true,
        "visitors": true,
        "language": "JavaScript",
        "outputDir": "./generated"
    } 
 ```
 *IMPORTANTE:* Guarda el archivo de configuración antes de continuar (CTRL+S).


## Instalación

Clonar el repositorio y acceder al proyecto:
1. En una ventana de comandos, ejecute el siguiente comando:
```bash
git clone https://github.com/SantiZrpa/52168.git
```
- Si el proyecto se clonó correctamente deberías ver el mensaje “done” en tu salida.

2. Ingrese a la carpeta raiz ejecutando:
```bash
cd 52168 // Esto no es la carpeta que se debe abrir en Visual Studio Code, pero sí es la que contiene todo el repositorio.
```
3. Luego, muevase a la carpeta correcta del proyecto, ejecutando:
```bash
cd antlr-Lenguaje-project // Esta es la carpeta que debe abrir en VS Code.
```
4. Abre VS Code para trabajar con el código del proyecto. Para esto ejecuta en la ventana
de comandos abierta:
```bash
code .
```
- Si todo esta correcto, deberia poder ver y editar el proyecto en su VS Code.

 ## Otra Alternativa para clonar el proyecto (mas rápida y simple para algunos usuarios)

1. Acceder al siguiente link: https://github.com/SantiZrpa/52168 
2. Clickear `<> Code` (boton verde que aparece arriba de los archivos)  
3. Seleccionar la opción "Download ZIP" 
     ![alt text](screenshots/image-3.png)
    (imagen extraida de otro proyecto a modo de ejemplo)
4. Una vez instalada, ingrese a Visual Studio Code
5. Dentro de VS Code, seleccione la opción "Open Folder..." y seleccione la carpeta `antlr-Lenguaje-project`, buscandola donde usted la haya instalado (debe acceder a la carpeta `52168.zip`, luego a la carpeta `52168` y luego a la carpeta correcta ya mencionada) 
 ![alt text](screenshots/image-2.png)

## ADVERTENCIA

- Al descargar o clonar este repositorio, es posible que se genere una carpeta principal llamada `51947/`. Es MUY importante NO abrir esta carpeta en VS Code. En su lugar, usted debe abrir directamente la carpeta `antlr-Lenguaje-project/` desde Visual Studio Code, ya que no contiene los archivos fuente del proyecto en su raíz.
- Esto evita problemas con rutas relativas, dependencias y ejecución del proyecto.
```bash
NO ABRIR → 52168/
SÍ ABRIR → 52168/antlr-Lenguaje-project/
```

## Ejecución

Al seleccionar el archivo Lenguaje.g4, usted podrá ver la gramática propuesta para este proyecto. Ademas, se adjunta un archivo de texto y un archivo pdf (llamado Reglas.pdf) en el repositorio, donde también se podrá ver la gramática asignada.
- Para la ejecución del programa, siga los siguientes pasos:
 1. En el repositorio de github usted podra ver unos archivos llamados "input_correcto_1.txt", "input_correcto_2.txt", "input_incorrecto_1.txt" e "input_incorrecto_2.txt". En el proyecto dentro de VS Code, y edite el archivo `input.txt`, agregando el contenido del ejemplo que usted desee. Una vez que lo tenga, es importante que guarde este archivo presionando `Ctrl + S`.
 
 2. Para ejecutar el programa, abra una terminal (En la barra superior de VS Code clickee Terminal → New Terminal). Con una terminal "powershell" iniciada (Node.js), escriba y ejecute el siguiente comando: `node src index` o simplemente `node src`. 
  - También, si es de su gusto, puede abrir una terminal "Command Prompt", seleccionando la flecha hacia abajo al lado de signo "+" en su terminal, y ejecutar el programa con el mismo comando o con el comando `cmd start` (Este solo funciona para este tipo de terminal).
  ![alt text](screenshots/image-4.png)
 
 3. Para generar y visualizar el árbol sintáctico, usted deberá depurar la gramática. Para esto usted debe:
  - Seleccionar el archivo de la gramática `Lenguaje.g4`.
  - Una vez dentro del archivo, iniciar el modo de depuración presionando F5 en su computadora o haciendo click en el botón "Run and Debug" que se encuentra en la barra izquierda de VS Code.
  ![alt text](screenshots/image-5.png)

  - Si todo sale correcto, usted podrá visualizar el árbol sintáctico de una manera similar a esto (varía según el contenido del archivo input.txt):
   ![alt text](screenshots/image-6.png)

 ## &nbsp; 
 **Si elige un input correcto**:
 - Al ejecutar el programa, le aparecerá algo similar a esto:
 ![alt text](screenshots/image-7.png)

 ## &nbsp; 
 **Si elige un input incorrecto**:
 - Al ejecutar el programa, le aparecerá algo similar a esto:
 ![alt text](screenshots/image-8.png)

 ## &nbsp; 
 **Si el input.txt se encuentra vacio**:
 El programa se ejecutará, pero la tabla de tokens, el árbol de análisis sintáctico, y la interpretación del codigo se encontraran sin contenido. Además, al estar el archivo vacío, no se detectarán erorres léxicos ni sintácticos.

## Créditos
Desarrollado como parte de la materia Sintáxis y Semántica de los Lenguajes
Universidad Tecnológica Nacional - FRM
 ## Autor
 - Nombre: Santiago Zerpa
 - Legajo: 52168

