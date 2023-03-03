// const MODAL = document.querySelector('.modal-container');
// const BotonModal = document.querySelector(".formulario-link");

// BotonModal.addEventListener("click", () => {
//     MODAL.classList.add('modal-show');
// })

// const cerrarModal = document.querySelector(".closed-1");
// cerrarModal.addEventListener("click",()=>{
//     MODAL.classList.remove("modal-show")
// })

//Llamar a los modales
const MODAL = document.querySelector('.modal-container');
const Modal2 = document.querySelector('.modal-2');
const ModalNo = document.querySelector('.modalNo');
const Modal3 = document.querySelector('.modal-3');
const Modal5 = document.querySelector('.modal-5');
const Modal6 = document.querySelector('.modal-6');
const Modal7 = document.querySelector('.modal-7');
const Modal8 = document.querySelector('.modal-8');
const ModalEvent = document.querySelector('.modal-envent-calendar');
const ModalFinal = document.querySelector('.modal-final');




// Open modals
const OpenModals = (BotonModal,BotonModal2,BotonModalNo,BotonModal3,nombreInput,empresaInput,numeroInput,correoInput,BotonModalEvent,BotonFin) => {
    BotonModal.addEventListener("click",()=>{
        MODAL.classList.add('modal-show');
    });

    BotonModal2.addEventListener("click", () => {
        Modal2.classList.add('modal-show');
        MODAL.classList.remove('modal-show');
    });

    BotonModalNo.addEventListener("click", () => {
        ModalNo.classList.add('modal-show');
        Modal2.classList.remove('modal-show');
    });

    BotonModal3.addEventListener("click", () => {
        Modal3.classList.add('modal-show');
        Modal2.classList.remove('modal-show');
    });

    nombreInput.addEventListener("keydown", (e) =>{
        if(e.key === "Enter" && nombreInput.value !== ''){
            Modal5.classList.add('modal-show');
            Modal4.classList.remove('modal-show');
            const nombre = document.getElementById("nombre").value;
            localStorage.setItem("nombre",nombre)
            nombreInput.value = "";
        }
    });

    empresaInput.addEventListener("keydown", (e) =>{
        if(e.key === "Enter" && empresaInput.value !== ''){
            Modal6.classList.add('modal-show');
            Modal5.classList.remove('modal-show');
            const empresa = document.getElementById("empresa").value;
            localStorage.setItem("empresa",empresa)
            empresaInput.value = "";
            console.log("con esto cambiaremos de modal")
        }
    });

    numeroInput.addEventListener("keydown", (e) =>{
        if(e.key === "Enter" && numeroInput.value !== ''){
            Modal7.classList.add('modal-show');
            Modal6.classList.remove('modal-show');
            const contacto = document.getElementById("contacto").value;
            localStorage.setItem("contacto",contacto);
            numeroInput.value = "";
            console.log("con esto cambiaremos de modal")
        }
    });

    correoInput.addEventListener("keydown", (e) =>{
        if(e.key === "Enter" && correoInput.value !== ''){
            Modal8.classList.add('modal-show');
            Modal7.classList.remove('modal-show');
            const correo = document.getElementById("correo").value;
            localStorage.setItem("correo",correo);
            correoInput.value = "";
            console.log("con esto cambiaremos de modal")
        }
    });

    BotonModalEvent.addEventListener("click", () => {
        ModalEvent.classList.add('modal-show');
        Modal8.classList.remove('modal-show');
    });

    BotonFin.addEventListener("click", () => {
        ModalFinal.classList.add('modal-show');
        ModalEvent.classList.remove('modal-show');
        localStorage.clear();
    })
    

}

const BotonModal = document.querySelector(".formulario-link");
const BotonModal2 = document.querySelector(".mod2");
const BotonModalNo = document.querySelector(".modNo");
const BotonModal3 = document.querySelector(".mod3");
const nombreInput = document.querySelector('.nombre-input');
const empresaInput = document.querySelector('.empresa-input');
const numeroInput = document.querySelector('.num-input');
const correoInput = document.querySelector('.correo-input');
const BotonModalEvent= document.querySelector(".event-calendar");
const BotonFin = document.querySelector(".mod-fin");



OpenModals(BotonModal,BotonModal2,BotonModalNo,BotonModal3,nombreInput,empresaInput,numeroInput,correoInput,BotonModalEvent,BotonFin);




















// modal 2
// const Modal2 = document.querySelector('.modal-2');
// const BotonModal2 = document.querySelector(".mod2");

