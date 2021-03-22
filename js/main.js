var menu = document.querySelector('#i-menu');
var cerrar = document.querySelector('#i-close')

function openMenu (event){
	this.classList.toggle('is-active');
	document.querySelector(".nav-main").classList.toggle("is-active");
	event.preventDefault();
}

function cerrarMenu (event){
	document.querySelector(".nav-main").classList.remove("is-active");
	event.preventDefault();
}

menu.addEventListener('click', openMenu, false);
cerrar.addEventListener('click', cerrarMenu, false);

