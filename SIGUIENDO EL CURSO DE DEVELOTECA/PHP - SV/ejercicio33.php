<?php 
	// TRABAJANDO CON FORMATO JSON (si como en javascript, la teoria es igual solo cambia la sintaxis) ;
	
	// JSON RECIBIDO (supongamos que obtenemos este JSON)
	$objJSONaArray='[
			{"nombre":"Natalia","apellido":"Silva"},
			{"nombre":"Jossenka","apellido":"Naspud"}
		]';

	// De este modo decodificamos el JSON, es como en JavaScript usar la función JSON.parse() donde convertiamos un JSON en un objeto o un array;
	$resultado=json_decode($objJSONaArray);
	echo "<b>De JSON a Array u Objeto =>>> </b>";
	print_r($resultado);
	echo "<br><br>";

	// De este modo podemos recorrerlo por ejemplo;
	foreach($resultado as $persona){
		echo $persona->nombre." ".$persona->apellido."<br>";
	}
	echo "<br>"."<b>Array u Objeto a JSON =>>> </b>";
	// Ahora a la inversa, vamos a convertir un array u o objeto a JSON;
		$objArrayaJSON=array("fruta"=>"Manzana","color"=>"rojo","precio"=>20);
		$resultado2=json_encode($objArrayaJSON);
		print_r($resultado2);
?>