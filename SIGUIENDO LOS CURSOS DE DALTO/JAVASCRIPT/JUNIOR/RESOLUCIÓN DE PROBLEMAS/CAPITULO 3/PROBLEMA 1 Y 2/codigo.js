class Celular {
	constructor(color, peso, rdp, rdf, rdv, ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = rdp;
		this.resolucionDeFotos = rdf;
		this.resolucionDeVideos = rdv;
		this.memoriaRam = ram;
	}

	get mostrarInfo(){
		return `<b style='color:#8fa'>Color:</b> <b>${this.color}</b> <br>
				<b style='color:#8fa'>Peso:</b> <b>${this.peso}</b> <br>
				<b style='color:#8fa'>Resolucion de pantalla:</b> <b>${this.tamaño}</b> <br>
				<b style='color:#8fa'>Resolucion de fotografía:</b> <b>${this.resolucionDeFotos}</b> <br>
				<b style='color:#8fa'>Resolucion de videos:</b> <b>${this.resolucionDeVideos}</b> <br>
				<b style='color:#8fa'>Ram:</b> <b>${this.memoriaRam}</b> <br>`;
	}
}

class celularAltaGama extends Celular {
	constructor(color, peso, rdp, rdf, rdv, ram, rdce){
		super(color, peso, rdp, rdf, rdv, ram);
		this.resolucionCamaraExtra = rdce;
		this.infoAltaGama = `<b style='color:#8fa'>Resolución de cámara extra:</b> <b>${this.resolucionCamaraExtra}</b> <br> <br>`
	}
}

// celular1 = new Celular("Rojo", "500gr", "5'","full hd", "4k", "120gb");
// celular2 = new Celular("Blanco", "600gr", "4'","Hd", "full hd", "64gb");
// celular3 = new Celular("Negro", "450gr", "5.5'","4k", "4k", "520gb");


// document.write(celular1.mostrarInfo + "<br><br>");
// document.write(celular2.mostrarInfo + "<br><br>");
// document.write(celular3.mostrarInfo + "<br><br>");

celular1 = new celularAltaGama("Rojo","550gr","6'","4k","4k","1TB","4k");
celular2 = new celularAltaGama("Negro","500gr","5'","4k","4k","520gb","4k");

document.write(celular1.mostrarInfo + celular1.infoAltaGama);
document.write(celular2.mostrarInfo + celular2.infoAltaGama);