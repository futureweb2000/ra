		var $showMenu = document.getElementById("show");
		var $menu = document.getElementById("menuConf");
		var $vistaUno = document.getElementById("v1");
		var $vistaDos = document.getElementById("v2");
		var $vistaTres = document.getElementById("v3");
		var $art = document.getElementById("itemPost");
		var $body = document.querySelector("body");
		

		var body = new Hammer($body);
		

		$showMenu.addEventListener("click", mostrarMenu);
		$vistaDos.addEventListener("click", cambiarVista2)

		function cambiarVista2(){

			$art.classList.toggle("v2");
		}

		function mostrarMenu(){

			$menu.classList.toggle("menu-mostrado");
			
			
		}

		function ocultarMenu(){
			$menu.classList.remove("menu-mostrado");
			
		}


		body.on("panleft", ocultarMenu);
	
			

			$('#target').keydown(function(data) {
  console.log(data.which.ToUppercase());
});
  