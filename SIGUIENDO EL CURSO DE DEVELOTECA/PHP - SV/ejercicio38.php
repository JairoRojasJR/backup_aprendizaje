<?php 
// Apertura y lectura de archivos, en este caso de formato .txt;

	$archivo="ejercicio38.txt";

	// Primero hay que abrir el archivo con la función fopen y pasarle de primer parámetro la ruta, y de segundo parámetro el modo de lectura "r" (read) y en este caso lo guardamos en una variable;
	$archivoAbierto=fopen($archivo,"r");

	// Teniendo la apertura del archivo procedemos a la lectura con la función fread como primer parámetro le pasamos el archivo abierto con el método fopen, y como segundo parámetro la función filesize, la cual recibe como parámetro la ruta del archivo;
	$contenido=fread($archivoAbierto,filesize($archivo));
	
	echo $contenido;
?>