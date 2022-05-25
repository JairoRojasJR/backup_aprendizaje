const sumar = (num1, num2)=>{
	return resultado = parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
	return resultado = parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=>{
	return resultado = parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=>{
	return resultado = parseInt(num1) * parseInt(num2);
}

let operacion = prompt(`Que operación deseas realizar: 1:Sumar 2:Restar 3:Dividir 4:Multiplicar`);
	if (operacion == 1) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		sumar(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 2) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		restar(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 3) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		dividir(numero1, numero2);
		alert(resultado);
	}

	else if (operacion == 4) {
		let numero1 = prompt("Ingresa el número 1");
		let numero2 = prompt("Ingresa el número 2");
		dividir(numero1, numero2);
		alert(resultado);
	}

	else {
		alert("No se ha encontrado la operación");
	}