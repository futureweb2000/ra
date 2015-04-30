		var $showMenu = document.getElementById("show");
		var $menu = document.getElementById("menuConf");
		var $body = document.querySelector("body");
		
		

		var body = new Hammer($body);
		


		$showMenu.addEventListener("click", mostrarMenu);
		
		$("#v2").click(function(){
			
			$(".item-posted").removeClass("v3");
			$(".item-posted").addClass("v2");
			$(".item-posted").removeClass("item");
			
		});


		$(".botonCategorias").click(function(){
			
			$(".categoria-wrap").slideToggle();
			
				
		});

		$("#lista-categoria1").click(function(){
			
			$("#sub1").slideToggle();
			
				
		});


		$("#lista-categoria2").click(function(){
			
			$("#sub2").slideToggle();
			
				
		});

		$("#lista-categoria3").click(function(){
			
			$("#sub3").slideToggle();
			
				
		});

		$("#lista-categoria4").click(function(){
			
			$("#sub4").slideToggle();
			
				
		});


		$("#lista-categoria5").click(function(){
			
			$("#sub5").slideToggle();
			
				
		});




		

		$("#cancel").click(function(){
			$("#buscar-wrap").fadeOut();
	
		});

		$(".botonBuscar").click(function(){
			
			$("#buscar-wrap").fadeIn();
			$("#buscar-wrap").addClass("buscar-activo");
			$("#buscar-wrap").remooveClass("buscar");
				
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


		$("[data-close]").on("click", function(){

			$(".anuncio-principal-wrap").fadeOut();
			$("[data-show]").fadeIn();
			

			
		});

		$("[data-show]").on("click", function(){

			$(".anuncio-principal-wrap").fadeIn();
			$("[data-show]").fadeOut();

		});



