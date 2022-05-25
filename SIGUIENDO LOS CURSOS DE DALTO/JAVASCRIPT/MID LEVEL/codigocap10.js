// ********** CAPITULO 10 **********
// ========== SENTENCIA DE CONTROL DE FLUJO ==========
// ________________________________________ (switch);
// let exp = "Manzana";

// switch(exp) {
// 	case "Banana":
// 		console.log("Soy de color amarillo");
// 		alert("es banana");
// 		break
// 	case "Pera":
// 		console.log("Tengo forma de cul*");
// 		alert("es pera");
// 		break
// 	case "Manzana":
// 		console.log("Los primeros humanos pecaron comiendola");
// 		alert("es manzana");
// 		break
// 	default:
// 		console.log("No es ninguna XD");
// 		alert("No es ninguna")
// };
// ========== SENTENCIA DE MANEJO DE EXCEPCIONES ==========
// ________________________________________ (try...catch);
// try {
// 	lajdkflsdkl;
// }

// catch(error) {
// 	console.log(error);
// 	console.log("Lo siento ocurrió un error de referencia");
// 	console.log(typeof error);
// }
// ________________________________________ (catch condicional);
// try {
// 	lajdkflsdkl;
// }

// catch(error) {
// 	if (3 > 5) {
// 		console.log("Lo siento ocurrió un error de referencia");
// 	} else {
// 		console.log("pito");
// 	}
// }
// ________________________________________ (finally);
// try {
// 	console.log("Hola que hace");
// }

// catch(error) {
// 	console.log("Lo siento ocurrió un error de referencia");
// }

// finally {
// 	console.log("La vaca lola");
// }
// ________________________________________ (finally);
// let pruebaFinally = ()=>{
// 	try {
// 		return 1;
// 	}

// 	catch(error) {
// 		return 2;
// 	}

// 	finally {
// 		return 3;
// 	}
// }

// console.log(pruebaFinally());
// ________________________________________ (throw);
// throw "chupame un pie";
// ________________________________________ (throw);
// try {
// 	throw "pito: pito pito";
// }

// catch(error) {
// 	console.log(error);
// }

// finally {
// 	console.log("La vaca lola");
// }
// ________________________________________ (throw);
// try {
// 	throw {
// 		error:"NombreDelError",
// 		info: "Info del error"
// 	}
// }

// catch(e) {
// 	console.log(e.info);
// };