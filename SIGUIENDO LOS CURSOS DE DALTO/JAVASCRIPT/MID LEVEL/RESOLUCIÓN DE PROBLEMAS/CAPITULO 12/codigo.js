const selecionarMateriaHTML = document.querySelector(".materias");

const materias = [
	{
		nombre: "Fisica",
		nota: 6
	},
	{
		nombre: "Programación",
		nota: 8
	},
	{
		nombre: "Soporte Técnico",
		nota: 7
	},
	{
		nombre: "Diseño Web",
		nota: 10
	},
	{
		nombre: "Aplicaciones Ofimáticas",
		nota: 9
	}
];

const obtenerMateria = (id)=>{
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if (materia == undefined) reject("La materia no existe");
		else setTimeout(()=>{resolve(materia)},Math.random()*1400);
	});
};

const devolverMaterias = async ()=>{
	let materia = [];
	for (let i = 0; i < materias.length; i++){
		materia[i] = await obtenerMateria(i);
		let materiaHTML = `
		<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>
	`
		selecionarMateriaHTML.innerHTML += materiaHTML;
	}
}

devolverMaterias();