<?php 
// Creación de archivos desde php;
	$nombreArchivo="archivoCreado.txt";
	$contenidoArchivo="Diablo beiby que riii...cooo, en la cama bien suadiii..tos, tu bellaquera necesii...tooo...";

	// Para crear el archivo tenemos que usar primero la función fopen que recibe como primer parámetro la ruta (nombre del archivo), y como segundo parámetro "w" (w del inglés write => escritura);
	$archivoACrear=fopen($nombreArchivo,"w");

	// Posteriormente procedemos con la escritura con el método fwrite que recibe com primer parámetro el archivo abierto y como segundo parámetro el contenido que queremos introducir;

	fwrite($archivoACrear,$contenidoArchivo);

	// Por último y muy importante cerrar el archivo con el método fclose para poder leer el archio posteriormente (porque si no se queda abierto con la aplicación => palabras textuales del maestro);
	fclose($archivoACrear);

	// Esta forma de crear archivos se puede usar (segun entendí) para crear archivos de varias extensiones, si no me equivoco con esto se podría crear archivos html,css e inluso javascript por ejemplo, si no me equivo...
?>