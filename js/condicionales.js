// const user = prompt("Ingresa tu nombre de usuario");
// const pass = prompt("Ingresa tu password");
// const edad = Number(prompt("Ingresa tu edad"));

/* "NUEVO" TIPO DE DATO: BOOLEANO */
// const booleanoVerdadero = true;
// const booleanoFalso = false;
// console.log(typeof booleanoFalso, booleanoFalso);
// console.log(typeof booleanoVerdadero, booleanoVerdadero);

/* 
Admin: "admin" Pass: admin123,
Usuarios sin permisos:
User1: "martin", Pass: martin123,
User2: "carlos", Pass: carlitos,
User3: "lidia", Pass: luna
*/
// const adminValido = user == "admin" && pass == "admin123";
// const usuarioValido = (user == "martin" && pass == "martin123") || (user == "carlos" && pass == "carlitos") || (user == "lidia" && pass == "luna");

// /* Estructura IF básica */
// if (adminValido) {
// 	console.log("Bienvenido Admin Maestro");
// } else if (usuarioValido) {
// 	console.log("Bienvenido " + user);
// } else {
// 	console.log("Datos incorrectos");
// }

// if (edad < 18) {
// 	// Se ejecuta si la condición es verdadera
// 	console.log("No podés ingresar, sos menor de edad");
// } else if (edad < 21) {
// 	console.log("Acceso permitido, entre 18 y 21");
// } else {
// 	console.log("Acceso permitido, tenés 21 o más");
// }

// console.log("Después del IF");

/* Estrucura SWITCH-CASE */
// const user = prompt("Ingresa tu nombre de usuario");
// const pass = prompt("Ingresa tu password");

switch (user) {
  case "admin": // user == "admin"
    if (pass === "admin1234") {
      alert("Bienvenido Administrador");
    }
    break;
  case "martin":
    alert("Bienvenido Martin");
    break;
  case "carlos":
    alert("Bienvenido Carlos");
    break;
  case "lidia":
    alert("Bienvenida Lidia");
    break;
  default:
    alert("Credenciales inválidas");
    break;
}

const number = 15;

switch (number) {
  case 0:
    console.log("Numero es 0");
    break;
  case 5:
    console.log("Numero es 5");
    break;
  case 10:
    console.log("Numero es 10");
    break;
  case 15:
    console.log("Numero es 15");
    break;
  case 20:
    console.log("Numero es 20");
    break;
  default:
    break;
}
