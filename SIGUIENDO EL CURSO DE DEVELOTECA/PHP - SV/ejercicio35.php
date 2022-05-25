<?php 
// En este ejercicio se trabajo con una API proporcionada un sitio web externo;
	
	// Esta es la URL de la API;
	$url="https://api.dailymotion.com/videos?channel=sport&limit=10";

	// Estas son opciones que hay que configurar para poder acceder al contenido proporcionado por la API mediante la url;
	$opciones=array("ssl"=>array("verify_peer"=>false,"verify_peer_name"=>false));

	// Esta funcion nos permite obtener el contenido del la URL pasandole la misma, false en este caso "porque al parecer no vamos a tener la opcion de incluir información (palabras del profesor)" y una función donde le pasamos las opciones que contienen la configuración;
	$resultado=file_get_contents($url,false,stream_context_create($opciones));

	// Se obtiene el resultado en formato JSON y lo decodificamos;
	$objRespuesta=json_decode($resultado);

	// print_r($objRespuesta);
?>

<!-- Impriminos los datos de la siguiente manera (la cual ya conocemos) -->
<ul>
	<?php foreach($objRespuesta->list as $video){ ?>
		<li><?php echo $video->title; ?> | <?php echo $video->channel; ?> </li>
	<?php } ?>
</ul>