/* LINK DE GITHUB:https://github.com/pedroserna22/crearVariables
LA BRANCH y el archiv se llaman: "parametros".

DESAFÍO: PARÁMETROS

NIVEL 1: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE */
function saludar(nombre) {
    return "¡Buen día, " + nombre + "!";
}
//En el nivel 1 se define la función para que reciba el nombre como parámetro
//y retorna a una concatenación del nombre ingresado + un string que es buen día.
//EJEMPLO
console.log(saludar("Anakin")); // Resultado de consola:¡Buen día, Anakin!


/* NIVEL 2: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE Y LA HORA*/
function saludar2(nombre, hora) {
    if (hora < 12) {
        return "¡Buenos días, " + nombre + "!";
    } else if (hora < 18) {
        return "¡Buenas tardes, " + nombre + "!";
    } else {
        return "¡Buenas noches, " + nombre + "!";
    }
}
//En el nivel 2 se usa la estructura if...else if...else, toma el nombre como parámetro
//pero para las condiciones solo se usa la hora, según la condición que cumpla lo que retorna la función.
//EJEMPLOS
console.log(saludar2("Anakin", 10)); // Resultado de consola:¡Buenos días, Anakin!
console.log(saludar2("Anakin", 15)); // Resultado de consola:¡Buenas tardes, Anakin!
console.log(saludar2("Anakin", 20)); // Resultado de consola:¡Buenas noches, Anakin!

/* NIVEL 3: FUNCIÓN QUE DEVUELVE UN SALUDO Y QUE TOMA COMO PARÁMETRO EL NOMBRE Y LA HORA PERO SE AGREGA OTRO ELSE IF*/
function saludar3(nombre, hora) {
    if (nombre === "Count Dooku") {
        return "¡Voy por ti, Dooku!";
    } else if (hora < 12) {
        return "¡Buenos días, " + nombre + "!";
    } else if (hora < 18) {
        return "¡Buenas tardes, " + nombre + "!";
    } else {
        return "¡Buenas noches, " + nombre + "!";
    }
}
//En el nivel 3 se usa la misma estructura y mismos parámetros, nada mas que se agrega otra sentencia,
//que es "true" si el usuario ingresa como nombre ="Count Dooku", entonces imprime "¡Voy por ti, Dooku!".
//EJEMPLOS
console.log(saludar3("Anakin", 20)); // Resultado de consola:¡Buenas noches, Anakin!
console.log(saludar3("Count Dooku")); // Resultado de consola: ¡Voy por ti, Dooku!
