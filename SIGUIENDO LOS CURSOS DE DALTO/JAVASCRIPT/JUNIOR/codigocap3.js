// ========== POO (PROGRAMACIÓN ORIENTADA A OBJETOS) ==========

// ----- COMO CREAR (***CONCEPTOS BÁSICOS EN NOTAS***)-----

class Animal {
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`
	}

	verInfo(){
		document.write(this.info + "<br>");
	}
}

// ***** __________ COMO CREAR (***HERENCIA***) __________ *****

class Perro extends Animal {
	constructor(especie, edad, color, raza){
	super(especie, edad, color);
	this.raza = raza;
	}

	ladrar(){
		document.write("¡WAW!" + "<br>");
	}
}

class Leon extends Animal {
	constructor(especie, edad, color, raza){
	super(especie, edad, color);
	this.raza = null;
	}

	static rugir(){
		document.write("Grrr");
	}
}

class Conejo extends Animal {
	constructor(especie, edad, color, raza){
	super(especie, edad, color);
	this.raza = null;
	}

	set setRaza(newName){
		this.raza = newName;
	}

	get getRaza(){
		return (this.raza);
	}
}

const conejo = new Conejo("Conejo", 5, "café", "X");
const perro = new Perro("perro", 6, "negro", "Pitbull");
const gato = new Animal("gato", 3, "blanco");
const zorro = new Animal("zorro", 8, "naranja");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(zorro.info + "<br>");

perro.verInfo();
perro.ladrar();
gato.verInfo();
zorro.verInfo();
Leon.rugir();
conejo.raza = "Jorge";
document.write(conejo.getRaza);