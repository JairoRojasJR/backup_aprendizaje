let trabajo = "240 minutos de trabajo";
let tp = "100 minutos de trabajos prácticos";
let estudio = "100 minutos de estudio";
let homework = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanzo";

console.log("TAREAS")
for (var i = 0; i < 14; i++) {
	if (i == 0){
		console.group("SEMANA 1");
	}
	console.groupCollapsed("Dia " + (i + 1));
	console.log(trabajo);
	console.log(tp);
	console.log(descanso);
	console.log(estudio);
	console.log(homework);
	console.groupEnd();
	if (i == 6){
		console.groupEnd();
		console.groupCollapsed("SEMANA 2")
	}
}

console.groupEnd();