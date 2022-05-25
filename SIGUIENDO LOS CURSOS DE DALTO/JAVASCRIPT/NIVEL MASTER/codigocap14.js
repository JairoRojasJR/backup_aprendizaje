"use strict";

let comentario;

// ========== PROTOTIPOS ==========
comentario = "Cuando queremos acceder a los prototipos ya definidos usamos .__proto__ (conocido como dunder proto)";

// let objeto = {
// 	"propiedad" : "datos"
// };

// let number = 23;
// let string = "hola que hace";

// console.log(objeto.__proto__);

// console.log(number.__proto__);
// console.log(number.__proto__.__proto__)
// console.log(number.prototype);

// console.log(string.__proto__);
// console.log(string.__proto__.__proto__);
// console.log(string.prototype);

comentario = "Cuando queremos acceder a prototipos que creamos nosotros usamos .prototype";

// let funcion = function(){};
// let funcionFlecha = ()=>{};

// console.log(funcion.__proto__);
// console.log(funcion.prototype);
// console.log(funcion.prototype.__proto__);

// console.log(funcionFlecha.__proto__);
// console.log(funcionFlecha.prototype);
// console.log(funcionFlecha.prototype.__proto__);

comentario = "Todos los objetos heredan las propiedades y métodos de su prototipo"

// let array = ["Hola",234,"hdj"];
// array.reverse();

// console.log(array);

comentario = "Los prototipos que creamos nosotros a su vez heredan el prototipo Objet";

// class Persona {
// 	constructor(){};
// 	hablar(){};
// }

// const objeto = new Persona();
// console.log(objeto);
// console.log(objeto.prototype);
// console.log(objeto.__proto__);
// console.log(objeto.__proto__.__proto__);

// ----- Modificación y herencia de métodos/propiedades de prototipos -----
// class Persona {
// 	constructor(){};
// 	hablar(){
// 		console.log("Hola mami");
// 	};
// }

// const objeto = new Persona();

// _____ Modificación por fuera _____
// objeto.hablar = ()=>{
// 	console.log("Modificado afuera");
// }

// console.log(objeto);
// objeto.hablar();

// _____ Modifición del prototipo _____

// objeto.__proto__.hablar = ()=>{
// 	console.log("Modificación en el prototipo");
// }
// console.log(objeto);
// objeto.hablar();

// _____ Herencia del prototipo _____

// objeto.__proto__.hablar = ()=>{
// 	console.log("Modificación en el prototipo");
// }

// const array = ["dlklfd",1543,"Que tranza perro"];
// array.__proto__ = objeto;

// console.log(array);
// array.hablar();

// comentario = "Al parecer le estamos cambiando el proto por ende no tiene los métodos de Array";
// array.reverse();

// ========== MODO ESTRICTO ("use strict") (se usa en la primera linea) ==========
comentario = "El modo estricto es una buena práctica que no permite errores de sintaxis mejorando así los tiempos de ejecución y lanzando excepciones cuando se comete un error";


// _____ Lanza exepciones cuando una variable no está declarada _____

// nombre = "Jairo";
// console.log(nombre);

// _____ Lanza excepciones cuando se intenta reescribir una variable que es solo de lectura (no writeable) _____;

// let obj = {};
// Object.defineProperty(obj,'nombre',{value:'Pedro',writeable:false});

// obj.nombre = "Javier";
// console.log(obj.nombre);

// _____ Lanza excepciones cuando se intenta agregar propiedades a un objeto no no extendible _____

// let obje = {nombre:'lucas'};

// Object.preventExtensions(obje);

// obje.apellido = "Dalto";
// console.log(obje);

// _____ No se puede agregar propiedades a un string _____;

// let texto = "Hola wacho";
// texto.hola = "wacho";
// console.log(texto.hola);

// _____ No permite parámetros duplicados en una función _____;

// function cigueña(nene,nene){
// 	console.log(nene);
// }

// cigueña("trajo un nene","trajo una nena");

// _____ Lanza excepcion en caso de que se intente eliminar una función o variable u objeto, con delete, ya que este solo es para eliminar propiedades;

// let obj = {
// 	nombre : 'Jairo',
// 	apellido : 'Rojas'
// }

// delete obj;
// console.log(obj);

// _____ No permite usar palabras reservadas (Algunas sí, como await) _____;

// let package = "Jorgito";
// console.log(package);

// let await = "guayaco";
// console.log(await);

// _____ Extra ____;

comentario = 'El modo estricto afecta al "funcionamiento" del this'; 
comentario = 'eval y arguments no pueden ser usados como variables';

comentario = 'El use strict tiene que ser la primera instrucción ya sea del programa o de un bloque sino no funciona';
comentario = 'Si el use strict está dento de un bloque, esto solo afectará a dicho bloque';

// ========== FUNCIONES FLECHA ==========;

// _____ UNICA EXPRESIÓN RETORNADA ____;

comentario = 'Si hay solo una expresión (una sola línea de código) la retorna, siempre y cuando se una expresión y no una sentencia'

// let frase;
// const saludar = ()=> frase = "La vaca lola";
// console.log(saludar());

// let frase2;
// const saludar2 = ()=> {frase2 = "La vaca lola"};
// console.log(saludar2());

