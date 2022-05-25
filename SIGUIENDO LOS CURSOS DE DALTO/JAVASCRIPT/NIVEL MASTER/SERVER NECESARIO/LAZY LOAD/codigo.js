"use strict";

const publicaciones = document.querySelector(".publicaciones")
let contador = 0;

const verificarVisibility = entries=>{
	if(entries[0].isIntersecting) cargarPublicacion(4);
}

const cargarPublicacion = async num=>{
	const request = await fetch("informacion.txt");
	let contends = await request.json();
	let array = contends["contenidos"];
	
	let documentFragment = document.createDocumentFragment();
	let observer = new IntersectionObserver(verificarVisibility);

	for(let i = 0; i < num; i++){
		if(array[contador] != undefined){
			let newPublicacion = crearPublicacion(array[contador].nombre,array[contador].contenido);
			documentFragment.appendChild(newPublicacion);
		
			if(i == num - 1){
				observer.observe(newPublicacion);
			};
			contador++;
		} else {
			if(document.querySelector(".publicaciones").lastElementChild.id !== "nomore"){
				const noMore = document.createElement("H3");
				noMore.textContent = "No hay mas publicaciones";
				noMore.id = "nomore";
				documentFragment.appendChild(noMore);
				publicaciones.appendChild(documentFragment);
			}
		}
	}
	
	publicaciones.appendChild(documentFragment);
}

cargarPublicacion(4);

const crearPublicacion = (name,contend)=>{
	const publicacion = document.createElement("DIV");
	const nombre = document.createElement("H2");
	const contenido = document.createElement("P");
	const comentarios = document.createElement("DIV");
	const comentario = document.createElement("INPUT");
	const sendComentario = document.createElement("INPUT");

	nombre.textContent = name;
	contenido.textContent = contend;
	sendComentario.value = "Enviar";

	publicacion.classList.add("publicacion");
	comentarios.classList.add("comentarios");
	comentario.classList.add("comentario");
	sendComentario.classList.add("send-comentario");
	comentario.setAttribute("placeholder","Escribe un comentario");
	comentario.setAttribute("type","text");
	sendComentario.setAttribute("type","submit");

	comentarios.appendChild(comentario);
	comentarios.appendChild(sendComentario);
	publicacion.appendChild(nombre);
	publicacion.appendChild(contenido);
	publicacion.appendChild(comentarios);

	return publicacion;
}