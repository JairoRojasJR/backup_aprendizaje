<?php
// ARRAYS EN PHP
	$frutas=array("manzana","pera","banana");
	print_r($frutas);
	echo "<br>".$frutas[1]."<br><br>";

	// DE ESTE MODO LE ASIGNAMOS UN ÍNDICE A CADA ELEMENTO DEL ARRAY
	$sex=array("amas"=>"mi pinga","rica"=>"tu panocha","vamo"=>"comernos");
	print_r($sex);
	echo "<br>".$sex["rica"]."<br><br>";

	// RECORRER ARRAYS
	for($indice=0;$indice<=2;$indice++){
		echo $frutas[$indice]."<br>";
	}

	echo "<br>";

	foreach($sex as $indice=>&$valor){
		echo $indice." => ".$valor."<br>";
	}

	// COMO EN JS SE PUEDE MODIFICAR LOS ARRAYS DE MUCHAS FORMAS, EN PHP SE USAN FUNCIONES. VER FUNCIONES EN LA DOCUMENTACIÓN
?>