// _____ UNICO PARÁMETRO NO ES NECESARIO PARENTESIS _____;
// let frase;
// const saludar = num => frase = "Hola que hace";

// console.log(saludar());

// ---------- THIS CONTEXTUAL ----------;

// comentario = 'El this de una función "normal" se refiere al objeto que lo contiene, en cambio el de una función flecha se refiere al objeto que contiene al objeto, en este caso window';

// const objeto = {
// 	nombre : 'Jairo',
// 	saludar : function(){
// 		console.log(`Hola ${this.nombre} como estas??`);
// 	}
// }

// const objeto2 = {
// 	nombre : 'Jairo',
// 	saludar : ()=>{
// 		console.log(`Hola ${this.nombre} como estas??`);
// 	}
// }

// window.nombre = 'Jhon'

// objeto.saludar();
// objeto2.saludar();

// --------------------;

comentario = 'No pueden ser usadas como constructor';

comentario = 'función "normal" ---comentar---';
// const constructorPersona = function(nombre, apellido){
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// };

// const persona = new constructorPersona('Jairo','Rojas');
// console.log(persona);

comentario = 'función flecha';
// const constructorPersona = (nombre, apellido)=>{
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// };

// const persona = new constructorPersona('Jairo','Rojas');
// console.log(persona);

// ------------------------------;

comentario = 'Como ya dijimos el this dentro de una función flecha se refiere al objeto window, y dentro de una función "normal" se refiere al objeto en sí';

// this.nombre = 'Rojas';

comentario = 'Cambiar la función saludar como función flecha y como función "normal"';

// const saludar = function(){
// 	console.log(`Hola ${this.nombre}`);
// }

// const objeto = {
// 	nombre: 'Jairo',
// 	saludar
// }

// function otroContexto(){
// 	this.nombre = 'Jhon';
// 	this.saludar = saludar;
// }

// objeto.saludar();
// const objeto2 = new otroContexto();
// objeto2.saludar();

// console.log(this.nombre);
// saludar();

// ---------- RECURSIVIDAD ----------;

comentario = 'La recursividad consiste en llarmar a una función dentro de otra función';

// const validarEdad = msg =>{
// 	try{
// 		let edad;
// 		if(msg) edad = prompt(msg);
// 		else edad = prompt("Introduce tu edad");
// 		edad = parseInt(edad);
// 		if(isNaN(edad)) throw "Introduce un número para la edad";
// 		if(edad >= 18) console.log("eres mayor de edad");
// 		else console.log("eres menor de edad");
// 	} catch(e){
// 		validarEdad(e);
// 	}
// }

// validarEdad();

// ---------- CLAUSULAS ----------;

comentario = `Las clausulas consisten el retorno de una función dentro de otra`;

// const saludar = (nombre)=> {
// 	return function(){
// 		console.log('Hola ' + nombre);
// 	}
// }

// const saludo = saludar('Pedro');
// addEventListener("load",saludo);

// ---------- PARÁMETROS POR DEFECTO ----------;

comentario = 'En este caso como le pasamos solo un parámetro lo sumará con el otro que es undefined';
// const suma = (a,b)=>{
// 	console.log(a+b);
// }
// suma(10);

comentario = 'Esta es la forma antigua';
// const suma2 = (a,b)=>{
// 	b = typeof b !== 'undefined' ? b : 0;
// 	console.log(a+b)
// }
// suma2(20)

comentario = 'Estas son las formas nuevas';
// const suma3 = (a,b)=>{
// 	b = b || 0;
// 	console.log(a+b)
// }
// suma3(30)

// const suma4 = (a = 0,b = 0)=>{
// 	console.log(a+b)
// }
// suma4(40)

// ---------- SPREAD PARAMETER -----;

comentario = 'Este se usa como último parámetro ya que se refiere al resto'
// const suma = (...num)=>{
// 	let resultado = 0;
// 	for (let i = 0; i < num.length; i++){
// 		resultado+= num[i];
// 	}
// 	console.log(resultado);
// }
// suma(30,30,33);

// ---------- OPERADOR TERNARIO ----------;

// let edad = 14;

// (edad >= 18) 
// 	?
// 	(
// 		console.log('Es mayor de edad'),
// 		console.log('Puede pasar')
// 	)
// 	:
// 	(
// 		console.log('Es menor de edad'),
// 		console.log('No puede pasar')
// 	);

// ---------- SPREAD OPERATOR EN ARRAYS ----------;

comentario = 'De este modo se desestructura el array';
// let array = ["valor1","valor2","valor3"];
// console.log(...array);

comentario = 'De este modo podemos agregar los elementos de un array dentro de otro';
// let array2 = ["kiwi","pera"];
// array.push(...array2);
// console.log(array);

comentario = 'De este modo podemos unir los elementos de dos o mas arrays en uno nuevo';
// let array3 = [...array,...array2];
// console.log(array3);

// ---------- SPREAD OPERATOR COMO ARGUMENTO ----------;

// const sumar = (num1,num2)=>{
// 	console.log(num1 + num2);
// };

// let array = [2,5];
// sumar(array);
// sumar(...array);

// ********** FIN DEL CAPÍTULO **********;