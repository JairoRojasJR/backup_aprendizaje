<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Include y Require</title>
</head>
<body>
	<!-- Include -->
	<!-- El Include nos permite traer las instrucciónes de codigo de otro documento php, se diferencia del Requere es que este si contiene una advertencia o errar, las siguientes instrucciónes de php se ejecutaran; -->
	<h2>Include</h2>
	<?php Include "ejercicio36_.php" ;// Elminiar o añadir el 1 para verlo con o sin error ?>
	<br>
	<?php echo "Prueba del Include con error" ;//Esta instrucción sigue ejecutandose aun cuando la primera contiene error ?>
	<br><br>

	<!-- Require -->
	<h2>Require</h2>
	<?php Require "ejercicio36_.php" ;// Elminiar o añadir el 1 para verlo con o sin error ?>
	<br>
	<?php echo "Prueba del Require con error" ;//Esta instrucción ya no se ejecuta porque requiere de la anterior ?>
</body>
</html>