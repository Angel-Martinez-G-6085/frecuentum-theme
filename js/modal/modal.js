const MODAL = document.querySelector('.modal-container');
const BotonModal = document.querySelector(".formulario-link");

BotonModal.addEventListener("click", () => {
    MODAL.classList.add('modal-show');
})

const cerraModal = document.querySelector(".closed-1");
cerraModal.addEventListener("click",()=>{
    MODAL.classList.remove("modal-show")
}) 

// modal 2
const Modal2 = document.querySelector('.modal-2');
const BotonModal2 = document.querySelector(".mod2");

BotonModal2.addEventListener("click", () => {
    Modal2.classList.add('modal-show');
    MODAL.classList.remove('modal-show');
})
const cerraModal2 = document.querySelector(".closed-2");
cerraModal2.addEventListener("click",()=>{
    Modal2.classList.remove("modal-show")
}) 

// modal NO
const ModalNo = document.querySelector('.modalNo');
const BotonModalNo = document.querySelector(".modNo");

BotonModalNo.addEventListener("click", () => {
    ModalNo.classList.add('modal-show');
    Modal2.classList.remove('modal-show');
})

const cerraModalNo = document.querySelector(".closed-no");
cerraModalNo.addEventListener("click",()=>{
    ModalNo.classList.remove("modal-show")
}) 
// modal 3
const Modal3 = document.querySelector('.modal-3');
const BotonModal3 = document.querySelector(".mod3");

BotonModal3.addEventListener("click", () => {
    Modal3.classList.add('modal-show');
    Modal2.classList.remove('modal-show');
})

const cerraModal3 = document.querySelector(".closed-3");
cerraModal3.addEventListener("click",()=>{
    Modal3.classList.remove("modal-show")
}) 

// modal 4
const Modal4 = document.querySelector('.modal-4');
const BotonModal4 = document.querySelector(".mod4");


BotonModal4.addEventListener("click", () => {
    Modal4.classList.add('modal-show');
    Modal3.classList.remove('modal-show');
    ModalNo.classList.remove('modal-show')
})
const cerraModal4 = document.querySelector(".closed-4");
cerraModal4.addEventListener("click",()=>{
    Modal4.classList.remove("modal-show")
}) 

// modal 5
const Modal5 = document.querySelector('.modal-5');
const BotonModal5 = document.querySelector(".mod5");

BotonModal5.addEventListener("click", () => {
    Modal5.classList.add('modal-show');
    Modal4.classList.remove('modal-show');
})
const cerraModal5 = document.querySelector(".closed-5");
cerraModal5.addEventListener("click",()=>{
    Modal5.classList.remove("modal-show")
}) 

// modal 6
const Modal6 = document.querySelector('.modal-6');
const BotonModal6 = document.querySelector(".mod6");

BotonModal6.addEventListener("click", () => {
    Modal6.classList.add('modal-show');
    Modal5.classList.remove('modal-show');
})

const cerraModal6 = document.querySelector(".closed-6");
cerraModal6.addEventListener("click",()=>{
    Modal6.classList.remove("modal-show")
    Modal6.classList.remove('modal-show');
}) 

// modal 7
const Modal7 = document.querySelector('.modal-7');
const BotonModal7 = document.querySelector(".mod7");

BotonModal7.addEventListener("click", () => {
    Modal7.classList.add('modal-show');
    Modal6.classList.remove('modal-show');
})

const cerraModal7 = document.querySelector(".closed-7");
cerraModal7.addEventListener("click",()=>{
    Modal7.classList.remove("modal-show")
}) 

// modal 8
const Modal8 = document.querySelector('.modal-8');
const BotonModal8 = document.querySelector(".mod8");

BotonModal8.addEventListener("click", () => {
    Modal8.classList.add('modal-show');
    Modal7.classList.remove('modal-show');
})

const cerraModal8 = document.querySelector(".closed-8");
cerraModal8.addEventListener("click",()=>{
    Modal8.classList.remove("modal-show")
}) 