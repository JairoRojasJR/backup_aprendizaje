<?php 
	if($_POST){
		print_r($_POST);
		echo "<br>";
		// Aquí tenemos la variable $_FILES que contine el array con elementos con relacionados a la información relacionada al archivo;
		print_r($_FILES);
		echo "<br>";
		// Esta función permite acceder a la ruta temporal en la que se almacenará el archivo mediante el primer parámetro, y con el segundo parámetro le indicamos la ruta (nombre del archivo incluido) donde se guardará. En este caso lo estamos guardando con el mismo nombre;
		move_uploaded_file($_FILES['archivo']['tmp_name'],$_FILES['archivo']['name']);
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Trabajando con files</title>
</head>
<body>
	<!-- Cuando tenemos un input type="file" y queremos trabajar con el/los file/s, es decir con el/los archivo/s, debemos indicarle al form que la data del form es multipart mediante el atributo enctype ( entype="multipart/form-data" ) de esta forma al enviarse el form en la variable $_POST ya no se guardará en nombre del archivo sino el nombre del input type submit que envió el form y tendremos en la variable $_FILES un array con elementos relacionados a la información del file  -->
	<form action="ejercicio32.php" enctype="multipart/form-data" method="post">
		<br>
		<input type="file" name="archivo">
		<br><br>
		<input type="submit" name="enviar" value="Enviar">
	</form>

</body>
</html>