const IDBRequest = indexedDB.open("JairoDB",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
	const db = IDBRequest.result;
	db.createObjectStore("nombres",{
		autoIncrement: true
	})
});

IDBRequest.addEventListener("success",()=>{
	leerObjetos();
})

const IDBData = modo=>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres",modo);
	const objectStore = IDBtransaction.objectStore("nombres");
	return objectStore;
}

const addObjeto = objeto=>{
	const data = IDBData("readwrite");
	data.add(objeto);
};

const modificarObjeto = (key,objeto)=>{
	const data = IDBData("readwrite");
	data.put(objeto,key);
};

const eliminarObjeto = key=>{
	const data = IDBData("readwrite");
	data.delete(key);
};

const leerObjetos = ()=>{
	const data = IDBData("readonly");
	const cursor = data.openCursor();
	const fragment = document.createDocumentFragment();
	document.querySelector(".nombres").innerHTML = "";
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			const elemento = nombresHTML(cursor.result.key,cursor.result.value);
			fragment.appendChild(elemento);
			cursor.result.continue();
		};
		document.querySelector(".nombres").appendChild(fragment);
	});
};

document.getElementById("add").addEventListener("click",e=>{
	e.preventDefault();
	const nombre = document.getElementById("name");
	if(nombre.value.length > 0){
		if(document.querySelector(".posible") != undefined){
			if(confirm("Hay nombres sin guardes, ¿deseas continuar?")){
				addObjeto({nombre: nombre.value});
				nombre.value = "";
				leerObjetos();
			}
		} else {
			addObjeto({nombre: nombre.value});
			nombre.value = "";
			leerObjetos();
		}
	}
})

const nombresHTML = (id,nombre)=>{
	const container = document.createElement("DIV");
	const h2 = document.createElement("H2");
	const options = document.createElement("DIV");
	const saveButton = document.createElement("BUTTON");
	const deleteButton = document.createElement("BUTTON");

	container.classList.add("nombre");
	options.classList.add("options");
	saveButton.classList.add("imposible");
	deleteButton.classList.add("delete");

	saveButton.textContent = "Guardar";
	deleteButton.textContent = "Eliminar";
	h2.textContent = nombre.nombre;
	h2.setAttribute("contenteditable","");

	options.appendChild(saveButton);
	options.appendChild(deleteButton);

	container.appendChild(h2);
	container.appendChild(options);

	h2.addEventListener("keyup",()=>{
		saveButton.classList.replace("imposible","posible");
	});

	saveButton.addEventListener("click",()=>{
		if(saveButton.classList.contains("posible")){
			modificarObjeto(id,{nombre:`${h2.textContent}`});
			saveButton.classList.replace("posible","imposible");
		};
	});

	deleteButton.addEventListener("click",()=>{
		eliminarObjeto(id);
		document.querySelector(".nombres").removeChild(container);
	});
	return container;
};



const addObjetosCustomized = ()=>{
	addObjeto({nombre:"Kelly"});
	addObjeto({nombre:"Nahomi"});
	addObjeto({nombre:"Natalia"});
	addObjeto({nombre:"Damaris"});
	addObjeto({nombre:"Maria"});
}