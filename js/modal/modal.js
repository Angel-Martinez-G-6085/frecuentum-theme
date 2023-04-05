const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    empresa: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	// password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/ // 7 a 14 numeros.
}


//Llamar a los modales
const MODAL = document.querySelector('.primer-modal'),
      Modal2 = document.querySelector('.modal-2'),
      ModalNo = document.querySelector('.modalNo'),
      Modal3 = document.querySelector('.modal-3'),
      Modal5 = document.querySelector('.modal-5'),
      Modal6 = document.querySelector('.modal-6'),
      Modal7 = document.querySelector('.modal-7'),
      Modal8 = document.querySelector('.modal-8'),
      ModalEvent = document.querySelector('.modal-envent-calendar'),
      ModalFinal = document.querySelector('.modal-final');





// Validar checkbox

let checkboxs = document.querySelectorAll(".check");

const checkboxMultiple = (checkboxs)=>{
            checkboxs.forEach((click)=>{
                click.addEventListener("change",(e)=>{
                    let validChexbox = e.target.checked;
                    let validNameCheck = e.target.name;

                    // if(validNameCheck === "check1"){
                    //     localStorage.setItem("nameChek1",validNameCheck)
                    //     localStorage.setItem("bool",validChexbox)
                    // }

                    validNameCheck === "check1" ? localStorage.setItem("nameChek1",validNameCheck) + localStorage.setItem("valueChek1",validChexbox): ""; 
                    validNameCheck === "check2" ? localStorage.setItem("nameChek2",validNameCheck)+ localStorage.setItem("valueChek2",validChexbox): ""; 
                    validNameCheck === "check3" ? localStorage.setItem("nameChek3",validNameCheck)+ localStorage.setItem("valueChek3",validChexbox): ""; 
         
                    let nameChek1 = localStorage.getItem("nameChek1")
                    let nameChek2 = localStorage.getItem("nameChek2")
                    let nameChek3 = localStorage.getItem("nameChek3")
                    let valueChek1 = localStorage.getItem("valueChek1")
                    let valueChek2 = localStorage.getItem("valueChek2")
                    let valueChek3 = localStorage.getItem("valueChek3")

                    let vercheck = localStorage.getItem("check")
                    let vercheck2 = localStorage.getItem("check2")
                    let vercheck3 = localStorage.getItem("check3")
                    
                   if(valueChek1=== "true" && valueChek2 === "true" && valueChek3 === "true" && nameChek1 === "check1" && nameChek2 === "check2" && nameChek3=== "check3" &&vercheck=== "identifier"){
                        ModalAvisoPrivacidadFooter.classList.remove('modal-show');
                        localStorage.removeItem("check");                        
                        limpiarCheckbox();

                    }else if(valueChek1 === "true" && valueChek2 === "true" && valueChek3 === "true" && nameChek1 === "check1" && nameChek2 === "check2" && nameChek3=== "check3"&&vercheck2=== "privado"){
                        MODAL.classList.add('modal-show');
                        ModalAvisoPrivacidad.classList.remove('modal-show');
                        localStorage.removeItem("check2");
                        limpiarCheckbox();
                    }else if(valueChek1 === "true" && valueChek2 === "true" && valueChek3 === "true" && nameChek1 === "check1" && nameChek2 === "check2" && nameChek3=== "check3"&&vercheck3=== "modal-global"){
                        MODAL.classList.add('modal-show');
                        ModalAvisoPrivacidad.classList.remove('modal-show');
                        localStorage.removeItem("check3");
                        limpiarCheckbox();
                    }
                });

            })
}

checkboxMultiple(checkboxs);




function limpiarCheckbox(){
    let vaciarCheckbox  = document.querySelectorAll(".check");
    vaciarCheckbox.forEach((e)=>{
        e.checked = false
    });
    localStorage.removeItem("nameChek1")
    localStorage.removeItem("nameChek2")
    localStorage.removeItem("nameChek3")
    localStorage.removeItem("valueChek1")
    localStorage.removeItem("valueChek2")
    localStorage.removeItem("valueChek3")
}
 


// Modal para el aviso de privacidad
// llamamos al modal

