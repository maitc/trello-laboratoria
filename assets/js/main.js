function principal(){
	//se crea input que se activa al click (BUSCAR QUE SOLO APAREZCO EL MISMO BOTON SIEMPRE)
	function listaDespegable(){
		var cajaLista = document.getElementById("input-list");
		cajaLista.addEventListener("click", botonLista);
	}
	listaDespegable();

	//se crea boton que acompañara al inputDespegable
	function botonLista(){
		function btnTextarea(){ 
				//se crea boton de tarea
				var contenedorBoton = document.getElementById("lista");
				var botonTar = document.createElement("button");
				var contenidoBoton = document.createTextNode("Añadir");
				botonTar.setAttribute("id", "boton-input-1");
				//se le asigna padre
				botonTar.appendChild(contenidoBoton);
				contenedorBoton.appendChild(botonTar);
				

				//se crea funcion en donde se activar boton de lista
				botonTar.addEventListener("click", function(){
					//funcion constructora de lista.
					function List(lsta){
							this.lista = lsta;
					}
					//var arrLista = [];
					//var asd = "";
					var text = document.getElementById("input-list").value;
					var impresionLista = document.getElementById("click-boton-lista");
					var contenedorLista = document.createElement("p");
					var  lista = document.createTextNode(text);
					contenedorLista.appendChild(lista);
					impresionLista.appendChild(contenedorLista);

					
					/*var listObj = new List(lista); !No funciona :( !
					arrLista.push(listObj);
					
					arrLista.forEach(function(cv){
							asd = cv.lsta + btnTarjeta();
					})

					impresionLista.innerHTML = asd;*/

					//se crea boton de lista
					function btnTarjeta(){ 
						var contenedorTextarea = document.getElementById("lista-creada");
						var inputTar = document.createElement("textarea");
						inputTar.setAttribute("id", "tarjeta-input");
						//se le asigna padre
						contenedorTextarea.appendChild(inputTar);

						var contenedor = document.getElementById("lista-creada");
						var botonLis = document.createElement("button");
						var contenidoBoton = document.createTextNode("Añadir");
						contenedor.classList.add("lista");
						botonLis.setAttribute("id", "boton-input-2");
						//se le asigna padre
						botonLis.appendChild(contenidoBoton);
						contenedor.appendChild(botonLis);

							//var arrTarjeta = [];
							//se crea funcion en donde se activará boton tarjeta
							botonLis.addEventListener("click", function(){
								//funcion constructora de tarjeta.
								function Card(txtTarjeta, tarjeta){
										this.textoTarjeta = txtTarjeta;
										this.tarjeta = tarjeta;
								}
								var textoTarjeta = document.getElementById("tarjeta-input").value;
								var impresionTarjeta = document.getElementById("click-boton-tarjeta");
								var contenedorTarjeta = document.createElement("li");
								var tarjeta = document.createTextNode(textoTarjeta);
								contenedorTarjeta.appendChild(tarjeta);
								impresionTarjeta.appendChild(contenedorTarjeta);

								/*var tarjetaObj = new Card(textoTarjeta, inputTar);
								arrTarjeta.push(tarjetaObj);
								arrTarjeta.forEach(function(cv){
										impresionTarjeta = cv.textoTarjeta + "<br>" + cv.tarjeta;
									})*/
							});


					}
					btnTarjeta();
				});
	}
	btnTextarea();
}
		
	/*¡Primera forma de hacer!
	function inputList(){
		var contenedor = document.getElementById("container-lista");
		var inputLista = document.createElement("input");
		inputLista.setAttribute("placeholder", "Añadir lista");
		inputLista.setAttribute("id", "input-list");
		contenedor.appendChild(inputLista);
	};
	inputList();
	//se crea input que se activa al click
	function inputDespegable(){
		var contenedor = document.getElementById("input-despegable");
		var inputClick = document.createElement("input");
		contenedor.appendChild(inputClick);
	}
	//inputDespegable();
	//se crea boton que acompañara al inputDespegable
	function botonInput(){
		var contenedor = document.getElementById("boton-input");
		var inputBoton = document.createElement("button");
		var contenidoBoton = document.createTextNode("Añadir");
		inputBoton.appendChild(contenidoBoton);
		contenedor.appendChild(inputBoton);
	}
	botonInput();
	//funcionalidad despegable input +  boton
	function listaDespegable(){
		var cajaLista = document.getElementById("input-list");
		cajaLista.addEventListener("click", inputDespegable);
	}
	listaDespegable();
*/
}
principal();