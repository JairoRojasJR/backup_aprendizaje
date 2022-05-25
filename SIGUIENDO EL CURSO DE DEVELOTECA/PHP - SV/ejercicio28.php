<?php
	// Datos de acceso al servidor
	$servidor="localhost";
	$usuario="root";
	$contraseña="";

	try{
		// Conexión con el servidor
		$conexion=new PDO("mysql:host=$servidor;dbname=album", $usuario,$contraseña );
		$conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

		// Inserción de codigo sql para agregar registros a la base de datos

		/*

		$sql="INSERT INTO `fotos` (`id`, `nombre`, `ruta`) VALUES (NULL, 'Aprendiendo PHP', 'learning.jpg');";

		$conexion->exec($sql);

		*/

		// Lectura BD
		$sql="SELECT * FROM `fotos`";
		$sentencia=$conexion->prepare($sql); // Preparamos la ejecución y la almacenamos en una varibale como sentencia
		$sentencia->execute(); // Ejecutamos la sentencia

		$resultado=$sentencia->fetchAll(); // Obtenemos los registros mediante el metodo fetchAll y lo almacenamos en una variable

		echo "Conexión establecida<br><br>";
		print_r($resultado);

		echo "<br><br>";
		foreach($resultado as $foto){
			print_r("Nombre de la foto: ".$foto['nombre']."<br>");
		}

	}catch(PDOExecption $error){
		echo "Error en la conexión ".error;
	}
?>