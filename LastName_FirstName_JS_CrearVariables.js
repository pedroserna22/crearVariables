/* PASO 1:IDENTIFICAR VARIABLES
    Para determinar si una persona puede subir a la Montaña Rusa se necesitan dos variables numéricas:
    1- Una para almacenar la altura.
    2- Otra para almacenar la edad. 

 PASO 2:CREACIÓN DE VARIABLES
    DUDA: En el material se usa para crear variables "var", usualmente uso "let" 
    tengo entendido que tienen algunas diferencias, pero no sé cuál es mas recomendable */

var alturadePersona;
var edaddePersona;

/* PASO 3:EXPLICACIÓN
    Para que una persona pueda subirse, es necesario que cumplan las condiciones dadas por el ejercicio
    Que como bien dice, "deben medir al menos un metro" y "ser mayor a 10 años"
    Con otra sintaxis debería ser: alturadePersona >= 1 & edaddePersona > 10*/

alturadePersona = 1.3;
edaddePersona = 13;

/* En el paso 2 las variables se declaran, en el paso 3 se les asigna un valor, en este último
   punto ambos cumplen con los requisitos para subir a la Montaña Rusa.
   Sin embargo, pasando a como es que se comprueba si la persona cumple esas condiciones
   en código o mejor dicho en pseudocódigo, sería aplicando un condicional if else, es decir SI cumple tal condicion SINO ... 

   SI (alturadePersona >= 1 & edaddePersona > 10) Entonces
        Escribir "Esta persona puede subir a la Montaña"
    SINO
        Escribir "Esta persona no está habilitada a subir"
 */


