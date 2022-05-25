document.querySelector(".menu").addEventListener("click",()=>{
	document.querySelector(".nav__header").classList.toggle("nav__header-show");
});

navLinks = (y)=>{
	document.querySelector(`.nav-${y}`).addEventListener("click",()=>{
		if (y == "index") window.open(`${y}.html`,"_self");
		else window.open(`pag/${y}.html`,"_self");
		}
	)
};

navLinks("index");
navLinks("comida");
navLinks("bebida");
navLinks("postre");
navLinks("alcohol");

links = (x)=>{
	document.querySelector(`.${x}`).addEventListener("click",()=>{
		if (x == "title") window.open(`index.html`,"_self")
		else if (x == "cta-whatsapp") window.open("https://api.whatsapp.com/send?phone=593988542528&text=Hola%2C%20he%20visitado%20SUBLIMESFOOD%2C%20y%20quisiera%20realizar%20un%20pedido","_blank")
		else if (x == "cta-call") window.open("tel:0988542528","_blank")
		else if (x == "fa-facebook") window.open("https://www.facebook.com/Sublimesfood-104142992200779/","_blank")
		else if (x == "fa-instagram") window.open("https://www.instagram.com/sublimesfood_machala/","_blank")
		else if (x == "fa-twitter") window.open("https://twitter.com/sublimes_food?t=R9RoqsGjkmhnU3fUWfdIZA&s=08","_blank")
		else window.open(`pag/${x}.html`,"_self")
	})
};

links("title");
links("comida");
links("bebida");
links("postre");
links("alcohol");
links("cta-whatsapp");
links("cta-call");
links("fa-facebook");
links("fa-instagram");
links("fa-twitter");