const ModalAvisoPrivacidad = document.querySelector('.modal-aviso-privacidad');
const ModalAvisoPrivacidadFooter = document.querySelector('.modal-footer');

const AvisoPrivacidad = (BotonAvisoPrivacidad,closedModalAviso,closedModalAviso2)=>{
    BotonAvisoPrivacidad.forEach((click)=>{
        click.addEventListener("click",(e)=>{
            console.log(e)
            if(e.target.classList[1] === "identifier"){
                ModalAvisoPrivacidadFooter.classList.add('modal-show');
                let verificarcheck = e.srcElement.classList[1];
                localStorage.setItem("check",verificarcheck);
            }
            if(e.target.classList[1] === "privado"){
                ModalAvisoPrivacidad.classList.add('modal-show');
                HeaderMenu.classList.toggle('open-menu');
                let verificarcheck2 = e.srcElement.classList[1];
                localStorage.setItem("check2",verificarcheck2);
            }
            if(e.target.classList[1] === "modal-global"){
                ModalAvisoPrivacidad.classList.add('modal-show');
                let verificarcheck2 = e.srcElement.classList[1];
                localStorage.setItem("check3",verificarcheck2);
            }
        })
    })
    closedModalAviso.addEventListener("click",()=>{
        ModalAvisoPrivacidad.classList.remove('modal-show');
        localStorage.removeItem("check2")
        localStorage.removeItem("check3")
    });
    closedModalAviso2.addEventListener("click",()=>{
        ModalAvisoPrivacidadFooter.classList.remove('modal-show');
        localStorage.removeItem("check")
    });
}

const BotonAvisoPrivacidad = document.querySelectorAll(".abrir-modal-link");
const closedModalAviso = document.querySelector(".closed-aviso");
const closedModalAviso2 = document.querySelector(".closed-aviso2");

AvisoPrivacidad(BotonAvisoPrivacidad,closedModalAviso,closedModalAviso2);







// Open modals
const OpenModals = (BotonModal2,BotonModalNo,BotonModal3,nombreInput,empresaInput,numeroInput,correoInput,BotonModalEvent) => {
    // BotonModal.addEventListener("click",()=>{
    //     MODAL.classList.add('modal-show');
    //     HeaderMenu.classList.toggle('open-menu');
    // });

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

    // let formulario_input_error = document.querySelectorAll(".formulario-input-error");

    // formulario_input_error.forEach((input)=>{
    //     input.addEventListener

    // })
    

    nombreInput.addEventListener("keyup", (e) =>{
        console.log(e)
        if(expresiones.nombre.test(e.target.value)){
            document.querySelector(".formulario-input-error").classList.remove("formulario-input-error-activo");
            if(e.key === "Enter" && nombreInput.value !== '' ){
                Modal5.classList.add('modal-show');
                Modal4.classList.remove('modal-show');
                let nombre = document.getElementById("nombre").value;
                localStorage.setItem("nombre",nombre)
                nombreInput.value = "";
                
            }
        }else{
            document.querySelector(".formulario-input-error").classList.add("formulario-input-error-activo");
        }        
    });


    empresaInput.addEventListener("keyup", (e) =>{
        // console.log(e.target.name)
        if(expresiones.empresa.test(e.target.value)){
            document.querySelector(".formulario-input-error-empresa").classList.remove("formulario-input-error-activo");
            if(e.key === "Enter" && empresaInput.value !== ''){
                Modal6.classList.add('modal-show');
                Modal5.classList.remove('modal-show');
                let empresa = document.getElementById("empresa").value;
                localStorage.setItem("empresa",empresa)
                empresaInput.value = "";
                // console.log("con esto cambiaremos de modal")
            }
        }else{
            document.querySelector(".formulario-input-error-empresa").classList.add("formulario-input-error-activo");
        }     
    });

    numeroInput.addEventListener("keyup", (e) =>{
        if(expresiones.telefono.test(e.target.value)){
            document.querySelector(".formulario-input-error-numero").classList.remove("formulario-input-error-activo");
            if(e.key === "Enter" && numeroInput.value !== ''){
                Modal7.classList.add('modal-show');
                Modal6.classList.remove('modal-show');
                let telefono = document.getElementById("telefono").value;
                localStorage.setItem("telefono",telefono);
                numeroInput.value = "";
                // console.log("con esto cambiaremos de modal")
            }
        }else{
            document.querySelector(".formulario-input-error-numero").classList.add("formulario-input-error-activo");
        }      
    });

    correoInput.addEventListener("keyup", (e) =>{
        if(expresiones.correo.test(e.target.value)){
            document.querySelector(".formulario-input-error-correo").classList.remove("formulario-input-error-activo");
            if(e.key === "Enter" && correoInput.value !== ''){
                Modal8.classList.add('modal-show');
                Modal7.classList.remove('modal-show');
                let correo = document.getElementById("correo").value;
                localStorage.setItem("correo",correo);
                correoInput.value = "";
                peticion();
                // console.log("con esto cambiaremos de modal")
            }
        }else{
            document.querySelector(".formulario-input-error-correo").classList.add("formulario-input-error-activo");
        }
     
    });

    BotonModalEvent.addEventListener("click", () => {
        ModalEvent.classList.add('modal-show');
        Modal8.classList.remove('modal-show');
    });

    // BotonFin.addEventListener("click", () => {
    //     ModalFinal.classList.add('modal-show');
    //     ModalEvent.classList.remove('modal-show');
    //     localStorage.clear();
    // })
    

}

