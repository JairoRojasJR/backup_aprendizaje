const enviar = document.querySelector(".btn-snd");

enviar.addEventListener("click",()=>{
	try {
		prevRes = parseInt(document.querySelector(".nota").value);
		if (isNaN(prevRes)) {
			throw "Chiste mmvrg";
		}
		nota = validarNota(7,7,prevRes);
		mensaje = validarMsg(nota);
		if (nota >= 7) {
			respuesta = "APROBADO";
		} else {
			respuesta = "REPROBADO";
		}

	} catch(e) {
		console.clear();
		respuesta = e;
		mensaje = "He descubierto que quieres huaquiar el sitio";
	}
	abrirModal(respuesta, mensaje);
})

const validarMsg = (notaFinal)=>{
	let mssg;
	let notaF = Math.trunc(notaFinal);
	switch(notaF) {
		case 1: mssg = "Promedio:1, Mejor vuelve al kinder";
		break;
		case 2: mssg = "Promedio: 2, Vuelve a la escuelita anda";
		break;
		case 3: mssg = "Promedio: 3, Acaso estudias siquiera?";
		break;
		case 4: mssg = "Promedio: 4, Muy muy mal";
		break;
		case 5: mssg = "Promedio: 5, Muy mal";
		break;
		case 6: mssg = "Promedio: 6, Mal";
		break;
		case 7: mssg = "Promedio: 7, Bien, pero puede mejorar";
		break;
		case 8: mssg = "Promedio: 8, Muy bien";
		break;
		case 9: mssg = "Promedio: 9, Excelente";
		break;
		case 10: mssg = "Promedio: 10, Sobresaliente";
		break;
	}
		return mssg;
}

const validarNota = (nota1, nota2, pR)=>{
	resultado = (nota1 + nota2 + pR) / 3;
	return resultado;
}

const abrirModal = (res, msg)=>{
	document.querySelector(".respuesta").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = msg;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
}