// BotonModal2.addEventListener("click", () => {
//     Modal2.classList.add('modal-show');
//     MODAL.classList.remove('modal-show');
// })
// const cerrarModal2 = document.querySelector(".closed-2");
// cerrarModal2.addEventListener("click",()=>{
//     Modal2.classList.remove("modal-show")
// })
// left-mod-2
// const leftMod2 = document.querySelector(".left-mod-2");
// leftMod2.addEventListener("click",()=>{
//     Modal2.classList.remove("modal-show");
//     MODAL.classList.add('modal-show');
// })

// modal NO
// const ModalNo = document.querySelector('.modalNo');
// const BotonModalNo = document.querySelector(".modNo");

// BotonModalNo.addEventListener("click", () => {
//     ModalNo.classList.add('modal-show');
//     Modal2.classList.remove('modal-show');
// })

// const cerrarModalNo = document.querySelector(".closed-no");
// cerrarModalNo.addEventListener("click",()=>{
//     ModalNo.classList.remove("modal-show")
// })

// left-modal-NO
// const leftModNo = document.querySelector(".left-mod-no");
// leftModNo.addEventListener("click",()=>{
//     ModalNo.classList.remove("modal-show");
//     Modal2.classList.add('modal-show');
// })
// modal 3
// const Modal3 = document.querySelector('.modal-3');
// const BotonModal3 = document.querySelector(".mod3");

// BotonModal3.addEventListener("click", () => {
//     Modal3.classList.add('modal-show');
//     Modal2.classList.remove('modal-show');
// })

// const cerrarModal3 = document.querySelector(".closed-3");
// cerrarModal3.addEventListener("click",()=>{
//     Modal3.classList.remove("modal-show")
// })

// left-modal-3
// const leftMod3 = document.querySelector(".left-mod-3");
// leftMod3.addEventListener("click",()=>{
//     Modal3.classList.remove("modal-show");
//     Modal2.classList.add('modal-show');
// })

// modal 4 - repetible
// const idModal = "";
const modales = (Modal4,BotonModal4,Modal3,ModalNo,Modal2,cerrarModal4,leftMod4,leftMod5,leftMod6,leftMod7,leftMod8,leftModCalendar)=>{
    BotonModal4.forEach((click)=>{
        click.addEventListener("click",(e)=>{
            console.log(e.srcElement.classList);
            console.log(e);
            if(e.srcElement.classList[3] === "left3" ||  e.srcElement.classList.length === 0){
                console.log("aqui estamos");
                leftMod4.addEventListener("click",()=>{
                    Modal4.classList.remove("modal-show");
                    Modal3.classList.add("modal-show");
                    ModalNo.classList.remove('modal-show');
                    Modal2.classList.remove("modal-show");
                });

                leftMod5.addEventListener("click",()=>{
                    Modal5.classList.remove("modal-show");
                    Modal4.classList.add("modal-show");
                });

                leftMod6.addEventListener("click",()=>{
                    Modal6.classList.remove("modal-show");
                    Modal5.classList.add("modal-show");
                });
                
                leftMod7.addEventListener("click",()=>{
                    Modal7.classList.remove("modal-show");
                    Modal6.classList.add("modal-show");
                });

                leftMod8.addEventListener("click",()=>{
                    Modal8.classList.remove("modal-show");
                    Modal7.classList.add("modal-show");
                });

                leftModCalendar.addEventListener("click",()=>{
                    ModalEvent.classList.remove("modal-show");
                    Modal8.classList.add("modal-show");
                })
            }
            if(e.srcElement.classList[2] === "leftno" || e.srcElement.classList.length === 1){
                console.log("por fi")
                leftMod4.addEventListener("click",()=>{
                    Modal4.classList.remove("modal-show");
                    ModalNo.classList.add('modal-show');
                    Modal3.classList.remove('modal-show');
                    Modal2.classList.remove("modal-show");
                });

                leftMod5.addEventListener("click",()=>{
                    Modal5.classList.remove("modal-show");
                    Modal4.classList.add("modal-show");
                });

                leftMod6.addEventListener("click",()=>{
                    Modal6.classList.remove("modal-show");
                    Modal5.classList.add("modal-show");
                });
                
                leftMod7.addEventListener("click",()=>{
                    Modal7.classList.remove("modal-show");
                    Modal6.classList.add("modal-show");
                });

                leftMod8.addEventListener("click",()=>{
                    Modal8.classList.remove("modal-show");
                    Modal7.classList.add("modal-show");
                });

                leftModCalendar.addEventListener("click",()=>{
                    ModalEvent.classList.remove("modal-show");
                    Modal8.classList.add("modal-show");
                })
            }
            if(e.srcElement.classList[1] === "left2"){
                leftMod4.addEventListener("click",()=>{
                    Modal4.classList.remove("modal-show");
                    Modal2.classList.add('modal-show');
                    ModalNo.classList.remove('modal-show');
                    Modal3.classList.remove('modal-show');
                });

                leftMod5.addEventListener("click",()=>{
                    Modal5.classList.remove("modal-show");
                    Modal4.classList.add("modal-show");
                });

                leftMod6.addEventListener("click",()=>{
                    Modal6.classList.remove("modal-show");
                    Modal5.classList.add("modal-show");
                });
                
                leftMod7.addEventListener("click",()=>{
                    Modal7.classList.remove("modal-show");
                    Modal6.classList.add("modal-show");
                });

                leftMod8.addEventListener("click",()=>{
                    Modal8.classList.remove("modal-show");
                    Modal7.classList.add("modal-show");
                });

                leftModCalendar.addEventListener("click",()=>{
                    ModalEvent.classList.remove("modal-show");
                    Modal8.classList.add("modal-show");
                })
            }
            Modal4.classList.add("modal-show");
            Modal3.classList.remove('modal-show');
            ModalNo.classList.remove('modal-show');
            Modal2.classList.remove('modal-show');
        }) 
    })
    cerrarModal4.addEventListener("click",()=>{
        Modal4.classList.remove("modal-show")
    })
}

