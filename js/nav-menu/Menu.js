const HeaderMenu = document.querySelector('.nav__menu');
const openButton = document.querySelector('.nav-movil-icon');
const closeButton = document.querySelector('.nav-movil-cerrar-icon');

// Stiky Menu
$(document).ready(function(){
    $(window).scroll(function(){
        let header = $('header');
        let scroll = $(window).scrollTop();

        if(scroll >= 150) {
            header.addClass('fixed');
        }
    });
    abrirMenu();
    cerrarMenu();
});

// Open menu
function abrirMenu() {
    openButton.addEventListener("click", () => {
        HeaderMenu.classList.add('open-menu');
    })
}

// Cerrar menu
function cerrarMenu() {
    closeButton.addEventListener("click", () => {
        HeaderMenu.classList.toggle('open-menu');
    })
}

