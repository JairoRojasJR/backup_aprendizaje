"use strict";

let comentario;

// ========== APIS ==========;
// ---------- DATE ----------;

// const fecha = new Date();

// console.log('Fecha completa: ' + fecha);
// console.log('Dia(fecha): ' + fecha.getDate());
// console.log('Dia(semana): ' + fecha.getDay());
// console.log('Mes: ' + fecha.getMonth());
// console.log('Año: ' + (fecha.getYear() + 1900));
// console.log('Horas: ' + fecha.getHours());
// console.log('Minutos: ' + fecha.getMinutes());
// console.log('Segundos: ' + fecha.getSeconds());

// ---------- LOCAL STORAGE & SESSION STORAGE ----------;

// console.log(localStorage);
// console.log(sessionStorage);

comentario = 'En el local Storage almacena información la cual va a permaner aun cuando se abandona o cierra la página';
comentario = 'En cambio el sessons Storage almacena la información mientras se esté en la página, una vez se cierre o abandone se elminina la data';

// localStorage.setItem('nombre','pedro');
// localStorage.setItem('apellido','mendoza');
// sessionStorage.setItem('nombre','juan');

// console.log(localStorage.getItem('nombre'));
// console.log(sessionStorage.getItem('nombre'));

// setTimeout(()=>{
// 	localStorage.removeItem('nombre');
// 	console.log(localStorage.getItem('nombre'));

// 	sessionStorage.removeItem('nombre');
// 	console.log(localStorage.getItem('nombre'));
// },2000)

// setTimeout(()=>{
// 	localStorage.clear();
// },4000)

// ---------- API DRAG AND DROP ----------;

// document.querySelector(".circulo").addEventListener("dragstart",()=>{
// 	console.log(1);
// });

// document.querySelector(".circulo").addEventListener("drag",()=>{
// 	console.log(2);
// });

// document.querySelector(".circulo").addEventListener("dragend",()=>{
// 	console.log(3);
// });

// ------------------------------------------------------

// document.querySelector(".rectangulo").addEventListener("dragenter",()=>{
// 	console.log(1);
// });

// document.querySelector(".rectangulo").addEventListener("dragover",(e)=>{
// 	e.preventDefault();
// 	console.log(2)
// });

// document.querySelector(".rectangulo").addEventListener("drop",()=>{
// 	console.log(3);
// });

// document.querySelector(".rectangulo").addEventListener("dragleave",()=>{
// 	console.log(3);
// });

// ----------------------------------------------------------
// document.querySelector(".circulo").addEventListener("dragstart",(e)=>{
// 	e.dataTransfer.setData("clase",e.target.className);
// });

// document.querySelector(".rectangulo").addEventListener("dragover",(e)=>{
// 	e.preventDefault();
// });

// document.querySelector(".rectangulo").addEventListener("drop",(e)=>{
// 	console.log(e.dataTransfer.getData("clase"));
// });

// -------------- PRUEBA TEXTURAS DRAG AND DROP ------------------

// const zona = document.querySelector(".zona");

// const transferirTextura = (n,e)=> {
// 	e.dataTransfer.setData("textura",n);
// }

// zona.addEventListener("dragover",(e)=>{e.preventDefault()});
// zona.addEventListener("drop",(e)=>{
// 	let n = e.dataTransfer.getData("textura");
// 	zona.style.background = `url(texturas/textura${n}.png)`;
// })

// for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
// 	document.querySelector(`.textura-${i}`).addEventListener("dragstart",(e)=>{
// 		transferirTextura(i,e);
// 	});
// }

// --------------- NAVIGATOR - GEOLOCATION ---------------;

// const geolocation = navigator.geolocation;

// const position = (pos)=>{
// 	console.log(pos);
// }

// const error = (er)=>{
// 	console.log(er)
// }

// let options = {
// 	maximunAge: 0,
// 	timeout: 3000,
// 	enableHightAccuracy: true
// }

// geolocation.getCurrentPosition(position,error,options);

// --------------- WINDOW - HISTORY ---------------;
// console.log(history);

// document.querySelector(".back").addEventListener("click",()=>{
// 	history.back();
// })

