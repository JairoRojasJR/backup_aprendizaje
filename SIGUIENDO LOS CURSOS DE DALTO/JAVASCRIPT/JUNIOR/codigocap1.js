// ========== COMO ENLAZAR ==========

// alert('como está')

// ========== VARIABLES ==========

// let recipiente = "queso", recipiente2 = 10, recipiente3 = 5, recipiente5;

// let rico = "yo";
// let rico2 = "tambien yo";
// let rico3 = "nada mas yo";

// recipiente4 = "sabrosura";

// alert(recipiente);
// alert(recipiente2);
// alert(recipiente3);
// alert(recipiente4);
// alert(recipiente5);

// alert(rico);
// alert(rico2);
// alert(rico3);

// let rico4 = 5;
// let rico5 = "rico";

// resultado = (rico4 * rico5);
// alert(resultado);

// let nombre = prompt("Dime tu nombre wacho cagón")
// alert("hola " + nombre)

// ========== OPERADORES DE ASIGNACIÓN ==========

// let numero = 10;
// let numero2 = 10;
// let numero3 = 10;
// let numero4 = 10;
// let numero5 = 10;
// let numero6 = 10;

// numero+= 5;
// numero2-= 5;
// numero3*= 5;
// numero4/= 5;
// numero5%= 3;
// numero6**= 3;

// document.write("Adición: " + numero);
// document.write("____Sustracción: " + numero2);
// document.write("____Multiplicación: " + numero3);
// document.write("____División: " + numero4);
// document.write("____Resto: " + numero5 + "(Muestra el resto de una división)");
// document.write("____Exponencialización: " + numero6);

// ========== OPERADORES ARITMÉTICOS ==========

// let numero1 = 10;
// let numero2 = 5;

// resultado = numero1 + numero2;

// numero1--;
// resultado2 = numero1;
// numero1 = 10;

// document.write("Adición: " + resultado + "___");
// document.write( "Decremento: " + resultado2 + "___");

// resultado3 = numero1 / numero2;

// document.write( "División: " + resultado3);

// resultado4 = numero1**2;
// document.write( "___Exponencialización: " + resultado4);

// resultado5 = numero1**numero2;
// document.write( "___Exponencialización 2.0: " + resultado5);

// numero1++;
// resultado6 = numero1;
// numero1 = 10;
// document.write( "___Incremento: " + resultado6);

// resultado7 = numero1&numero2;
// document.write( "___Resto: " + resultado7);

// resultado8 = numero1 - numero2;
// document.write( "___Substración: " + resultado8);

// resultado8 = -numero1;
// document.write( "___Negación unaria: " + resultado8);

// ========== Concatenación ==========

// -----CON EL SIGNO MÁS-----

// saludo = "Hola guapo";
// pregunta = " ¿Cómo estás?";

// frase = saludo + pregunta;
// document.write(frase);

// -----FORZANDO EL STRING-----

// numero1 = 50;
// numero2 = 8;

// frase = "" + numero1 + numero2;
// document.write(frase);

// -----CON EL MÉTODO CONCAT-----

// numero1 = "50";
// numero2 = 8;

// frase = numero1.concat(numero2);
// document.write(frase);

// -----CON BACKTIKCS Y LA VARIABLE CON ${}-----

// nombre = "Jairo Rojas";
// frase = `Soy ${nombre} y me estoy jalando el ganzo`;
// document.write(frase);

// -----ESCAPE-----

// frase2 = `Hola soy "Jairo" y me 'comes' la poronga`;
// document.write(frase2);

// ========== OPERADORES (INTERMEDIO) ==========

// -----OPERADORES DE COMPARACIÓN-----

// numero1 = 10;
// numero2 = 10;
// numero3 = 15;
// numero4 = "10";

// alert(numero1 == numero2);
// alert(numero1 != numero2);
// alert(numero1 === numero4);
// alert(numero1 !== numero4);

// -----OPERADORES LÓGICOS-----

// num1 = 15;
// num2 = 20;

// afirmacion1 = num1 < num2;
// afirmacion2 = num1 != num2;
// afirmacion3 = num1 > num2;
// afirmacion4 = num1 == num2;

// alert(afirmacion1 && afirmacion2);
// alert(afirmacion1 && afirmacion3);
// alert(afirmacion3 || afirmacion4);
// alert(afirmacion2 || afirmacion4);
// alert(!afirmacion1);
// alert(!afirmacion4);

