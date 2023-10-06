/*LINK DE GITHUB: https://github.com/pedroserna22/crearVariables
La branch se llama: "iterararreglos"

¨DESAFÍO: ITERAR A TRAVÉS DE ARREGLOS
*/

/*1. Escribe un bucle for que recorra un arreglo de números e imprima cada número.

Para esta primera parte se plantea un bucle for que recorra todos los elementos
del array, y los imprima con un console.log.
Este for inicia en 0, ya que el índice del primer elemento es 0, y tiene
como largo 7, ya que el array tiene esa cantidad de elementos, y va sumando de a uno.
En orden de lectura, dada esa variable que contiene el array, entra al for e itera,
como cumple las condiciones primero imprime 8 que está en el indice 0, luego suma 1,
y vuelve a iterar, esta vez imprime 6, y así sucesivamente.*/
// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

/*2. Escribe un ciclo for que recorra un arreglo de números e imprima la suma del número y el índice del número en el arreglo.

Similar al anterior, se define un bucle que recorre el arreglo del array, sin embargo se plantea una variable
suma adentro del for, esta almacena la suma de "arr[i]" que es valor del elemento sobre el que está iterando más "i"
que es la posición o el índice de ese elemento.
Luego se hace un console.log concatenando todo, el elemento, el índice y la suma del elemento e índice.*/
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
for (var i = 0; i < arr2.length; i++) {
    var suma = arr2[i] + i;
    console.log("El Número: " + arr2[i] + ", tiene como índice: " + i + ", y su suma es: " + suma);
}

/*3. Escribe un bucle for que recorra un arreglo de números e imprima SOLO los números mayores a 5.
BONUS NINJA: modifica tu solución para el #3 para que cualquier número en el arreglo que NO sea mayor que 5 se reemplace 
con una cadena de "No hay dados". Esta cadena NO debe imprimirse.

Para este punto se hace nuevamente un bucle, nada más que se agrega un condicional if para que evalue la condición, si
el elemento del array es mayor a 5 que lo imprima, ahora, el bonus ninja es agregar otra sentencia
donde si no se cumple que sea mayor a 5 ese número se reemplace con "No hay dados", esto se hace con un else
Y teniendo la posición y el elemento solo hay que igualarlo a ese string, así queda reemplazado
Para finalizar se hace un console.log para visualizar el nuevo array.*/
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (var i = 0; i < arr3.length; i++) {
    if(arr3[i] > 5){
    console.log(arr3[i]);
    }else{
     arr3[i] = "No hay dados";
    }
}
console.log("Este es el nuevo arreglo: " + arr3);


