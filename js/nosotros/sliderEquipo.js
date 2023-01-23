const botonNext = document.querySelector('.flecha-azul-derecha');
const botonprev = document.querySelector('.flecha-azul-izquierda');
const SLIDER = document.querySelector('.nosotros-equipo-slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight() {
    let sliderSectionFirstd = document.querySelectorAll('.slider-section')[0];
    SLIDER.style.marginLeft = "-100%";
    SLIDER.style.transition = "all 0.5s";
    setTimeout(function() {
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement("beforeend", sliderSectionFirstd);
        SLIDER.style.marginLeft = "-0%";
    }, 500)
}

function moveLeft() {
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    SLIDER.style.marginLeft = "0%"
    SLIDER.style.transition = "all 0.5s"
    setTimeout(() => {
        SLIDER.style.transition = "none";
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = "-100%"
    }, 500)
}

botonNext.addEventListener("click", () => {
    moveRight();
})

botonprev.addEventListener("click", () => {
    moveLeft();
})