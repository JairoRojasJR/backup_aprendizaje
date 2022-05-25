"use strict";

const addZeros = (n)=>{
	if(n.toString().length < 2) return '0' + n;
	return n;
}

const establecerHora = ()=>{
	const date = new Date();
	let hora = addZeros(date.getHours());
	let min = addZeros(date.getMinutes());
	let seg = addZeros(date.getSeconds());

	document.querySelector(".horas").textContent = hora; 
	document.querySelector(".minutos").textContent = min; 
	document.querySelector(".segundos").textContent = seg; 
}

establecerHora();
setInterval(establecerHora,1000);