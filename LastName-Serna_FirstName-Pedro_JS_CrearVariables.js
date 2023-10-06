/* PEDRO SERNA, LINK DE GIT: https://github.com/pedroserna22/crearVariables
Hay una branch con la solución de esta actividad, el main contiene la actividad de crear variables*/

/* PASO 1:REVISAR Y EDITAR VARIABLES*/
/* VARIABLES DEFINIDAS ANTERIORMENTE
firstName= Pedro;
lastName= Serna;
alturadePersona = 1.3; Ahora según la letra tiene que ser mayor a 52, y no a 1 metro como se decía antes.
edaddePersona = 13; La edad mínima se mantiene en 10
"(alturadePersona >= 1 Y edaddePersona > 10)"
*/

/*REDECLARACIÓN DE VARIABLES Y CREACIÓN DE FUNCIÓN
La edad mínima en 10 y la altura se define en 52.
En esta función solamente se comprueba la altura, toma como parámetro una altura y comprueba en el if si 
es mayor a la altura mínima, es decir que cumple con la condición, entonces
imprime por consola "¡Súbete, chico!", sino de lo contrario a "Lo siento, chico. Tal vez el próximo año."*/

alturaMin=52;
edadMin=10;

function subealaMontañaRusa(altura) {
    if (altura > alturaMin) {
      console.log("¡Súbete, chico!");
    } else {
      console.log("Lo siento, chico. Tal vez el próximo año.");
    }
  }

/*STRETCH 1
Se modifica la función para que a parte de requerir y comprobar la altura haga lo mismo con la edad
Se hace uso del operador AND "&&", en el caso que ambas condiciones se cumplan entra se imprime "¡Súbete, chico!".*/  
function subealaMontañaRusaStretch1(altura, edad) {
    if (altura > alturaMin && edad > edadMin) {
      console.log("¡Súbete, chico!");
    } else {
      console.log("Lo siento, chico. Tal vez el próximo año.");
    }
  }

/*STRETCH 2
Para el stretch 2 se modifica nuevamente la función, sin embargo la estructura y lógica es la misma, simplemente
se cambia el operador en el condicional pasando a ser OR, es decir, si se cumple una de las dos condiciones
el niño podrá subir a la montaña, si no se cumple ninguna, no.*/  
function subealaMontañaRusaStretch2(altura, edad) {
    if (altura > alturaMin || edad > edadMin) {
      console.log("¡Súbete, chico!");
    } else {
      console.log("Lo siento, chico. Tal vez el próximo año.");
    }
  }

/*PRUEBAS STRETCH 2*/
subealaMontañaRusaStretch2(60,11)//Cumple las DOS condiciones, por lo que imprime "¡Súbete, chico!".
subealaMontañaRusaStretch2(60,9)//Cumple UNA condición por lo que imprime "¡Súbete, chico!".
subealaMontañaRusaStretch2(50,9)//No cumple ninguna condición así que mostrará "Lo siento, chico. Tal vez el próximo año.".
/*PRUEBAS STRETCH 1*/
subealaMontañaRusaStretch1(60,10)//Se cumple UNA condición, pero se necesitan las dos ya que el operador es AND asi que mostrará "Lo siento, chico. Tal vez el próximo año.".
subealaMontañaRusaStretch1(58,13)//Cumple las DOS condiciones, por lo que imprime "¡Súbete, chico!".