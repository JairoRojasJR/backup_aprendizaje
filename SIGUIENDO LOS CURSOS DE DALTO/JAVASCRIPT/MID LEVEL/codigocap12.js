// ********** CAPITULO 12 **********
// ========== CALLBACKS ==========
// ________________________________________ (callbacks)
// function llamarFunción(callback) {
// 	callback("Pedro");
// }

// llamarFunción(nombre => console.log(nombre));
// ________________________________________ (callbacks)
// class Persona {
// 	constructor(nombre, instagram){
// 		this.nombre = nombre;
// 		this.instagram = instagram;
// 	}
// };


// const data = [
// 	["Lucas",],
// 	["Cristina","@cristinaramirez"],
// 	["Jinsop","@jinsopromero"],
// 	["Damian","@damianminuche"],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
// 	personas[i] = new Persona(data[i][0],data[i][1]);
// };

// const obtenerPersona = (id,cb)=>{
// 	if (personas[id] == undefined){
// 		cb("No se ha encontrado a la persona");
// 	} else {
// 		cb(null,personas[id],id)
// 	}
// }

// const obtenerInstagram = (id,cb)=>{
// 	if (personas[id].instagram == undefined){
// 		cb("No se ha encontrado el instagram");
// 	} else {
// 		cb(null,personas[id].instagram);
// 	}
// }

// obtenerPersona(0,(err,persona,id)=>{
// 	if (err){
// 		console.log(err);
// 	} else {
// 		console.log(persona.nombre);

// 		obtenerInstagram(id,(err,ig)=>{
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(ig);
// 			}
// 		});
// 	}
// });

// ________________________________________ (Promise)
// let nombre = "pedro";

// const promesa = new Promise((resolve,reject)=>{
// 	if (nombre !== "pedro") reject("Lo siento, el nombre no es pedro");
// 	else resolve(nombre);
// });

// promesa.then((resultado)=>{
// 	console.log(resultado);
// }).catch((e)=>{
// 	console.log(e);
// })
// ________________________________________ (Promise (obtimización del ej de callback))
// class Persona {
// 	constructor(nombre, instagram){
// 		this.nombre = nombre;
// 		this.instagram = instagram;
// 	}
// };


// const data = [
// 	["Lucas",],
// 	["Cristina","@cristinaramirez"],
// 	["Jinsop","@jinsopromero"],
// 	["Damian","@damianminuche"],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
// 	personas[i] = new Persona(data[i][0],data[i][1]);
// };

// const obtenerPersona = (id)=>{
// 	return new Promise((resolve,reject)=>{
// 		if (personas[id] == undefined) reject("No se ha encontrado a la persona");
// 		else {
// 			resolve(personas[id].nombre);
// 		}

// 	})
// }

// const obtenerInstagram = (id)=>{
// 	return new Promise((resolve,reject)=>{
// 		if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
// 		else {
// 			resolve(personas[id].instagram);
// 		}
// 	})
// }

// let id = 0;

// obtenerPersona(id).then((nombre)=>{
// 	console.log(nombre);
// 	return obtenerInstagram(id);
// }).then((instagram)=>{
// 	console.log(instagram);
// }).catch((e)=>{
// 	console.log(e);
// });
// ________________________________________ (funciones asincronas Ej:1)
// const objeto = {
// 	propiedad1 : "valor1",
// 	propiedad2 : "valor2",
// 	propiedad3 : "valor3",
// 	propiedad4 : "valor4",
// };

// const obtenerInformacion = ()=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{resolve(objeto)},3000);
// 	})
// }

// // obtenerInformacion().then(resultado => console.log(resultado));

// const obtenerResultado = async ()=>{
// 	resultado = await obtenerInformacion();
// 	console.log(resultado);
// };

// obtenerResultado();
// ________________________________________ (funciones asincronas Ej:2)
//  const obtenerInformacion = (text)=>{
//  	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{resolve(text)},Math.random()*200);
// 	})
// }
// ________________________________________
// obtenerInformacion("1: pito").then(resultado => console.log(resultado));
// obtenerInformacion("2: benardo").then(resultado => console.log(resultado));
// obtenerInformacion("3: gilberto").then(resultado => console.log(resultado));
// ________________________________________
// const obtenerNombre =  async ()=>{
// 	data1 = await obtenerInformacion("1: pito");
// 	data2 = await obtenerInformacion("2: benardo");
// 	data3 = await obtenerInformacion("3: gilberto");
// 	console.log(data1);
// 	console.log(data2);
// 	console.log(data3);
// }

// obtenerNombre();
// ________________________________________FIN