let materias = {
		fisica: ["Tu mamá","Jorge", "Pedro", "Juan", "Sofía"],
		programacion: ["Tu papá","Jorge", "Juan", "Sofía","Nahomi"],
		logica: ["Tu tía","Joao", "Juan", "Sofía",],
		quimica:["Tu abuelito","Juan", "Sofía","Nahomi","Natalia"]
	}

const inscribrirAlumno = (alumno, materia)=>{
	personas = materias[materia]
	if (personas.length >= 21){
		document.write(`<br>Los siento ${alumno}, las clases para ${materia} están llenas<br>`);
	} else {
		personas.push(alumno)
			if (materias[materia] == "fisica"){
				materias = {
					fisica: personas,
					programacion: materias['programacion'],
					logica: materias['logica'],
					quimica: materias['quimica']
				}
			}
				else if (materias[materia] == "programacion"){
				materias = {
					fisica: materias['fisica'],
					programacion: personas,
					logica: materias['logica'],
					quimica: materias['quimica']
				}
			}
				else if (materias[materia] == "logica"){
				materias = {
					fisica: materias['fisica'],
					programacion: materias['programacion'],
					logica: personas,
					quimica: materias['quimica']
				}
			}
				else if (materias[materia] == "quimica"){
				materias = {
					fisica: materias['fisica'],
					programacion: materias['programacion'],
					logica: materias['logica'],
					quimica: personas
				}
			}
			document.write(`<br>${alumno} has sido inscrito en ${materia} correctamente<br>`)
		}
	}
document.write(materias['fisica'] + "<br><br>");

inscribrirAlumno("Jairox","fisica");
inscribrirAlumno("Jairoy","fisica");
inscribrirAlumno("Jairot","fisica");
inscribrirAlumno("Jairoyy","fisica");
inscribrirAlumno("Jairon","fisica");
inscribrirAlumno("Jairom","fisica");
inscribrirAlumno("Jairoc","fisica");
inscribrirAlumno("Jairosa","fisica");
inscribrirAlumno("Jairodf","fisica");
inscribrirAlumno("Jairohj","fisica");
inscribrirAlumno("Jairok","fisica");
inscribrirAlumno("Jairog","fisica");
inscribrirAlumno("Sergio","fisica");
inscribrirAlumno("David","fisica");
inscribrirAlumno("Carlos","fisica");
inscribrirAlumno("Santiago","fisica");
inscribrirAlumno("Elvis","fisica");
inscribrirAlumno("Jinsop","fisica");
inscribrirAlumno("Benito","fisica");
inscribrirAlumno("Dario","fisica");
inscribrirAlumno("Luis","fisica");

document.write("<br>" + materias['fisica']);
