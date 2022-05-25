dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Comprate un helado de agua Cofla")
	alert("y te sobran: " + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("Comprate el helado de crema Cofla")
	alert("y te sobran: " + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("Comprate el helado heladix Cofla")
	alert("y te sobran: " + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("Comprate el helado heladovich Cofla")
	alert("y te sobran: " + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("Comprate el helado helardo Cofla")
	alert("y te sobran: " + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9) {
	alert("Comprate el helado con confites o el pote de 1/4 Cofla")
	alert("y te sobran: " + (dineroCofla - 2.9));
}
else {
	alert("Los siento no te alcanza para nada Cofla pobre de mierda")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Comprate un helado de agua Roberto")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("Comprate el helado de crema Roberto")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("Comprate el helado heladix Roberto")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("Comprate el helado heladovich Roberto")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("Comprate el helado helardo Roberto")
}
else if (dinerRoberto >= 2.9) {
	alert("Comprate el helado con confites o el pote de 1/4 Roberto");
}
else {
	alert("Los siento no te alcanza para nada Roberto pobre de mierda")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("Comprate un helado de agua Pedro")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("Comprate el helado de crema Pedro")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("Comprate el helado heladix Pedro")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("Comprate el helado heladovich Pedro")
}
else if (dinerPedro >= 1.8 && dineroPedro < 2.9) {
	alert("Comprate el helado helardo Pedroa")
}
else if (dineroPedro >= 2.9) {
	alert("Comprate el helado con confites o el pote de 1/4 Pedro");
}
else {
	alert("Los siento no te alcanza para nada Pedro pobre de mierda")
}