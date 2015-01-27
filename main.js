		var $showMenu = document.getElementById("show");
		var $menu = document.getElementById("menuConf");
		var $body = document.querySelector("body");
		
		

		var body = new Hammer($body);
		

		$showMenu.addEventListener("click", mostrarMenu);
		
		$("#v2").click(function(){

			$(".item-posted").addClass("v2");
			$(".item-posted").removeClass("item");
			

		})

		$("#v1").click(function(){
			$(".item-posted").addClass("item");
			$(".item-posted").removeClass("v2");
			
			

		})

		function mostrarMenu(){

			$menu.classList.toggle("menu-mostrado");
			
			
		}

		function ocultarMenu(){
			$menu.classList.remove("menu-mostrado");
			
		}


		body.on("panleft", ocultarMenu);






