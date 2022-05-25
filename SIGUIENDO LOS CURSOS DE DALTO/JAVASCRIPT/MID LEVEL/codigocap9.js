// ********** CAPITULO 9 **********

// ========== EVENTOS ==========
// ________________________________________
const zorrita = document.querySelector(".zorrita");

// zorrita.addEventListener("click", saludar);
// function saludar(){
// 	alert("Hola");
// }
// ________________________________________
// zorrita.addEventListener("click", ()=>{
// 	alert("Hola");
// });
// ________________________________________
// zorrita.addEventListener("click", saludar);
// function saludar(){
// 	alert("Hola");
// 	zorrita.removeEventListener("click", saludar);
// };
// ________________________________________
// zorrita.addEventListener("click", (e)=>{
// 	console.log(e.target);
// });
// ________________________________________ (Event Bubbling vs Event Capturing)
// const contenedor1 = document.querySelector(".contenedor-1");
// const contenedor2 = document.querySelector(".contenedor-2");

// contenedor2.addEventListener("click", ()=>{
// 	alert("He dado click en el contenedor azul");
// }, true)

// zorrita.addEventListener("click", ()=>{
// 	alert("He dado click en el botón");
// }, true)

// contenedor1.addEventListener("click", ()=>{
// 	alert("He dado click en el contenedor rojo");
// })
// ________________________________________ (event.stopPropagation)
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

// contenedor2.addEventListener("click", ()=>{
// 	alert("He dado click en el contenedor azul");
// }, true)

// zorrita.addEventListener("click", (e)=>{
// 	alert("He dado click en el botón");
// 	e.stopPropagation();
// })

// contenedor1.addEventListener("click", ()=>{
// 	alert("He dado click en el contenedor rojo");
// })

// ========== EVENTOS DE MOUSE==========
// ________________________________________ (dblclick)
// zorrita.addEventListener("dblclick", (e)=>{
// 	alert("He dado click en el botón");
// 	e.stopPropagation();
// })
// ________________________________________ (mouseover)
// contenedor1.addEventListener("mouseover", ()=>{
// 	alert("He movido el mouse dentro del contenedor rojo");
// })
// ________________________________________ (mouseout)
// contenedor1.addEventListener("mouseout", ()=>{
// 	alert("He dado salido de un contenedor");
// })
// ________________________________________ (contextmenu)
// contenedor1.addEventListener("contextmenu", ()=>{
// 	alert("He abierto el contextmenu, o dado click derecho");
// })
// ________________________________________ (mouseleave, mousemove, mouseenter)
// contenedor1.addEventListener("mouseenter", ()=>{
// 	alert("Contenedor rojo");
// })
// contenedor2.addEventListener("mousemove", ()=>{
// 	alert("He dado click en el contenedor azul");
// }, true)

// zorrita.addEventListener("mouseleave", (e)=>{
// 	alert("Botón");
// 	e.stopPropagation();
// })
// ________________________________________ (mouseup)
// contenedor1.addEventListener("mouseup", ()=>{
// 	alert("He soltado el click del mouse");
// })
// ________________________________________ (mousedown)
// contenedor1.addEventListener("mousedown", ()=>{
// 	alert("He apretado el click sobre el contenedor rojo");
// })

// ========== EVENTOS DE TECLADO==========
// ________________________________________ ()
// const input = document.querySelector(".input");

// input.addEventListener("keydown", (e)=>{
// 	console.log("Se presionó una tecla");
// })

// input.addEventListener("keypress", (e)=>{
// 	console.log("Se presionó y se soltó una tecla");
// })

// input.addEventListener("keyup", (e)=>{
// 	console.log("Se soltó una tecla");
// })

// ========== EVENTOS DE LA INTERFACE==========
// ________________________________________ (error)
// const img = document.querySelector(".img-prueba");

// img.addEventListener("error", ()=>{
// 	console.log("Ha sucedido un error");
// })
// ________________________________________ (load)
// addEventListener("load", ()=>{
// 	console.log("Se ha cargado el sitio web");
// })
// ________________________________________ (beforeunload)
// addEventListener("beforeunload", ()=>{
// 	console.log("Te estás por el ir del sitio");
// })
// ________________________________________ (unload)
// addEventListener("unload", ()=>{
// console.log("Te fuiste del ir del sitio");
// })
// ________________________________________ (resize)
// addEventListener("resize",()=>{
// 	console.log("Se ha actualizado la resolución");
// });
// ________________________________________ (scroll)
// addEventListener("scroll",()=>{
// 	console.log("Se ha escroleado");
// });
// ________________________________________ (select)
// const input = document.querySelector(".input-prueba");
// const contenedor = document.querySelector(".contenedor");

// input.addEventListener("select",(e)=>{
// 	let start = e.target.selectionStart;
// 	let end = e.target.selectionEnd;
// 	let textCompleto = input.value;
// 	contenedor.textContent = textCompleto.substring(start,end);
// })

// ========== TEMPORIZADOR ==========
// ________________________________________ (setTimeout)
// setTimeout(()=>{
// 	document.write("Hola")
// },2000);
// ________________________________________ (setInterval)
// const intervalo = setInterval(()=>{
// 	document.write("Hola")
// },2000);

// setTimeout(()=>{
// 	clearInterval(intervalo)
// },7000)