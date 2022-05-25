<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Include_once y Require_once</title>
</head>
<body>
	<!-- El Include_once, y el Require_once (mas concretamente la "extensión _once") lo que hace es que si se repite el mismo codigo este repitido lo omite. -->
	<!-- Probar a quitar la "extensión _once" para ver como se repiten y luego agregarlas para ver que ya nos e repiten el código-->
	<?php Include_once "ejercicio37_1.php" ;?>
	<?php Include_once "ejercicio37_1.php" ;?>
	<?php Require_once "ejercicio37_1.php" ;?>
	<?php Require_once "ejercicio37_1.php" ;?>
</body>
</html>