const Modal4 = document.querySelector('.modal-4');
const BotonModal4 = document.querySelectorAll(".mod4");
const cerrarModal4 = document.querySelector(".closed-4");
const leftMod4 = document.querySelector(".left-mod-4");
const leftMod5 = document.querySelector(".left-mod-5");
const leftMod6 = document.querySelector(".left-mod-6");
const leftMod7 = document.querySelector(".left-mod-7");
const leftMod8 = document.querySelector(".left-mod-8");
const leftModCalendar = document.querySelector(".left-mod-calendar");

modales(Modal4,BotonModal4,Modal3,ModalNo,Modal2,cerrarModal4,leftMod4,leftMod5,leftMod6,leftMod7,leftMod8,leftModCalendar)





// left modales solos
const leftSolos = (leftMod2,leftModNo)=>{
    leftMod2.addEventListener("click",()=>{
        Modal2.classList.remove("modal-show");
        MODAL.classList.add('modal-show');
    });

    leftModNo.addEventListener("click",()=>{
        ModalNo.classList.remove("modal-show");
        Modal2.classList.add('modal-show');
    });

    leftMod3.addEventListener("click",()=>{
        Modal3.classList.remove("modal-show");
        Modal2.classList.add('modal-show');
    })

}

const leftMod2 = document.querySelector(".left-mod-2");
const leftModNo = document.querySelector(".left-mod-no");
const leftMod3 = document.querySelector(".left-mod-3");

leftSolos(leftMod2,leftModNo,leftMod3);





// Closed Modal
const ClosedModal = (closedModal,cerrarModal2,cerrarModalNo,cerrarModal3,cerrarModal5,cerrarModal6,cerrarModal7,cerrarModal8,cerrarrEvent,cerrarrFin)=>{
    closedModal.addEventListener("click",()=>{
        MODAL.classList.remove("modal-show")
    });

    cerrarModal2.addEventListener("click",()=>{
        Modal2.classList.remove("modal-show")
    });

    cerrarModalNo.addEventListener("click",()=>{
        ModalNo.classList.remove("modal-show")
    });

    cerrarModal3.addEventListener("click",()=>{
        Modal3.classList.remove("modal-show")
    });

    cerrarModal5.addEventListener("click",()=>{
        Modal5.classList.remove("modal-show")
    });

    cerrarModal6.addEventListener("click",()=>{
        Modal6.classList.remove("modal-show")
        Modal6.classList.remove('modal-show');
    });

    cerrarModal7.addEventListener("click",()=>{
        Modal7.classList.remove("modal-show")
    });

    cerrarModal8.addEventListener("click",()=>{
        Modal8.classList.remove("modal-show")
    });

    cerrarrEvent.addEventListener("click",()=>{
        ModalEvent.classList.remove("modal-show")
    });

    cerrarrFin.addEventListener("click",()=>{
        ModalFinal.classList.remove("modal-show")
    })

}

