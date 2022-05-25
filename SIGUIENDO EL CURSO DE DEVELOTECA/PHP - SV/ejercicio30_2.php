<?php 
	session_start();
	session_destroy();
	echo "Se destruyó la sesion de usuario";
?>