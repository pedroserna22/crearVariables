//LINK DE GITHUB: https://github.com/pedroserna22/crearVariables
//La branch se llama: "predecirFunciones".

//DESAFÍO DE CÓDIGO: PREDECIR FUNCIONES
//PREDICCIÓN 1
function myBirthYearFunc(){
        console.log("Nací en" + 1980);
    }
/*Esta función va a imprimir "Nací en1980" en la consola si es invocada. No habrá ningún espacio
entre en y 1980, ya que en la concatenación no se deja espacio en blanco, ni en el string.
La forma de solucionarlo sería : "Nací en" + " " + 1980) O "Nací en " + 1980).*/

//PREDICCIÓN 2
function myBirthYearFunc(birthYearInput){
        console.log("Nací en" + birthYearInput);
    }
/*Esta función recibe como parámetro un año de nacimiento, o mejor dicho un número. Por ejemplo mi año
es 2000, el resultado del console.log sería "Nací en2000"; y si fuera 1980 como dice la consigna
quedaría igual a la predicción 1 "Nací en1980", como el caso anterior no hay ningún espacio
al concatenar el string con el año, la solución sería la misma que la predicción anterior.*/

//PREDICCIÓN 3
function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 es: " + num1);
        console.log("num2 es: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }
/*En el caso de que pasemos (10,20) a la función esta imprimirá según la línea en orden
descendente. 
Es decir, el primer console.log: "¡Sumando números!"
El segundo console.log: "num1 es: 10"
El tercero console.log: "num1 es: 20"
Y por último luego de sumar los dos números se imprime el resultado de ese cálculo: "30".*/
    