const closedModal = document.querySelector(".closed-1");
const cerrarModal2 = document.querySelector(".closed-2");
const cerrarModalNo = document.querySelector(".closed-no");
const cerrarModal3 = document.querySelector(".closed-3");
const cerrarModal5 = document.querySelector(".closed-5");
const cerrarModal6 = document.querySelector(".closed-6");
const cerrarModal7 = document.querySelector(".closed-7");
const cerrarModal8 = document.querySelector(".closed-8");
const cerrarrEvent = document.querySelector(".closed-event");
const cerrarrFin = document.querySelector(".closed-fin");

ClosedModal(closedModal,cerrarModal2,cerrarModalNo,cerrarModal3,cerrarModal5,cerrarModal6,cerrarModal7,cerrarModal8,cerrarrEvent,cerrarrFin);





// metodo para cambiar de modales, dando enter // modal 5
// const nombreInput = document.querySelector('.nombre-input');
// nombreInput.addEventListener("keydown", (e) =>{
//     if(e.key === "Enter" && nombreInput.value !== ''){
//         Modal5.classList.add('modal-show');
//         Modal4.classList.remove('modal-show');
//         const nombre = document.getElementById("nombre").value;
//         localStorage.setItem("nombre",nombre)
//         nombreInput.value = "";
//     }
// })

// const Modal5 = document.querySelector('.modal-5');


// const cerrarModal5 = document.querySelector(".closed-5");
//  cerrarModal5.addEventListener("click",()=>{
//      Modal5.classList.remove("modal-show")
// })

// modal 6
// const empresaInput = document.querySelector('.empresa-input');
// empresaInput.addEventListener("keydown", (e) =>{
//     if(e.key === "Enter" && empresaInput.value !== ''){
//         Modal6.classList.add('modal-show');
//         Modal5.classList.remove('modal-show');
//         const empresa = document.getElementById("empresa").value;
//         localStorage.setItem("empresa",empresa)
//         empresaInput.value = "";
//         console.log("con esto cambiaremos de modal")
//     }
// })
// const Modal6 = document.querySelector('.modal-6');

// const cerrarModal6 = document.querySelector(".closed-6");
// cerrarModal6.addEventListener("click",()=>{
//     Modal6.classList.remove("modal-show")
//     Modal6.classList.remove('modal-show');
// })

// modal 7
// const numeroInput = document.querySelector('.num-input');
// numeroInput.addEventListener("keydown", (e) =>{
//     if(e.key === "Enter" && numeroInput.value !== ''){
//         Modal7.classList.add('modal-show');
//         Modal6.classList.remove('modal-show');
//         const contacto = document.getElementById("contacto").value;
//         localStorage.setItem("contacto",contacto);
//         numeroInput.value = "";
//         console.log("con esto cambiaremos de modal")
//     }
// })
// const Modal7 = document.querySelector('.modal-7');



// modal 8
// const correoInput = document.querySelector('.correo-input');
// correoInput.addEventListener("keydown", (e) =>{
//     if(e.key === "Enter" && correoInput.value !== ''){
//         Modal8.classList.add('modal-show');
//         Modal7.classList.remove('modal-show');
//         const correo = document.getElementById("correo").value;
//         localStorage.setItem("correo",correo);
//         correoInput.value = "";
//         console.log("con esto cambiaremos de modal")
//     }
// })
// const Modal8 = document.querySelector('.modal-8');

// const cerrarModal8 = document.querySelector(".closed-8");
// cerrarModal8.addEventListener("click",()=>{
//     Modal8.classList.remove("modal-show")
// })


// Evento para enviar los datos al calendario
// const ModalEvent = document.querySelector('.modal-envent-calendar');
// const BotonModalEvent= document.querySelector(".event-calendar");

// BotonModalEvent.addEventListener("click", () => {
//     ModalEvent.classList.add('modal-show');
//     Modal8.classList.remove('modal-show');
// })

// const cerrarrEvent = document.querySelector(".closed-event");
// cerrarrEvent.addEventListener("click",()=>{
//     ModalEvent.classList.remove("modal-show")
// })


// Modal Final
// const ModalFinal = document.querySelector('.modal-final');
// const BotonFin= document.querySelector(".mod-fin");

// BotonFin.addEventListener("click", () => {
//     ModalFinal.classList.add('modal-show');
//     ModalEvent.classList.remove('modal-show');
//     localStorage.clear();
// })

// const cerrarFin = document.querySelector(".closed-fin");
// cerrarFin.addEventListener("click",()=>{
//     ModalFinal.classList.remove("modal-show")
// })