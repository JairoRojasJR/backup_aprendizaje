"use strict"

const archivo = document.getElementById("archivo");

archivo.addEventListener("change",()=>{
	leerArchivo(archivo.files);
})

const leerArchivo = (ar)=>{
	for(let i = 0; i < ar.length; i++){
		let ready = new FileReader();
		ready.readAsDataURL(ar[i]);
		ready.addEventListener("load",(e)=>{
			let newImg = `<img src="${e.currentTarget.result}">`
			document.querySelector(".grid-container").innerHTML += newImg;
		})
	}
}