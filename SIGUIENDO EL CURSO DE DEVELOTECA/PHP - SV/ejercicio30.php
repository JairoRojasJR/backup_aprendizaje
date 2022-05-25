<?php 
	// Esta función permite almacenar variables que se van a mantener durante la sesion (es decir mientras esté abierto el navegador), varibles que se van a poder usar en cualquier otro archivo. Una vez que se cierre el navegador estas variables de sesion serán eliminadas;

	session_start();

	// De este modo declaramos las variables de sesión y las usamos en el archivo ejercicio30_1.php;

	$_SESSION['nombre'] = "Jairo";
	$_SESSION['status'] = "Logeado";

	echo "El usuario es: ".$_SESSION['nombre'].". El estatus es: ".$_SESSION['status'];

	// Habran ocaciones que necesitemos crear sesiones y luego eliminarlas, en el archivo ejercicio30_2.php se muestra la función para ello;
?>