// const BotonModal = document.querySelector("#modal-link");
const BotonModal2 = document.querySelector(".mod2"),
      BotonModalNo = document.querySelector(".modNo"),
      BotonModal3 = document.querySelector(".mod3"),
      nombreInput = document.querySelector('.nombre-input'),
      empresaInput = document.querySelector('.empresa-input'),
      numeroInput = document.querySelector('.num-input'),
      correoInput = document.querySelector('.correo-input'),
      BotonModalEvent= document.querySelector(".event-calendar");





OpenModals(BotonModal2,BotonModalNo,BotonModal3,nombreInput,empresaInput,numeroInput,correoInput,BotonModalEvent);









// modal 4 - repetible
// const idModal = "";
const modales = (Modal4,BotonModal4,Modal3,ModalNo,Modal2,cerrarModal4,leftMod4,leftMod5,leftMod6,leftMod7,leftMod8,leftModCalendar)=>{
    BotonModal4.forEach((click)=>{
        click.addEventListener("click",(e)=>{
            // console.log(e.srcElement.classList);
            // console.log(e);
            if(e.srcElement.classList[3] === "left3" ||  e.srcElement.classList.length === 0){
                // console.log("aqui estamos");
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

const Modal4 = document.querySelector('.modal-4'),
      BotonModal4 = document.querySelectorAll(".mod4"),
      cerrarModal4 = document.querySelector(".closed-4"),
      leftMod4 = document.querySelector(".left-mod-4"),
      leftMod5 = document.querySelector(".left-mod-5"),
      leftMod6 = document.querySelector(".left-mod-6"),
      leftMod7 = document.querySelector(".left-mod-7"),
      leftMod8 = document.querySelector(".left-mod-8"),
      leftModCalendar = document.querySelector(".left-mod-calendar");

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
const ClosedModal = (closedModal,cerrarModal2,cerrarModalNo,cerrarModal3,cerrarModal5,cerrarModal6,cerrarModal7,cerrarModal8,cerrarrEvent)=>{
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
}
const closedModal = document.querySelector(".closed-1"),
      cerrarModal2 = document.querySelector(".closed-2"),
      cerrarModalNo = document.querySelector(".closed-no"),
      cerrarModal3 = document.querySelector(".closed-3"),
      cerrarModal5 = document.querySelector(".closed-5"),
      cerrarModal6 = document.querySelector(".closed-6"),
      cerrarModal7 = document.querySelector(".closed-7"),
      cerrarModal8 = document.querySelector(".closed-8"),
      cerrarrEvent = document.querySelector(".closed-event");

ClosedModal(closedModal,cerrarModal2,cerrarModalNo,cerrarModal3,cerrarModal5,cerrarModal6,cerrarModal7,cerrarModal8,cerrarrEvent);










