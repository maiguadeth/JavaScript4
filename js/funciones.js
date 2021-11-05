/* Funciones */

/* Declaración => Sintaxis 1 */
// function saludar() {
// 	alert("Bienvenido a la clase de funciones");
// }

//saludar(); // Ejecutar/Invocar/Llamar a la función

/* Ej Calculadora */

// function sumar(x = 0, y = 0) {
// 	return x + y;
// 	console.log("Esto no se ejecuta");
// }

// function restar(x, y) {
// 	const resultado = x - y;
// 	console.log(`El resultado de ${x}-${y} es ${resultado}`);
// 	return resultado;
// }
// function multiplicar(x, y) {
// 	const resultado = x * y;
// 	console.log(`El resultado de ${x}*${y} es ${resultado}`);
// }
// function dividir(x, y) {
// 	const resultado = x / y;
// 	console.log(`El resultado de ${x}/${y} es ${resultado}`);
// }

// const operacion = Number(prompt(`Qué operación querés realizar?
// 1 - Sumar
// 2 - Restar
// 3 - Multiplicar
// 4 - Dividir`));

// const numero1 = Number(prompt("Ingresa el primer número"));
// const numero2 = Number(prompt("Ingresa el segundo número"));

// switch (operacion) {
// 	case 1:
// 		const suma = sumar(numero1, numero2);
// 		console.log(`El resultado de ${numero1}+${numero2} es ${suma}`);
// 		break;
// 	case 2:
// 		const resta = restar(numero1, numero2);
// 		console.log(resta);
// 		break;
// 	case 3:
// 		multiplicar(numero1, numero2);
// 		break;
// 	case 4:
// 		dividir(numero1, numero2);
// 		break;
// 	default:
// 		break;
// }

// 'use strict'

/* Diferencias entre VAR y LET/CONST */

// var miVar = "Variable VAR Global";
// let miLet = "Variable LET Global";
// const miConst = "Variable CONST Global";
// console.log(`Global Inicio: ${miVar}`);
// console.log(`Global Inicio: ${miLet}`);
// console.log(`Global Inicio: ${miConst}`);
// console.log(`=========== * ===========`);

// if (true) {
// 	var miVar = "Variable VAR Dentro del IF";
// 	let miLet = "Variable LET Dentro del IF";
// 	const miConst = "Variable CONST Dentro del IF";
// 	console.log(`IF: ${miVar}`);
// 	console.log(`IF: ${miLet}`);
// 	console.log(`IF: ${miConst}`);
// 	console.log(`=========== * ===========`);
// }

// function miFunc() {
// 	miVar = "Variable VAR Dentro de miFunc";
// 	miLet = "Variable LET Dentro de miFunc";
// 	const miConst = "Variable CONST Dentro de miFunc";
// 	console.log(`Funcion: ${miVar}`);
// 	console.log(`Funcion: ${miLet}`);
// 	console.log(`Funcion: ${miConst}`);
// 	console.log(`=========== * ===========`);
// }

// miFunc();
// console.log(`Global Final: ${miVar}`);
// console.log(`Global Final: ${miLet}`);
// console.log(`Global Final: ${miConst}`);

/* Funciones anónimas */

/* Declaración => Sintaxis 2 */

// const sumar = function (x, y) {
// 	return x + y;
// }

/* Arrow Functions */
const sumar1 = (x, y) => x + y;

function sumar2(x = 0, y = 0) {
  return x + y;
}
console.log(sumar1(50, 75));
console.log(sumar2(50, 75));
