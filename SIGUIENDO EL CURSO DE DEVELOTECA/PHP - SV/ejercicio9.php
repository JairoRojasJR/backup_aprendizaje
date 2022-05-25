<?php
	if($_POST){
		$valorA=$_POST['valorA'];
		$valorB=$_POST['valorB'];

		// CONDICIONALES,SWITCH, BUCLES, ANIDACIÓN DE CONDICIONALES, OPERADORES RELACIONALES Y OPERADORES LÓGICOS (FUNCIONAN IGUAL QUE EN JAVASCRIPT)

		if($valorA == $valorB ){
			echo $valorA." es igual que ".$valorB;
		} else if($valorA > $valorB && $valorA != $valorB){
			echo $valorA." es mayor que ".$valorB."<br>Y además ".$valorA." es diferente que ".$valorB;;
		} else if($valorA < $valorB && $valorA != $valorB){
			echo $valorA." es menor que ".$valorB."<br>Y además ".$valorA." es diferente que ".$valorB;;
		}

		// LAS FUNCIONES TAMBIÉN FUNCIONAN IGUAL CON LA DIFERENCIA DE QUE LOS PARAMETROS QUE LES ESTABLEZCAMOS VAN A SER REQUERIDOS SI NO LE ESTABLECEMOS UN VALOR POR DEFECTO EJ: function suma(num1,num2=0){}

		// REVISAR DOCUMENTACIÓN; EN LA DOCUMENTACIÓN SE PUEDEN ENCONTRAR, ENTRE OTRAS COSAS, FUNCIONES COMO LAS DE MATEMATICAS O MATH EN JS;
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

	<form action="ejercicio9.php" method="post">
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