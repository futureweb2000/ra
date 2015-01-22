var $showMenu = document.getElementById("show");
var $hideMenu = document.getElementById("hide");
var $menu = document.getElementById("menuConf");
var $vistaUno = document.getElementById("v1");
var $vistaDos = document.getElementById("v2");
var $vistaTres = document.getElementById("v3");
var $art = document.getElementById("itemPost");
var $body = document.querySelector("body");


var body = new Hammer($body);
		

		

		$showMenu.addEventListener("click", mostrarMenu);
		$hideMenu.addEventListener("click", ocultarMenu);

		$vistaDos.addEventListener("click", cambiarVista2)

		function cambiarVista2(){

			$art.classList.add("v2");
		}
		function mostrarMenu(){

			$menu.classList.add("menu-mostrado");
			$showMenu.classList.add("not-active");
			$hideMenu.classList.remove("not-active");
			$hideMenu.classList.add("is-active");
			
		}


		function ocultarMenu(){

			$menu.classList.remove("menu-mostrado");
			$showMenu.classList.remove("not-active");
			$hideMenu.classList.add("not-active");
			$hideMenu.classList.remove("is-active");

		}


		body.on("panleft", ocultarMenu);
		
		
	
