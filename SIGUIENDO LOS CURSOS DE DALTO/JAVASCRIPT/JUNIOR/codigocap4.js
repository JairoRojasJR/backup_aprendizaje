// ========== MÉTODOS DE CADENA ==========

// ----- .concat() -----

// let cadena = "Cadena de prueba"
// let cadena2 = " hola jesucristo"

// resultado = cadena.concat(cadena2)

// document.write(resultado)

// // ----- .startsWith() -----

// let cadena = "Cadena de prueba"
// let cadena2 = "Cadena"

// resultado = cadena.startsWith(cadena2)

// document.write(resultado)

// ----- .endsWith() -----

// let cadena = "Cadena de prueba"
// let cadena2 = "ueba"

// resultado = cadena.endsWith(cadena2)

// document.write(resultado)

// ----- .includes() -----

// let cadena = "Cadena de prueba"
// let cadena2 = "de"

// resultado = cadena.includes(cadena2)

// document.write(resultado)

// ----- .indexOf() -----

// let cadena = "Cadena de prueba"
// let cadena2 = "prueba"

// resultado = cadena.indexOf(cadena2)

// document.write(resultado)

// ----- .padStart() (No es standar aun)-----

// let cadena = "Hola"

// resultado = cadena.padStart(6, "1")

// document.write(resultado)

// ----- .padEnd() (No es standar aun)-----

// let cadena = "Hola"
// resultado = cadena.padEnd(10, "123")
// document.write(resultado)

// ----- .repeat() (No es standar aun)-----

// let cadena = "Hola "
// resultado = cadena.repeat(10)
// document.write(resultado)

// ----- .split() -----

// let cadena = "Hola como estas"
// resultado = cadena.split("como")
// document.write(resultado[1])

// ----- .substring() -----

// let cadena = "Hola como estas"
// resultado = cadena.substring(1, 3)
// document.write(resultado)

// ----- .toLowerCase() -----

// let cadena = "hola como estas";
// resultado = cadena.toLowerCase();
// document.write(resultado);

// ----- .toUpperCase() -----

// let cadena = "hola como estas";
// resultado = cadena.toUpperCase();
// document.write(resultado);

// ----- .toString() -----

// let cadena = 50;
// resultado = cadena.toString();
// document.write(2 + resultado);

// ----- .trim() -----

// let cadena = "   pedro pedro   pedro     ";
// resultado = cadena.trim();
// document.write(resultado.length);

// ----- .trimStart() -----

// let cadena = "    pedro";
// resultado = cadena.trimStart();
// document.write(resultado.length);

// ----- .trimEnd() -----

// let cadena = " pedro     ";
// resultado = cadena.trimEnd();
// document.write(resultado.length);

// ========== MÉTODOS DE ARRAY ==========
// __________ TRANSFORMADORES __________

// ----- .pop() -----

// let nombres = ["Maria", "Pedro", "Jorge"];
// resultado = nombres.pop();
// document.write(resultado);

// ----- .shift() -----

// let nombres = ["Maria", "Pedro", "Jorge"];
// resultado = nombres.shift();
// document.write(resultado);

// ----- .push() -----

// let nombres = ["Maria", "Pedro", "Jorge"];
// resultado = nombres.push("Juanito");
// document.write( nombres + "<br>" + resultado);

// ----- .reverse() -----

// let nombres = ["Maria", "Pedro", "Jorge"];
// resultado = nombres.reverse();
// document.write(resultado);

// ----- .unshift() -----

// let nombres = ["Maria", "Pedro", "Jorge"];
// resultado = nombres.unshift("Mario","Sergio");
// document.write(nombres + "<br>" + resultado);

// ----- .sort() -----

// let nombres = ["Arrogante","Zorro","Maria", "Pedro", "Jorge"];
// resultado = nombres.sort();
// document.write(resultado);

// ----- .splice() -----

// let nombres = ["Adorable","Zorro","Maria", "Pedro", "Jorge"];
// resultado = nombres.splice(1,3,"Sergio","Nahomi","Natalia");
// document.write("Elementos eliminados: " + resultado + "<br>" + "Resultado: " + nombres);

// -------- (Forma de agregar al principio sin eliminar) ------------------------------------------

// let nombres = ["Adorable","Zorro","Maria", "Pedro", "Jorge"];
// resultado = nombres.splice(1,0,"Sergio","Nahomi","Natalia");
// document.write("Elementos eliminados: " + resultado + "<br>" + "Resultado: " + nombres);

// __________ ACCESORES __________

// -------- .join() ------------------------------------------

// let nombres = ["Adorable","Zorro","Maria", "Pedro", "Jorge"];
// let resultado = nombres.join("<br>:) ");
// document.write("Normal: " + nombres + "<br>" + ":) " + resultado);

// -------- .slice() ------------------------------------------

// let nombres = ["Adorable","Zorro","Maria", "Pedro", "Jorge"];
// let resultado = nombres.slice(0,2);
// document.write("Normal: " + nombres + "<br>" + "Resultado: " + resultado);

// __________ DE REPETICIÓN __________

// -------- .filter() ------------------------------------------

// let nombres = ["Jorge","Sergio", "Pedro","dedo","sopa"];
// resultado = nombres.filter(nombres=> nombres.length > 4)
// document.write(resultado)

// -------- .forEach() ------------------------------------------

// let nombres = ["Jorge","Sergio", "Pedro","dedo","sopa"];
// nombres.forEach(nombre=> nombres)
// document.write(nombres)

// ========== OBJETO MATH - BÁSICO ==========
// __________ MÉTODOS __________

// let numero = Math.sqrt(25);
// let numero2 = Math.cbrt(27);
// let numero3 = Math.max(27, 40, 300, 503, 80,33);
// let numero4 = Math.min(5, 40, 300, 503, 80,33);
// let numero5 = Math.random() * 100;
// let numero6 = Math.random() * 100;
// numero6 = Math.round(numero6);
// let numero7 = Math.random() * 99;
// numero7 = Math.floor(numero7 + 1);
// let numero8 = Math.trunc(9.9835799);

// document.write("Raíz cuadrada: " + numero + "<br>");
// document.write("Raíz cúbica: " + numero2 + "<br>");
// document.write("Número más grande: " + numero3 + "<br>");
// document.write("Número más pequeño: " + numero4 + "<br>");
// document.write("Número aleatorio: " + numero5 + "<br>");
// document.write("Número aleatorio redondeado al entero más cercano: " + numero6 + "<br>");
// document.write("Número aleatorio redondeado para abajo: " + numero7 + "<br>");
// document.write("Número sin decimales: " + numero8 + "<br>");
