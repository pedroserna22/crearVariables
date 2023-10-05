/*//LINK DE GITHUB: https://github.com/pedroserna22/crearVariables
ESTA ACTIVIDAD SE ENCUENTRA EN LA BRANCH: "Loop-d-loop"
PASO 1-RESPUESTA A PREGUNTAS:
1. ¿Cómo sabemos que necesitamos un bucle aquí?
    Es necesario un bucle para comprobar la distancia que recorre el corredor y así saber cuando dar el caramelo o detenerse, a parte de
    que sería una tarea "repetitiva", y nos ahorraría código hacer un for.
2. ¿Cuál es el punto de partida del bucle?
    El bucle comienza en 0 hablando de KM, osea cuando el corredor está por comenzar.
3. ¿Cuándo debe detenerse el bucle?
    El bucle para cuando el corredor llega a los 10 kilómetros.
4. ¿Cómo sabrá parar?
    Relacionado al punto anterior, el bucle parará cuando el corredor alcance los 10 kilómetros, y esa instrucción
    se la damos nosotros en la definición del bucle, al igual que el punto de partida.
5. ¿Cuál es el incremento para cada iteración del bucle?
   El incremento debería ser 1 kilómetro, o sea i++.
6. ¿Qué variables necesitamos?
   La primera variable necesaria es una que almacene la distancia recorrida por el corredor y otra para el Stretch
   que tome la velocidad de desplazamiento.*/

/*

AMBIGUEDAD DE ACTIVIDAD
En la actividad se solicita dar un caramelo a un corredor, pero en la letra principal dice esto:
"un corredor llega a 3 kilómetros" eso me da a entender que la condición sería distanciaRecorr == 3
sin embargo en el stretch se solicita: "reciba un caramelo cada 3 kilómetros", por lo que sería if (distanciaRecorrida % 3 == 0)
Al no saber cual de las dos soluciones es la correcta para este caso voy a proponer 2 soluciones.

BUCLE FOR Y DEFINICIÓN DE VARIABLES
*/
var distanciaRecorrida=0;
var velocidadDesplazamiento=0;

// SOLUCIÓN 1  :EL CORREDOR RECIBE CARAMELO CUANDO LLEGA A LOS 3 KM 
for(let i=0; i<10; i++){
    distanciaRecorrida= distanciaRecorrida + 1;
    if(distanciaRecorr == 3) {
        console.log("¡Dale un caramelooo!")
    }
}

//STRETCH 1-SOLUCIÓN 1
//Se modifica el bucle: EL CORREDOR RECIBE CARAMELO CUANDO LLEGA A LOS 3 KM Y ALCANZA LA VELOCIDAD DE 9 KM
for(let i=0; i<10; i++){
    distanciaRecorrida= distanciaRecorrida + 1;
    if(distanciaRecorrida === 3 && velocidadDesplazamiento > 9) { //acá entiendo iría cada 3km y no solo a los 3km, pero eso se plantea                                                         
        console.log("¡Dale un caramelooo!")                       //más abajo en la segunda solución.
    }
}

// SOLUCIÓN 2 : EL CORREDOR RECIBE CARAMELO CADA 3 KM, ES DECIR A LOS 3, 6 Y 9 YA QUE EN 10 FINALIZA
//Para esta segunda solución la estructura y lógica es la misma, solo cambia el condicional if.

for(let i=0; i<10; i++){
  distanciaRecorr= distanciaRecorr + 1;
  if(distanciaRecorr % 3 === 0) {
      console.log("¡Dale un caramelooo!")
  }
}

//STRETCH 1-SOLUCIÓN 2
//EL CORREDOR RECIBE CARAMELO CADA 3 KM Y ALCANZA LA VELOCIDAD DE 9 KM
for(let i=0; i<10; i++){
  distanciaRecorrida= distanciaRecorrida + 1;

  if(distanciaRecorrida % 3 === 0 && velocidadDesplazamiento > 9) {
      console.log("¡Dale un caramelooo!")
  }
}

//Por útlimo, asumo que este for tendría que ir dentro de una función que quizás
//reciba la velocidad de desplazamiento como parámetro, de esa manera se cumpliría la condición