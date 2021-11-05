// Imprimimos texto en la consola
// console.log("Hola desde variables.js");
// console.log(2 + 3);

/*
	Soy un comentario
	multilinea
*/

/* Variables */
// Def: Un espacio en memoria donde se va a guardar información

// Declarar variables (ES5)
// var nombre = "Les digo \"Bienvenidos\""; // "String"
// var nombre = "Hola soy otra cosa";

// console.log(nombre);
// Declarar variables (ES6)
// let => Podemos cambiar su contenido (NO redeclarar)

// let apellido; // Declaración

// apellido = "Perez" // Asignación
// console.log(apellido);

// apellido = 156;
// console.log(apellido);

// const PI_TEXTO = "3.14";
// const PI = 3.14;

// console.log(PI_TEXTO);
// console.log(PI_NRO);

/* Operaciones matemáticas */
/* Operaciones con datos numericos */

const base = 12;
const altura = 3;

const areaRectangulo = base * altura;
const perimetro = 2 * base + 2 * altura;
const resta = base - altura;
const division = base / altura;
const potencia = base ** 2;
const raiz = Math.sqrt(144); // square root

/* console.log(areaRectangulo);
console.log(perimetro);
console.log(resta);
console.log(division);
console.log(potencia);
console.log(raiz); */

/* Operaciones con Strings (texto) */
// let nombre = "Claudio";
// let apellido = "Gutierrez"

// console.log("Hola" + " " + nombre + " " + apellido);
// console.log("El area del rectángulo es " + areaRectangulo);

/* Consultar el tipo de dato de una variable */
// console.log(typeof areaRectangulo);

/* Recibir datos de un usuario */
// let nombreUsuario = prompt("Decinos tu nombre");
let edad = Number(prompt("Cuántos años tenés?"));
// let edadNumber = Number(edad); // Parseo a number

/* Mostrar un mensaje al usuario */
// alert("Hola " + nombreUsuario);
console.log(edad + 10);

/* Parsear de string a number */

// const number1 = parseInt("23.34");
// const number2 = parseFloat("23.56");
// const number3 = Number("23.56");

// console.log(number1);
// console.log(number2);
// console.log(number3);
