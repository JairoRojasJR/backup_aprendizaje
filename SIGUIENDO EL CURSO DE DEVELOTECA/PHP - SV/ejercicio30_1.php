<?php 
	session_start();

	if(isset($_SESSION['nombre'])){
		echo $_SESSION['nombre']."<br>".$_SESSION['status'];		
	}else{
		echo "No hay datos";
	}
?>