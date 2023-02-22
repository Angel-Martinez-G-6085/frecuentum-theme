const MODAL = document.querySelector('.modal-container');
const BotonModal = document.querySelector(".formulario-link");

BotonModal.addEventListener("click", () => {
    MODAL.classList.add('modal-show');
})