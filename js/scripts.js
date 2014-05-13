
var matAp = new Set();

$(document).on("click",".disponible",function(){
	var $id = $(this).attr("id");
	$(this).toggleClass("aprobada disponible");
	matAp.add($id);
	
	//Matemática 1
	if(matAp.has("si101")){
		if ($("#si102").attr("class") == "bloqueada"){
			//Matemática 2
			$("#si102").toggleClass("disponible bloqueada");
		}
	}
	
	//Matemática 2
	if(matAp.has("si102")){
		if ($("#si205").attr("class") == "bloqueada"){
			//Matemática 3
			$("#si205").toggleClass("disponible bloqueada");
		}
	}
	
	//Organización de Computadoras
	if(matAp.has("si104")){
		if ($("#si105").attr("class") == "bloqueada"){
			//Arquitectura de Computadoras
			$("#si105").toggleClass("disponible bloqueada");
		}
	}
	
	//Algoritmos datos y programas
	if(matAp.has("si103")){
		
		//IBD
		if ($("#si201").attr("class") == "bloqueada") {
			//Ibd
			$("#si201").toggleClass("disponible bloqueada");
			//Ing 1
			$("#si202").toggleClass("disponible bloqueada");
			//Objetos 1
			$("#si206").toggleClass("disponible bloqueada");
			//Seminario lenguaje
			$("#si207").toggleClass("disponible bloqueada");
		}
		
		if(matAp.has("si102")){
			if ($("#si203").attr("class") == "bloqueada"){
				//AyED
				$("#si203").toggleClass("disponible bloqueada");
			}
		}

		if(matAp.has("si105")){
			if ($("#si204").attr("class") == "bloqueada"){
				//ISO
				$("#si204").toggleClass("disponible bloqueada");
			}
		}

	}

	//inglés
	if(matAp.has("si208")){
		
		if(matAp.has("si202")){
			if ($("#si302").attr("class") == "bloqueada"){
				//Ing 2
				$("#si302").toggleClass("disponible bloqueada");
			}

			if(matAp.has("si204")){
				if ($("#si304").attr("class") == "bloqueada"){
					//Redes
					$("#si304").toggleClass("disponible bloqueada");
				}
			};
			if(matAp.has("si102")){
				if ($("#oi310").attr("class") == "bloqueada"){
					//Lógica y elementos de IA
					$("#oi310").toggleClass("disponible bloqueada");
				}
			}
			if (matAp.has("si201") & matAp.has("si203") & matAp.has("si207")) {
				if ($("#si305").attr("class") == "bloqueada"){
					//Proyecto de Software
					$("#si305").toggleClass("disponible bloqueada");
				}
			}
		}
		if(matAp.has("si203")){
			if(matAp.has("si207")){
				if ($("#si306").attr("class") == "bloqueada"){
					$("#si306").toggleClass("disponible bloqueada");
				}
			}
		}
		if(matAp.has("si206")){
			if ($("#si307").attr("class") == "bloqueada"){	
				//Objetos 2
				$("#si307").toggleClass("disponible bloqueada");
			}
		}
		if(matAp.has("si204")){
			if (matAp.has("si207")) {
				if ($("#si301").attr("class") == "bloqueada"){
					//Programación concurrente
					$("#si301").toggleClass("disponible bloqueada");
				}
			}
		}
		if(matAp.has("si203")){
			if(matAp.has("si205")){
				if ($("#oi308").attr("class") == "bloqueada"){
					//Computabilidad y complejidad
					$("#oi308").toggleClass("disponible bloqueada");
				}
				if(matAp.has("si306")){
					if ($("#oi401").attr("class") == "bloqueada"){
						//Teoría de la computación
						$("#oi401").toggleClass("disponible bloqueada");
						//optativas de cuarto
						$("#40901").toggleClass("disponible bloqueada");
						$("#40902").toggleClass("disponible bloqueada");
						$("#40903").toggleClass("disponible bloqueada");
					
					}
				}
			}
		}
		if(matAp.has("si304")){
			if ($("#si403").attr("class") == "bloqueada"){
				$("#si403").toggleClass("disponible bloqueada");
			}
		}
		if(matAp.has("si301")){
			if ($("#oi404").attr("class") == "bloqueada"){
				$("#oi404").toggleClass("disponible bloqueada");
			}
		}
		if(matAp.has("si305")){
			if ($("#oi402").attr("class") == "bloqueada"){
				$("#oi402").toggleClass("disponible bloqueada");
				$("#si501").toggleClass("disponible bloqueada");
			}
		}
		if(matAp.has("si302") & matAp.has("oi402")){
			if ($("#50401").attr("class") == "bloqueada"){
				$("#50401").toggleClass("disponible bloqueada");
				$("#50402").toggleClass("disponible bloqueada");	
			}
		}
	}
});

$(document).on("click",".aprobada",function(){
//	var $id = $(this).attr("id");
//	console.log($id);
//	$(this).toggleClass("aprobada disponible");
//	matAp.delete($id);
//	console.log(matAp.size);
});