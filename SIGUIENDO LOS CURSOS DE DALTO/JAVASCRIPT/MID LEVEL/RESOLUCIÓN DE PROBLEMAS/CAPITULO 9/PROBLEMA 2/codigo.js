const alumnos = [{
	nombre: "Jairo Rojas",
	email: "xdbable@gmail.com",
	materia: "Programacion"
},{
	nombre: "Javier Gonzaga",
	email: "javiergonzaga@gmail.com",
	materia: "Fisica"
},{
	nombre: "Natalia Silva",
	email: "nataliasilva@gmail.com",
	materia: "Diseño web"
},{
	nombre: "Cristina Ramirez",
	email: "cristinaramirez@gmail.com",
	materia: "Matemáticas"
}];

const contenedor = document.querySelector(".grid-container");
const boton = document.querySelector(".btn-confirmar");

let htmlCode = "";

for (alumno in alumnos) {
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	htmlCode += `
		<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semanas">
			<select class="semana-elegida">
				<option class="option">Semana 1</option>
				<option class="option">Semana 2</option>
			</select>
		</div>
	`
};

contenedor.innerHTML = htmlCode;

boton.addEventListener("click",()=>{
	let confirmar = confirm("¿Estás seguro?")
	let elementos = document.querySelectorAll(".semanas");
	let semanaElegida = document.querySelectorAll(".semana-elegida");

	if (confirmar) {
		for (elemento in elementos) {
			semana = elementos[elemento];
			semana.innerHTML = semanaElegida[elemento].value;
			console.log(semanaElegida[elemento]);
		}
		document.body.removeChild(boton);
	}
})