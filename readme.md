# Curso de Typescript
## Inicialización del proyecto
Instalando el compilador el comando <code>tsc --init</code> nos crea un proyecto de TS con un archivo `tsconfig.json`. En este archivo podemos especificar el comportamiento que debe tener el compilador.
## Compilación onSave
<code>tsc --watch</code> en consola para compliar los archivos cada vez que se guardan cambios. El output son archivos *.js en la carpeta dist, en nuestro caso hemos definido en el `tsconfig.json` que estos archivos serán compatibles con el standard ES5 (target) y que son guardados en la carpeta dist (outDir).
## Photo-app
Dentro del proyecto hay otro proyecto, en la carpeta `src/modules`, donde ponemos en práctica lo aprendido de manera más formal. Esto en un proyecto real no tiene demasiado sentido, tenlo en cuenta para ejecutar el comando <code>tsc --watch</code>: colocate en la raiz del proyecto o en photo-app para compilar lo que corresponda.
