<?php
	// CONDICIONALES - RECIBO DE METODO POST
	if($_POST){
		if($_POST['nombre'] && $_POST['apellido']){

			// DECLARACIÓN DE VARIABLES Y , ASIGNACIÓN DEL MÉTODO POR EL QUE SE VA A RECIBIR EL DATO, Y ASIGNACIÓN DEL IDENTIFICADOR DEL ELEMENTO DEL QUE SE VA A RECIBIR EL DATO

			$nombre=$_POST['nombre'];
			$apellido=$_POST['apellido'];

			// DECLARACIÓN DE CONSTANTES;
			define("IVA",12);

			//
			echo "<p>-------------------------------------------------------------------------------------------------</p>";

			// CONCATENACIÓN Y USO VARIABLES
			echo "<h2>Hola ".$nombre." ".$apellido."</h2>";

			// USO DE LAS CONSTANTES
			echo "<p>El IVA en Ecuador es del ".IVA."%</p>";

		}

		else if($_POST['valorA'] && $_POST['valorB']){
			$valorA=$_POST['valorA'];
			$valorB=$_POST['valorB'];

			$suma = $valorA + $valorB;
			$resta = $valorA - $valorB;
			$multiplicacion = $valorA * $valorB;
			$division = $valorA / $valorB;

			echo "<p>La suma de ".$valorA." mas ".$valorB." es =  ".$suma."</p>";
			echo "<p>La resta de ".$valorA." menos ".$valorB." es =  ".$resta."</p>";
			echo "<p>La multiplicacion de ".$valorA." por ".$valorB." es =  ".$multiplicacion."</p>";
			echo "<p>La division de ".$valorA." entre ".$valorB." es =  ".$division."</p>";
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>CONCATENACIÓN</title>
</head>
<body>
	<!-- EL ATRIBUTO ACTION SE REFIERE AL DOC PHP AL QUE SE ENVIA EL FORM -->

	<!-- EL ATRIBUTO NAME ES UN IDENTIFICADOR CON EL QUE LUEGO SE RECIBIRÁN LOS DATOS POR EL METODO POST O GET -->
	<p>-------------------------------------------------------------------------------------------------</p>
	<form action="ejercicio5.php" method="post">
		<h2 style="display:inline;">Nombre:</h2>
		<input type="text" name="nombre">
		<br>
		<h2 style="display:inline;">Apellido:</h2>
		<input type="text" name="apellido">
		<br>
		<input type="submit" value="Enviar">
	</form>
	<p>-------------------------------------------------------------------------------------------------</p>

	<form action="ejercicio5.php" method="post">
		<h2 style="display:inline;">Valor 1:</h2>
		<input type="text" name="valorA">
		<br>
		<h2 style="display:inline;">Valor 2:</h2>
		<input type="text" name="valorB">
		<br>
		<input type="submit" value="Calcular">
	</form>

</body>
</html>