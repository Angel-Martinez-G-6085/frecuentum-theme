const HeaderMenu = document.querySelector('.nav__menu');
const openButton = document.querySelector('.nav-movil-icon');

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
});

// Open menu
function abrirMenu() {
    openButton.addEventListener("click", () => {
        HeaderMenu.classList.add('open-menu');
    })
}