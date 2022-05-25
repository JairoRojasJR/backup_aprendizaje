<?php
	
	// CLASES EN PHP
	class persona{
		// DECLARACIÓN DE PROPIEDADES (PUBLICAS, PRIVADAS Y PROTEGIDAS)
		public $nombre;
		private $edad;
		protected $celular;

		// MÉTODOS
		public function addPersona($nuevoNombre,$edad){
			// DE ESTE MODO ASIGNAMOS EL VALOR UNA PROPIEDAD
			$this->nombre = $nuevoNombre;
			$this->edad = $edad;
		}

		public function presentarPersona(){
			// DE ESTE MODO PODEMOS ACCEDER A UNA PROPIEDAD MEDIANTE UNA FUNCIÓN
			echo "<p>El nombre de esta persona es ".$this->nombre."<br>";
		}

		public function mostrarEdad(){
			echo $this->edad."<br>";
		}


	}

	// Herencia
	class trabajador extends persona{
		public $puesto;

		public function presentarTrabajador(){
			echo "<p>Hola soy ".$this->nombre." y soy ".$this->puesto."<br>";
		}
	}

	$person1 = new persona(); // Instanciación
	$person1->addPersona("Juanito",19); // Método
	$person1->presentarPersona(); // Método
	echo $person1->nombre."<br>"; // Impresión de propiedad publica

	$person2 = new persona();
	$person2->addPersona("Lucas",20);
	$person2->presentarPersona();
	$person2->mostrarEdad(); // Acceso a una propiedad privada mendiante un método publico

	// Clase con herencia
	$trabajador = new trabajador();
	$trabajador->addPersona("Nahomi",18);
	$trabajador->puesto = "Doctora";
	$trabajador->presentarTrabajador();

	// Clase con Constructor y método estático
	class animal{
		public $raza;

		// Constructor
		function __construct($raza){
			$this->raza = $raza;
		}

		// Método estático
		public static function unMetodo(){
			echo "<br><br>Un método estático se puede llamar sin instaciar un objeto";
		}
	}

	$perro = new animal("lobo");
	echo "<br>".$perro->raza;

	animal::unMetodo(); // Llamada a un método estático
?>