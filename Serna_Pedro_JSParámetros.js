/* LINK DE GITHUB:https://github.com/pedroserna22/crearVariables
LA BRANCH y el archiv se llaman: "parametros".

DESAFÍO: PARÁMETROS

NIVEL 1: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE */
function saludar(nombre) {
    console.log("¡Buen día, " + nombre + "!");
}
//En el nivel 1 se define la función para que reciba el nombre como parámetro
//e imprime una concatenación del nombre ingresado + un string que es buen día.
//EJEMPLO
saludar("Anakin"); // Resultado de consola:¡Buen día, Anakin!


/* NIVEL 2: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE Y LA HORA*/
function saludar2(nombre, hora) {
    if (hora < 12) {
        console.log("¡Buenos días, " + nombre + "!");
    } else if (hora < 18) {
        console.log("¡Buenas tardes, " + nombre + "!");
    } else {
        console.log("¡Buenas noches, " + nombre + "!");
    }
}
//En el nivel 2 se usa la estructura if...else if...else, toma el nombre como parámetro
//pero para las condiciones solo se usa la hora, según la condición que cumpla lo que imprime la función.
//EJEMPLOS
saludar2("Anakin", 10); // Resultado de consola:¡Buenos días, Anakin!
saludar2("Anakin", 15); // Resultado de consola:¡Buenas tardes, Anakin!
saludar2("Anakin", 20); // Resultado de consola:¡Buenas noches, Anakin!

/* NIVEL 3: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE Y LA HORA PERO SE AGREGA OTRO ELSE IF*/
function saludar3(nombre, hora) {
    if (nombre === "Count Dooku") {
        console.log("¡Voy por ti, Dooku!");
    } else if (hora < 12) {
        console.log("¡Buenos días, " + nombre + "!");
    } else if (hora < 18) {
        console.log("¡Buenas tardes, " + nombre + "!");
    } else {
        console.log("¡Buenas noches, " + nombre + "!");
    }
}
//En el nivel 3 se usa la misma estructura y mismos parámetros, nada mas que se agrega otra sentencia,
//que es "true" si el usuario ingresa como nombre ="Count Dooku", entonces imprime "¡Voy por ti, Dooku!".
//EJEMPLOS
saludar3("Anakin", 20); // Resultado de consola:¡Buenas noches, Anakin!
saludar3("Count Dooku"); // Resultado de consola: ¡Voy por ti, Dooku!