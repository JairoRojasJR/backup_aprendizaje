<?php

	// Recibir información de un formulario | metodo POST;
	if($_POST){
		$nombre=$_POST['nombre'];
		echo "Hola ".$nombre;
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Aprendiendo PHP</title>
</head>
<body>
	<form action="ejercicio2.php" method="post">
		<h3>Nombre:</h3>
		<input type="text" name="nombre" placeholder="Introduce tu nombre" id="">
		<input type="submit" value="Enviar">
	</form>
</body>
</html>