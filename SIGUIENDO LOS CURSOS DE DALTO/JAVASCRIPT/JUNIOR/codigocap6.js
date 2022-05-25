// ========== DOCUMENT - MÉTODOS DE SELECCIÓN DE ELEMENTOS ==========

		// ----- .getElementById() -----
// parrafo = document.getElementById("parrafo");
// document.write(parrafo);

		// ----- .getElementsByTagName() -----
// parrafo = document.getElementsByTagName("parrafo");
// document.write(parrafo);

		// ----- .querySelector() -----
// parrafo = document.querySelector(".putito");
// document.write(parrafo);

		// ----- .querySelectorAll() -----
// parrafo = document.querySelectorAll(".putito");
// document.write(parrafo);

// ========== MÉTODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTO ==========

		// ----- .setAttribute(), .getAttribute(), .removeAttribute() -----
// const rangoEtario = document.querySelector(".rangoEtario");
// rangoEtario.setAttribute("type","text");
// const valorDelAttributo = rangoEtario.getAttribute("type");
// document.write(valorDelAttributo);
// const rangoEtario2 = document.querySelector(".rangoEtario2")
// rangoEtario2.removeAttribute("type")
// document.write("type");

// ========== ATRIBUTOS GLOBALES ==========

// const titulo = document.querySelector(".titulo");
// const subtitulo = document.querySelector(".subtitulo");

// titulo.setAttribute("contentEditable","true");
// titulo.setAttribute("dir","rtl");
// subtitulo.setAttribute("hidden","true");
// subtitulo.removeAttribute("hidden");
// subtitulo.setAttribute("tabindex","4");
// titulo.setAttribute("title","jajajajxd");

// ========== ATRIBUTOS DE INPUTS ==========

// const input = document.querySelector(".input-normal");
// const inputEnviar = document.querySelector(".input-enviar");

		// ----- value -----
// document.write(input.value = 567);
		// ----- type -----
// input.type = "range";
		// ----- accept -----
// input.type = "file";
// input.accept = "image/png";
		// ----- form -----
		// ----- minLength -----
// input.minLength = 4;
		// ----- placeholder -----
// input.placeholder = "Que pasa mami (borrar value para ver)";
		// ----- required -----
// input.required = "(borrar value para ver enviar)";

// ========== ATRIBUTO STYLE ==========

// const titulo = document.querySelector(".titulo");

// titulo.style.color = "#f71";
// titulo.style.backgroundColor = "#17f";
// titulo.style.padding = "30px";

// ========== MÉTODOS DE CLASSLIST ==========

// const titulo = document.querySelector(".tqm");

// titulo.classList.add("myLove");
// titulo.classList.add("hot");
// titulo.classList.remove("hot");
// valor = titulo.classList.item(1);

// comprobar = titulo.classList.contains("myLove");
// titulo.classList.add("sexi");
// comprobar2 = titulo.classList.toggle("sexi");

// titulo.classList.add("chul@");
// comprobar3 = titulo.classList.replace("chul@","wuap@");


// document.write(valor);
// document.write("<br>" + comprobar);
// document.write("<br>" + comprobar2);
// document.write("<br>" + comprobar3);

// ========== OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS ==========

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent;
// let resultado2 = titulo.innerHTML;
// let resultado3 = titulo.outerHTML;

// document.write("Muestra solo el texto: " + resultado + "<br>");
// document.write("lo mismo además de las etiquetas: " + resultado2 + "<br>");
// document.write("lo mismo además del cont HTML completo: " + resultado3);

// alert(resultado);
// alert(resultado2);
// alert(resultado3);

// ========== CRACIÓN DE ELEMENTOS ==========

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI");
// const textDelItem = document.createTextNode("Este es un item del texto");
// item.appendChild(textDelItem);
// contenedor.appendChild(item);

// -------------------------------------------------------------
// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();

// for ( i = 0; i < 20; i++){
// 	const item = document.createElement("LI");
// 	item.innerHTML = "Este es un item del elemneto";
// 	fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);
// console.log(fragmento);

// ========== OBTENCIÓN Y MODIFICACIÓN DE CHILDS (HIJOS) ==========

// const contenedor = document.querySelector(".contenedor");
// const hijo = contenedor.childNodes;

// console.log(hijo)

// ========== MÉTODOS DE CHILDS (HIJOS) ==========

// const contenedor = document.querySelector(".contenedor");
// const h2_antiguo = document.querySelector(".h2");
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Que onda raza";

// -----------------------------------------------------

// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// -----------------------------------------------------

// contenedor.removeChild(h2_antiguo);

// -----------------------------------------------------

// let respuesta = contenedor.hasChildNodes();

// if (respuesta){
// 	document.write("El elemento tiene hijos");
// } else {
// 	document.write("El elemento no tiene hijos");
// }

// ========== PROPIEDADES DE PARENTS (PADRES) ==========

// const contenedor = document.querySelector(".contenedor");
// const h2_antiguo = document.querySelector(".h2");
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Que onda raza";

// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// -----------------------------------------------------

// console.log(h2_nuevo.nextSibling);

// -----------------------------------------------------

// console.log(h2_nuevo.previousSibling);

// -----------------------------------------------------

// console.log(h2_nuevo.nextElementSibling);

// -----------------------------------------------------

// console.log(h2_nuevo.previousElementSibling);

// ========== NODOS - EXTRA ==========

// const div = document.querySelector(".div3");

// console.log(div.closest(".div"))