// ========== CAMEL CASE ==========

// document.getElementById()

// ========== CONDICIONALES ==========

// nombre = "Juan"

// if (nombre == "Jairo") {
// 	alert("Tu nombre es " + nombre)
// }

// else if (nombre == "Jhon") {
// 	alert("Tu nombre es " + nombre)
// }

// else {
// 	alert("Tu nombre es otro")
// }

// ========== ARRAYS ==========

// let frutas = ["manzana", "banana", "pera"];

// document.write(frutas[0]);

// ========== ARRAYS ASOCIATIVOS ==========

// let pc = {
// 	nombre: "Jayo",
// 	procesador: "Ryzen 5",
// 	memoria: "32gb",
// 	discoduro: "2tb",
// };

// let nombre = pc["nombre"];
// let procesador = pc["procesador"];
// let ram = pc["memoria"];
// let dd = pc["discoduro"];

// frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
// 		 El procesador es: <b>${procesador}</b> <br>
// 		 La memoria Ram es de: <b>${ram}</b> <br>
// 		 El discoduro es de: <b>${dd}</b>`;

// document.write(frase);

// ========== BUCLES E ITERACIÓN==========

// ----- WHILE -----

// let numero = 0;

// while (numero < 10) {
// 	numero++;
// 	document.write(numero + "<br>");
// };

// ----- DO WHILE -----

// let numero = 0;

// do {
// 	document.write(numero);
// 	numero++;
// }

// while (numero <= 10);

// ----- BREAK -----

// let numero = 0;

// while (numero < 1000) {
// 	numero++;
// 	document.write(numero + "<br>");
// 	if (numero == 8) {
// 		break;
// 	}
// };

// ----- FOR -----

// for (let i = 0; i <= 10; i++) {
// 	document.write(i + "<br>")
// }

// document.write(`<br>`)

// let i = 6

// for (i; i >= 0; i--) {
// 	document.write(i + "<br>");
// };

// document.write(i);

// ----- CONTINUE -----

// for (let i = 0; i <= 10; i++) {
// 	if (i == 5) {
// 		continue
// 	};
// 	document.write(i + "<br>");
// };

// ----- FON IN, FOR OF -----

// animales = ["perro","gato","tiranosaurio rex"];

// for (animal in animales) {
// 	document.write(animal + "<br>");
// };

// document.write("<br>");

// for (animal in animales) {
// 	document.write(animales[animal] + "<br>");
// };

// document.write("<br>");

// for (animal of animales) {
// 	document.write(animal + "<br>");
// }

// ----- FON IN, FOR OF, Sentencia label -----

// array1 = ["pedro", "maria", "josefa"];
// array2 = ["juan","roberto",array1, "putafina"];

// forRancio:
// for (let array in array2) {
// 	if (array == 2) {
// 		for (let array of array1) {
// 			break forRancio;
// 			document.write(array + "<br>")
// 		}
// 	} else {
// 		document.write(array2[array] + "<br>")
// 	}
// }

// ========== FUNCIONES ==========

// ----- COMO CREAR FUNCIONES -----

// function saludar(){
// 	respuesta = prompt("Hola Jairo, ¿Cómo estas?");
// 	if (respuesta == "bien") {
// 		alert("me alegro")
// 	} else {
// 		alert("una pena")
// 	}
// }

// saludar()
// saludar()
// saludar()

// ----- RETURN -----

// function saludar(){
// 	alert("Hola");
// 	return "Excelente";
// }

// let saludo = saludar();
// document.write(saludo);

// ----- PARÁMETROS -----

// function suma(suma1, suma2){
// 	res = suma1 + suma2;
// 	return res;
// }

// resultado = suma(10,10)
// document.write(resultado + "<br>")
// resultado2 = suma(30,5)
// document.write(resultado2 + "<br>")
// resultado3 = suma(17,13)
// document.write(resultado3 + "<br>")

// // ----- OTRAS FORMAS DE CREAR FUNCIONES -----

// const saludar = function(nombre){
// 	let frase = `Hola ${nombre} ¿Cómo estas?`
// 	document.write(frase)
// }

// saludar("Jairo")

// ----- OTRAS FORMAS DE CREAR FUNCIONES (FUNCIONES FLECHA) -----

// const saludar = (nombre)=>{
// 	let frase = `Hola ${nombre} ¿Cómo estas?`
// 	document.write(frase)
// }

// saludar("Pedro")

