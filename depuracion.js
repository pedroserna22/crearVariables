/* LINK DE GIT: https://github.com/pedroserna22/crearVariables
LA BRANCH SE LLAMA "depuracion" 

DESAFÍO DE DEPURACIÓN:
En esta función se retorna al string "Hola, mundo", la variable word
invoca y almacena lo que devuelve dicha función, es decir que word = "Hola, mundo".
Respecto a ese desafío, lo único que habría que arreglar es el console.log, ya que
no imprime nada en consola al estar vacío, la solución es pasarle como parámetro
la variable word, de esta manera se nos imprimirá en consola "Hola, mundo".

FUNCIÓN ORIGINAL
function greeting(){
         return "Hola, mundo";
    }
    var word = greeting();
    console.log();*/
    
//FUNCIÓN MODIFICADA
function greeting(){
         return "Hola, mundo";
    }
    var word = greeting();
    console.log(word); //Usamos console.log(word) para imprimir el contenido de la variable word, que contiene el saludo "Hola, mundo", en la consola.