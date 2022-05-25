const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const mensaje = document.querySelector(".mensaje");

boton.addEventListener("click",(e)=>{
	e.preventDefault()
	let error = validarCampos();
	if (error[0]) {
		mensaje.innerHTML = error[1];
		mensaje.classList.add("red");
	} else {
		mensaje.innerHTML = "Solicitud enviada correctamente" ;
		mensaje.classList.remove("red");
		mensaje.classList.add("green");
	}
});

validarCampos = ()=>{
	let error = [];
	if (nombre.value.length < 5 || nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre es invalido";
		return error;
	} else if (email.value.length < 5 || email.value.length > 40 ||
			   email.value.indexOf("@") == -1 ||
			   email.value.indexOf(".com") == -1) {
		error[0] = true;
		error[1] = "El email no es correcto"
		return error
	} else if (materia.value.length < 5 || materia.value.length > 40) {
		error[0] = true;
		error[1] = "La materia no existe"
		return error
	}
	error[0] = false;
	return error
}