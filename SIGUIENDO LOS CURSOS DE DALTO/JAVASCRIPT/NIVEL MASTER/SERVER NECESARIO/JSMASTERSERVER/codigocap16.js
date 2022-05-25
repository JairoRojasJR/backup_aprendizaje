"use strict";

let comentario;

// ============ NOTIFICATION (SERVER NECESARIO) ===============;

// Notification.requestPermission(()=>{
// 	if(Notification.permission == "granted"){
// 		console.log("Notificaciones activadas");
// 	}
// })

// new Notification("Hola guap@");

// ============= WEB WORKERS =============;

// comentario = "No quedó muy claro porque a pesar de que ejectuamos en blucle sin usar web worker, igual se podía usar el input en incluso otros botones";
// comentario = "Pero bueno aquí tenemos la forma de usarlo por si llegamos a necesitarlos";
// const boton = document.querySelector(".btn");

// const worker = new Worker("worker.js");

// const ejecutarBucle = ()=>{
// 	worker.postMessage(true);
// };

// boton.addEventListener("click",()=>{
// 	ejecutarBucle();
// });

// ---------- INTERCAMBIO DE MENSAJES WEB WORKERS ----------;

// const worker = new Worker("worker.js");

// comentario = "worker.terminate(), finaliza la ejecución del worker";

// document.querySelector(".btn").addEventListener("click",()=>{
// 	worker.postMessage("Hola master, como estas");
// 	worker.addEventListener("message",e=>{
// 		console.log(e.data);
// 		worker.terminate();
// 	});

// });

// ================== NAVIGATOR ==================;

// verPropiedadesNavegador();

// _________________________________________________

// comentario = "Memoizer No lo comprendimos del todo bien, lo dejamos para más adelante cuando tengamos más practica";
// _________________________________________________

// ================== CACHE ==================;

// caches.open("contenidos-estaticos").then(cache=>{
// 	console.log(cache);
// 	cache.add("index.html");
// 	cache.match("index.html").then(res=>{
// 		console.log(res);
// 	});
// 	cache.matchAll("index.html").then(res=>{
// 		console.log(res);
// 	});
// });

// caches.open("contenidos-estaticos-2").then(cache=>{
// 	cache.addAll(["index.html","codigocap16.js","navigator.js"]);
// 	cache.delete("navigator.js");
// 	cache.keys().then(res=>{
// 		console.log(res)
// 	})
// });

// caches.open("contenidos-estaticos-3").then(cache=>{
// 	fetch("index.html").then(res=>{
// 		cache.put("index.html",res);
// 	});
// });
// -------------------------------------------------------
// caches.open("contenidos-estaticos-2").then(cache=>{
// 	cache.delete("navigator.js");
// });
// -------------------------------------------------------

// ================== SERVICES WORKERS ==================;

// if(navigator.serviceWorker){
// 	navigator.serviceWorker.register("sw.js");
// };

// navigator.serviceWorker.ready.then(e=>{
// 	e.active.postMessage("Hola service worker, buen trabajo");
// });

// navigator.serviceWorker.addEventListener("message",e=>{
// 	console.log("El service worker dice: ")
// 	console.log(e.data);
// })

// ------------------------------------------------------
// comentario = "Prueba fallida no se pudo realizar el ejercicio algo sale mal";

// if(navigator.serviceWorker){
// 	navigator.serviceWorker.register("sa.js");
// };

// ================== COOKIES ==================;

// const newFechaUTC = dias =>{
// 	let fecha = new Date();
// 	fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
// 	return fecha.toUTCString();
// }

// const crearCookie = (name,dias)=>{
// 	let expires = newFechaUTC(dias);
// 	document.cookie = `${name};expires=${expires};`;
// }

// crearCookie("nombre=jairo","4");
// crearCookie("apellido=rojas","4");
// crearCookie("cosa=cama","4");
// crearCookie("animal=gato","1");

// const obtenerCookie = cookieName =>{
// 	let cookies = document.cookie;
// 	cookies = cookies.split(";");
// 	for(let i=0; cookies.length > i; i++){
// 		let cookie = cookies[i].trim();
// 		if(cookie.startsWith(cookieName)){
// 			return cookie.split("=")[1];
// 		}
// 	}
// 	return console.log("No hay cookies con ese nombre");
// };

comentario = "Para modificar una cookie solo hay que redefinir la cookie, se pueden modificar cualquiera de sus atributos";
comentario = "Para eliminar una cookie hay que establecerle a la misma un max-age o un expires";

// ================== OBJETO SCREEN ==================;

// let altoTotal = screen.height;
// let anchoTotal = screen.width;

// let altoDisponible = screen.availHeight;
// let anchoDisponible = screen.availWidth;

// let colorDepth = screen.colorDepth;
// let pixelDepth = screen.pixelDepth;

// comentario = "Faltó la explicacion del colorDepth y pixelDepth "

// console.log(`Alto Total: ${altoTotal}`);
// console.log(`Ancho Total: ${anchoTotal}`);
// console.log("");
// console.log(`Alto Disponible: ${altoDisponible}`);
// console.log(`Ancho Disponible: ${anchoDisponible}`);
// console.log("");
// console.log(`Color Depth: ${colorDepth}`);
// console.log(`Pixel Depth: ${pixelDepth}`);


// comentario = "con window.innerHeight y window.innerWidth, podemos ver el alto y ancho del viewpor";

// console.log("");
// console.log(comentario);
// console.log(`Alto del viewpor ${window.innerHeight}`);
// console.log(`Ancho del viewpor ${window.innerWidth}`);

// ================== CANVAS ==================;

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.lineWidth = "4";
// ctx.strokeStyle = "#f0f";
// ctx.fillStyle = "#a0a";
// ctx.strokeRect(30, 80, 300, 200);
// ctx.fillRect(60, 110, 300, 200)

// ctx.lineTo(10,30);
// ctx.lineTo(40,60);
// ctx.lineTo(40,30);
// ctx.lineTo(60,60);
// ctx.stroke();
// ctx.closePath();
// ctx.beginPath();

// ctx.lineTo(70,90);
// ctx.lineTo(90,110);
// ctx.lineTo(90,90);
// ctx.lineTo(70,110);
// ctx.stroke();

// ctx.arc(200,100,80,10,40);
// ctx.stroke();