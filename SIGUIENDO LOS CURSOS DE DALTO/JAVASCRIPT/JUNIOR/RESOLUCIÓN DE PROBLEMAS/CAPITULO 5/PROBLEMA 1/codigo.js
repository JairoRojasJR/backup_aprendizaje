const materias = {
	fisica: [90,8,4, "fisica"],
	quimica: [88,7,3, "quimica"],
	matematicas: [70,5,2, "matematicas"],
	logica: [95,9,4, "logica"],
	calculo: [60,3,2, "calculo"],
	biologia: [95,9,3, "biologia"],
	bbdd: [90,7,4, "bbdd"],
	algebra: [60,5,1, "algebra"]
}

const aprob = ()=>{
	for (materia in materias){
		let asistencia = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];

		console.log(materias[materia][3]);

			if (asistencia >= 90){
				console.log("%cAsistencias en orden","color:green");
			} else {
				console.log("%cFalta de asistencias","color:red");
			}
			if (promedio >= 7){
				console.log("%cPromedio en orden","color:green");
			} else {
				console.log("%cPromedio bajo","color:red");
			}
			if (trabajos >= 3){
				console.log("%cTrabajos en orden","color:green");
			} else {
				console.log("%cFaltan trabajos","color:red");
			}
		}
}

aprob();