// document.querySelector(".forward").addEventListener("click",()=>{
// 	history.forward();
// })

comentario = 'history.go() podemos pasarle el número a regresar o a avanzar, por ejemlo -1 o 1, 0 o vacío es recargar'

// document.querySelector(".go").addEventListener("click",()=>{
// 	history.go(0);
// })

// console.log(history.state);

// document.querySelector(".state").addEventListener("click",()=>{
// 	history.pushState({nombre:"pedro"},"nombre","?kdjfkdj");
// })

// addEventListener("popstate",(e)=>{console.log(e.state)})

// document.querySelector(".replace").addEventListener("click",()=>{
// 	history.replaceState({nombre:"maria"},"nombre","?cacahuate");
// })

// --------------- WINDOW - HISTORY ---------------;

const archivo = document.getElementById("archivo");

// archivo.addEventListener("change",()=>{
// 	leerArchivo(archivo.files[0]);
// })

// const leerArchivo = (ar)=>{
// 	const ready = new FileReader();
// 	ready.readAsText(ar);
// 	ready.addEventListener("load",(e)=>{
// 		console.log(JSON.parse(e.currentTarget.result));
// 	})
// }

// ----------------- LECTURA DE TEXTOS ---------------------

// archivo.addEventListener("change",()=>{
// 	leerArchivo(archivo.files);
// })

// const leerArchivo = (ar)=>{
// 	for(let i = 0; i < ar.length; i++){
// 		const ready = new FileReader();
// 		ready.readAsText(ar[i]);
// 		ready.addEventListener("load",(e)=>{
// 			console.log(JSON.parse(e.currentTarget.result));
// 		})
// 	}
// }

// ----------------- LECTURA DE IMÁGENES ---------------------

// archivo.addEventListener("change",()=>{
// 	leerArchivo(archivo.files);
// })

// const leerArchivo = (ar)=>{
// 	for(let i = 0; i < ar.length; i++){
// 		const ready = new FileReader();
// 		ready.readAsDataURL(ar[i]);
// 		ready.addEventListener("load",(e)=>{
// 			let newImg = `<img src="${e.currentTarget.result}">`;
// 			document.querySelector(".resultado").innerHTML += newImg;
// 		})
// 	};
// };

comentario = "Ejemplo de lectura de videos está en la práctica de lectura de archivos";

// ---------------- indexedDB -----------------------------

const IDBRequest = indexedDB.open("JairoBase",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
	const db = IDBRequest.result;
	db.createObjectStore("nombres",{
		autoIncrement: true
	});
});

comentario = "Añadir objetos desde la consola";
IDBRequest.addEventListener("success",()=>{
	console.log("Todo salió correctamente");
});
IDBRequest.addEventListener("error",()=>{console.log("Algo salió mal")});

console.log(IDBRequest);

const getData = (mode,msg)=>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres",mode);
	const objectStore = IDBtransaction.objectStore("nombres");
	IDBtransaction.addEventListener("complete",()=>{
		if(msg){console.log(msg)};
	})
	return objectStore;
}

// -------------------------------------------------------------
const addObjeto = objeto =>{
	let data = getData("readwrite","Objeto Agregado");
	data.add(objeto);
};

const addObjetosCustomized = ()=>{
	addObjeto({nombre:"Kelly"});
	addObjeto({nombre:"Nahomi"});
	addObjeto({nombre:"Natalia"});
	addObjeto({nombre:"Damaris"});
	addObjeto({nombre:"Maria"});
}

// -----------------------------------------------------------

const leerObjeto = ()=>{
	let data = getData("readonly");
	let cursor = data.openCursor();
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			console.log(cursor.result.value);
			cursor.result.continue();
		} else {
			console.log("Todos los datos fueron leídos")
		}
	})
};

// ----------------------------------------------------------

const modificarObjeto = (key,objeto)=>{
	let data = getData("readwrite","Objeto Modificado");
	data.put(objeto,key);
};

// ----------------------------------------------------------

const eliminarObjet = key=>{
	const data = getData("readwrite","Objeto Eliminado");
	data.delete(key);
};
