		var $showMenu = document.getElementById("show");
		var $menu = document.getElementById("menuConf");
		var $body = document.querySelector("body");
		
		

		var body = new Hammer($body);
		

		$showMenu.addEventListener("click", mostrarMenu);
		
		$("#v2").click(function(){

			$(".item-posted").addClass("v2");
			$(".item-posted").removeClass("item");
			$(".item-posted").removeClass("v3");
			
		});


		$(".botonBuscar").click(function(){
			$("#buscar-wrap").fadeIn();
			$("#buscar-wrap").addClass("buscar-activo");
			$("#buscar-wrap").remooveClass("buscar");
				
		});

		$("#cancel").click(function(){
			$("#buscar-wrap").fadeOut();
	
		});


// animaciooon
// 		$( "h3" ).click(function() {
//   $( "article" ).animate({
//     opacity: 0.25,
//     left: 0,
//     height: "toggle"
//   }, 200, function() {
//     // Animation complete.
//   });
// });

		$("#v1").click(function(){
			$(".item-posted").addClass("item");
			$(".item-posted").removeClass("v2");
			$(".item-posted").removeClass("v3");
			

		})

		$("#v3").click(function(){
			$(".item-posted").removeClass("item");
			$(".item-posted").removeClass("v2");
			$(".item-posted").addClass("v3");
			

		})

		function mostrarMenu(){

			$menu.classList.toggle("menu-mostrado");
			
			
		}

		function ocultarMenu(){
			$menu.classList.remove("menu-mostrado");
			
		}


		body.on("panleft", ocultarMenu);






