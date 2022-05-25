self.addEventListener("install",e=>{
	console.log("Se está instalando el service worker");
});

self.addEventListener("activate",e=>{
	console.log("El service worker está activo");
});

self.addEventListener("fetch",e=>{
	console.log("Se está intersectando un mensaje");
});

self.addEventListener("message",e=>{
	console.log("El navegador dice: ");
	console.log(e.data);
	e.source.postMessage("Gracias papu, todo por vos");
});