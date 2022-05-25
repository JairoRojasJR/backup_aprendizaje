"use strict";

let comentario;
// ============ MATCH MEDIA ===============;

// const mq = matchMedia("(max-width:500px)");
// const caja = document.querySelector(".caja");

// mq.addEventListener("change",()=>{
// 	if(mq.matches) caja.classList.replace("caja","responsive-caja");
// 	else if(caja.className == "responsive-caja") caja.classList.replace("responsive-caja","caja");
// })

// ============ INTERSACTION OBSERVER ===============;

// const cajas = document.querySelectorAll(".caja");


// const verificarVisibility = entries=>{
// 	for(const entry of entries){
// 		if(entry.isIntersecting) console.log("Estas viendo la caja: ",entry.target.textContent);		
// 	}
// }

// comentario = "Este objeto puede recibir otra funcion 'options' que lo que hace es indicarle las opciones (dalto no explico mucho sique a investigar si las queremos usar)"

// const observer = new IntersectionObserver(verificarVisibility);

// for(const caja of cajas){
// 	observer.observe(caja);
// }

// ============ VISIBILITY CHANGE ===============;

// addEventListener("visibilitychange",e=>{
// 	if(e.target.visibilityState == "hidden"){
// 		document.write("He wacho, porque abandonas la página");
// 	} else {
// 		alert("Ha, volviste perrooo");
// 	}
// })

// ============ NOTIFICATION (SERVER NECESARIO) ===============;