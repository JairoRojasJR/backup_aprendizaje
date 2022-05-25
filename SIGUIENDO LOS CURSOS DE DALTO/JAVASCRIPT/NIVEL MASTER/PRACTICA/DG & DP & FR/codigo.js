"use strict";

const zona = document.querySelector(".zona-arrastre");
const msg = document.querySelector(".msg");
const resultado = document.querySelector(".resultado");
const progreso = document.querySelector(".progreso");

zona.addEventListener("dragover",e=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#444");
	// console.log(e.srcElement);
});

zona.addEventListener("drop",e=>{
	e.preventDefault();
	cargarArchivo(e.dataTransfer.files[0]);
	changeStyle(e.srcElement,"#777","drop");
});

zona.addEventListener("dragleave",e=>{
	changeStyle(e.srcElement,"#777");
});

const changeStyle = (obj,color,drop)=>{
	obj.style.border = `5px dashed ${color}`;
	if(drop){
		msg.style.color = "#fff";
	};
	msg.style.border = "none";

};

const cargarBarra = (carga)=>{
	document.querySelector(".progreso").style.width = `${carga}%`;
}

const cargarArchivo = file =>{
	if(file.type.includes("text")){
		const ready = new FileReader;
		ready.readAsText(file);
		ready.addEventListener("progress",e=>{
			let carga = Math.trunc(e.loaded / file.size * 100);
			msg.textContent = `${carga}%`;
			cargarBarra(carga);
		});

		ready.addEventListener("load",e=>{
			document.querySelector(".resultado").textContent = e.currentTarget.result;
			zona.style.borderStyle = "solid";
		});

		ready.addEventListener("loadend",e=>{
			progreso.style.animation = "changestyle 1s forwards";
			zona.style.animation = "changestyle 1s forwards";
			msg.textContent = "¡Carga completada!"
		})
	}
	else if(file.type.includes("image")){
		const ready = new FileReader;
		ready.readAsDataURL(file);
		ready.addEventListener("progress",e=>{
			let carga = Math.trunc(e.loaded / file.size * 100);
			msg.textContent = `${carga}%`;
			cargarBarra(carga);
		});

		ready.addEventListener("load",()=>{
			let imgUrl = URL.createObjectURL(file);
			let img = document.createElement("IMG");
			img.setAttribute("src",imgUrl);
			resultado.innerHTML = "";
			resultado.appendChild(img);
			zona.style.borderStyle = "solid";
		});

		ready.addEventListener("loadend",e=>{
			progreso.style.animation = "changestyle 1s forwards";
			zona.style.animation = "changestyle 1s forwards";
			msg.textContent = "¡Carga completada!"
		})
	}
	else if(file.type.includes("video")){
		const ready = new FileReader;
		ready.readAsArrayBuffer(file);

		ready.addEventListener("progress",e=>{
			let carga = Math.trunc(e.loaded / file.size * 100);
			msg.textContent = `${carga}%`;
			cargarBarra(carga);
		});

		ready.addEventListener("load",e=>{
			let videoNoBlob = new Blob([e.currentTarget.result],{type : "video/mp4"});
			let videoUrl = URL.createObjectURL(videoNoBlob);
			let video = document.createElement("VIDEO");
			video.setAttribute("src",videoUrl);
			video.setAttribute("controls","");
			resultado.innerHTML = "";
			resultado.appendChild(video);
			zona.style.borderStyle = "solid";
		});

		ready.addEventListener("loadend",e=>{
			progreso.style.animation = "changestyle 1s forwards";
			zona.style.animation = "changestyle 1s forwards";
			msg.textContent = "¡Carga completada!"
		})
	};
};