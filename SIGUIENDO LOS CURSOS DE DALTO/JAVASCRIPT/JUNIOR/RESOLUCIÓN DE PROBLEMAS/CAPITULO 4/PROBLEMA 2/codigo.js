const obtenerInformacion = (materia)=>{
	materias = {
		fisica: ["Tu mamá","Jorge", "Pedro", "Juan", "Sofía"],
		programacion: ["Tu papá","Jorge", "Juan", "Sofía","Nahomi"],
		logica: ["Tu tía","Joao", "Juan", "Sofía",],
		quimica:["Tu abuelito","Juan", "Sofía","Nahomi","Natalia"]
	}
		if (materias[materia] !== undefined){
		return [materias[materia], materia, materias];
		} else {
			return materias;
		}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);
	if (informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write(`El profesor de ${informacion[1]} es: <b style="color:#9f0">${profesor}</b> <br> Los alumnos son: <b style="color:#2cf">${alumnos}</b><br><br>`);
	}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	cantidadTotal = 0;
	clasesPresente = [];
	for (info in informacion){
		if (informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresente.push(" " + info)
		}
	}
	return `<b style='color: #2cf'>${alumno}</b> está en ${cantidadTotal} clases:
	<b style='color:yellow'>${clasesPresente}</b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Jorge"));
document.write(cantidadDeClases("Juan"));
document.write(cantidadDeClases("Nahomi"));
document.write(cantidadDeClases("Sofía"));
document.write(cantidadDeClases("Natalia"));