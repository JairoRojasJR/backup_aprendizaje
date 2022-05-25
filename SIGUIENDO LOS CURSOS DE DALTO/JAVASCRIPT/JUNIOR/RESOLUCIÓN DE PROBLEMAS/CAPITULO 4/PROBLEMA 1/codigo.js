class Calculadora {
	constructor(){
	}

	sumar(num1, num2){
		return parseInt(num1) + parseInt(num2);
	}

	restar(num1, num2){
		return parseInt(num1) - parseInt(num2);
	}

	dividir(num1, num2){
		return parseInt(num1) / parseInt(num2);
	}

	multiplicar(num1, num2){
		return parseInt(num1) * parseInt(num2);
	}
	potenciar(num,exp){
		return parseInt(num**exp);
	}
	raizCuadrada(num){
		parseInt(num);
		return Math.sqrt(num);
	}
	raizCubica(num){
		parseInt(num);
		return Math.cbrt(num);
	}
}

calcular = new Calculadora();

let operacion = prompt(`Que operación deseas realizar: 1: Sumar 2: Restar 3: Dividir 4: Multiplicar 5: Potenciar 6: Raíz Cuadrada 7: Raíz Cúbica`);
	if (operacion == 1) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		resultado = calcular.sumar(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 2) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		resultado = calcular.restar(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 3) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		resultado = calcular.dividir(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 4) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		resultado = calcular.multiplicar(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 5) {
		let numero = prompt("Ingresa el número a potenciar");
		let exponente = prompt("Ingresa el número a potenciar");
		resultado = calcular.potenciar(numero,exponente);
		alert(resultado);
	}

	else if (operacion == 6) {
		let numero = prompt("Ingresa el número a obtener su raíz cuadrada");
		resultado = calcular.raizCuadrada(numero);
		alert(resultado);
	}

	else if (operacion == 7) {
		let numero = prompt("Ingresa el número a obtener su raíz cúbica");
		resultado = calcular.raizCubica(numero);
		alert(resultado);
	}

	else {
		alert("No se ha encontrado la operación");
	}