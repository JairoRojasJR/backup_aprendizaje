<?php 

	// Declaramos todas las variables para que por defecto al imprimir estén vacias y no nos tire errores y/o advertencias;
	$txtNombre="";
	$rdgLenguaje="";

	$chkHtml="";
	$chkCss="";
	$chkJavascript="";

	$lsAnime="";

	$msgUser="";

	if($_POST){
		// la variable $_POST contiene un array con todo lo que se llega del envio de un formulario;

		// Los nombres que les asignemos a los elementos de los formularios en codigo html, son los elementos que van a llegar en el array de $_POST;

		// La función isset() devuelve un valor booleano que dependerá de si recibe un envio y de si este está vacio o no;
		$txtNombre=(isset($_POST['nombre']))?$_POST['nombre']:""; // Operador ternario como en JS
		$rdgLenguaje=(isset($_POST['lenguaje']))?$_POST['lenguaje']:"";

		// Checkbox => Cuando se envia un formulario, se enviaran los valores (value) de los input que esten seleccionados, en este caso estamos diciendo que si el valor es igual a "si" (recuerda que solo se envia el que está marcado por tanto el valor es el valor que contenga ese input marcado, caso contario no llega ese valor) almacenaremos "checked" en esa variable refiriendonos a que ese input está checkeado, caso contrario, indicamos que está vacio "". Posteriormente usaremos esa variable para introducirsela como atributo ya sea que esté checkeada o vacio (si está vacia obviamente no va a agregarle nada);
		$chkHtml=(isset($_POST['chkHtml'])=="si")?"checked":"";
		$chkCss=(isset($_POST['chkCss'])=="si")?"checked":"";
		$chkJavascript=(isset($_POST['chkJavascript'])=="si")?"checked":"";

		$lsAnime=( isset($_POST['lsAnime']) )?$_POST['lsAnime']:"";

		$msgUser=(isset($_POST['msgUser']))?$_POST['msgUser']:"";
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Trabajando con envio de datos</title>
</head>
<body>

	<!-- De este modo podemos ejecutar una condicinal con dentro de codigo php en html y añadimos etiquetas html e imprimimos valores cuando se envie el formulario por el método post -->
	<?php if($_POST){ ?>
		<strong>Hola:</strong> <?php echo $txtNombre; ?>
		<br>
		<strong>Tu lenguaje favorito es:</strong> <?php echo $rdgLenguaje; ?>
		<br>
		<strong>Dominas los lenguajes:</strong>
		<br>
		 <?php echo ($chkHtml=="checked")?"- Html <br>":""; ?>
		 <?php echo ($chkCss=="checked")?"- Css <br>":""; ?>
		 <?php echo ($chkJavascript=="checked")?"- JavaScript <br>":""; ?>
		<strong>Te gusta el anime:</strong> <?php echo $lsAnime; ?>
		<br>
		<strong>Añadiste el siguiente mensaje:</strong> <?php echo $msgUser; ?>
	<?php } ?>

	<!-- A los form tenemos que especificarles el action, que refiere a la ruta del archivo donde se van a enviar el form y donde se van a realizar las acciones, es decir, donde se va a trabajar con los datos enviados -->
	<form action="ejercicio31.php" method="post">
		<p>
			Nombre:
			<input value="<?php echo $txtNombre;// De este modo podemos introducir codigo php y en este caso imprime el valor de la variable $txtNombre aun cuando recarga la página por el envio de formulario, ya que estamos imprimiendo en el value del input el valor que se envio y se guardó en la variable $txtNombre ?>" type="text" name="nombre" placeholder="Introduce tu nombre">
		</p>
		<p><b>¿Cuál es tu lenguaje favorito?</b></p>
		<p>
			Php <input type="radio" <?php echo ($rdgLenguaje=="php")?"checked":"";//De este modo estamos añadiento un atributo, si tenemos varios input type="radio" con el mismo nombre, esto permite al usuario seleccionar uno solo, y lo que se enviará es el valor del input que seleccionó. Entonces estamos diciendo que si el valor del input que enviamos y se guardó en la variable $rdgLenguaje es igual a "php", imprime checked, y en este caso queda como atributo, y el input quedará marcado aun cuando se envie el form y se recarge la página ?> name="lenguaje" value="php">
		</p>
		<p>
			JavaScript <input type="radio" <?php echo ($rdgLenguaje=="html")?"checked":""; ?> name="lenguaje" value="html">
		</p>
		<p>
			Python <input type="radio" <?php echo ($rdgLenguaje=="css")?"checked":""; ?> name="lenguaje" value="css">
		</p>
		<p><b>¿Qué lenguajes dominas?</b></p>
		<!-- Los checkbox nos permiten enviar el valor de multiples input, se enviaran solo el valor de los input que estén checkeados, en este caso distinguimos a cada uno con un nombre diferente, y cada uno tiene el value igual a "si", ese value se va a enviar solo si el input está seleccionado, entonces almacenaremos en un varibles el valor "checked" para usarlo como atributo para los input seleccionados que se enviaron, los input que quedaron vacios establecimos que las variables van a estar vacias -->
		<p>
			Html <input type="checkbox" name="chkHtml" <?php echo $chkHtml; ?> value="si">
		</p>
		<p>
			Css <input type="checkbox" name="chkCss" <?php echo $chkCss; ?> value="si">
		</p>
		<p>
			JavaScript <input type="checkbox" name="chkJavascript" <?php echo $chkJavascript; ?> value="si">
		</p>
		<p><b>¿Qué animes te gustan?</b></p>
		<!-- En este caso estamos diciendo que la opción seleccionada se guarde en la variable %lsAnime y en los option estamos imprimiendo el atributo selected si la variable es igual al valor que le indiquemos en este caso el nombre del anime que contiene el option, entonces al tener el atributo selected este option quedará seleccionado -->
		<select name="lsAnime">
			<option value="ninguno">Ninguno</option>
			<option value="naruto" <?php echo ($lsAnime=="naruto")?"selected":"" ?> >Naruto</option>
			<option value="shingeky" <?php echo ($lsAnime=="shingeky")?"selected":"" ?> >Shingeky No kyojin</option>
			<option value="dragonball" <?php echo ($lsAnime=="dragonball")?"selected":"" ?> >Dragon Ball</option>
		</select>
		<br><br>
		<p><b>¿Quieres añadir algo?</b></p>
		<textarea name="msgUser" cols="30" rows="7"><?php echo $msgUser; ?></textarea>
		<br>
		
		<input type="submit" value="Enviar Información">
	</form>
</body>
</html>