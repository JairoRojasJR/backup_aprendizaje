class Apps {
	constructor(descargas, puntuacion, peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.instalada = false;
		this.iniciada = false;
	}

	instalar(){
		if (this.instalada == false){
			this.instalada = true;
			alert("La app fué instalada correctamente")
		}
	}

	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert("La app fué desinstalada correctamente")
		}
	}

	abrir(){
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert("La app está abierta")
		}
	}

	cerrar(){
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("La app se cerró")
		}
	}

	infoApps(){
		return document.write(
				`Descargas: ${this.descargas}<br>
				Puntuación: ${this.puntuacion}<br>
				Tamaño: ${this.peso}<br><br>`)
	}
}

// app1 = new Apps();
// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

app1 = new Apps("10K","4*","500MB");
app2 = new Apps("5K","3.5*","700MB");
app3 = new Apps("2K","4*","40MB");
app4 = new Apps("20K","4*","950MB");
app5 = new Apps("7K","2.5*","30MB");
app6 = new Apps("13K","4.7*","890MB");
app7 = new Apps("100K","5*","1000MB");

app1.infoApps();
app2.infoApps();
app3.infoApps();
app4.infoApps();
app5.infoApps();
app6.infoApps();
app7.infoApps();