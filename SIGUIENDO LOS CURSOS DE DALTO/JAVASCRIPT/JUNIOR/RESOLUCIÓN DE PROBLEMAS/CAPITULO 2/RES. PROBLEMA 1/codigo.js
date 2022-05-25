let free = false;

const validarCliente = (time)=>{
	let edad = prompt("¿Cuántos años tienes?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert("Puedes pasar gratis por el primero después de las 2, wuap@")
			free = true;
		} else {
			alert("Puedes pasar pero tienes que pagar")
		}
	} else {
		alert("Eres menor de edad, anda a lavarte las nalgas MAQUINA")
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);