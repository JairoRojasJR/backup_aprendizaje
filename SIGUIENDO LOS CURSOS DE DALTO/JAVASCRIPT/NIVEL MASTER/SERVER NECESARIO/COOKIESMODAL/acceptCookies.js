const newFechaUTC = dias =>{
	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
	return fecha.toUTCString();
}

const crearCookie = (name,dias)=>{
	let expires = newFechaUTC(dias);
	document.cookie = `${name};expires=${expires};`;
}

const obtenerCookie = cookieName =>{
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for(let i=0; cookies.length > i; i++){
		let cookie = cookies[i].trim();
		if(cookie.startsWith(cookieName)){
			return cookie.split("=")[1];
		}
	}
	return console.log("No hay cookies con ese nombre");
};

if(obtenerCookie("acceptedCookie") !== "si"){
	setTimeout(()=>{
		document.querySelector(".bg-modal").style.opacity = "1";
		document.getElementById("accept").addEventListener("click",()=>{
			crearCookie("acceptedCookie=si",30);
			document.querySelector(".bg-modal").style.opacity = "0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.display = "none";
			},1000)
		})

		document.getElementById("deny").addEventListener("click",()=>{
			crearCookie("acceptedCookie=no",30);
			document.querySelector(".bg-modal").style.opacity = "0";
			setTimeout(()=>{
				document.querySelector(".bg-modal").style.display = "none";
			},1000)
		})
	},200);
}