// Insertar en Google calendar

let enviarEventCalendar = document.querySelector(".eventCalendar");
let mostrarSelect = document.getElementById("mostrar-datos");

let horaSelect = "";
mostrarSelect.addEventListener("change", () => {
  horaSelect = mostrarSelect.value;
  document.querySelector(".input-error-fech").classList.remove("formulario-input-error-activo");
});

let obtenerFecha = "";
let token_usuario = "";
let new_access_token = "";

function authenticationKey() {
  let title = localStorage.getItem("nombre");
  let empresa = localStorage.getItem("empresa");
  let telefono = localStorage.getItem("telefono");
  let description = title +"\n"+ empresa + "\n" + telefono;
  let correo = localStorage.getItem("correo");
  let fecha = localStorage.getItem("fecha");

  let event = {
    summary: title,
    description: description,
    start: {
      //   dateTime: "2023-03-25T12:00:00-06:00",
      dateTime: fecha + "T" + horaSelect + ":00-06:00",
      timeZone: "America/Mexico_City",
    },
    end: {
      //   dateTime: "2023-03-25T12:40:00-06:00",
      dateTime: fecha + "T" + horaSelect + ":00-06:00",
      timeZone: "America/Mexico_City",
    },
    attendees: [{ email: correo }],
  };

  token_usuario = localStorage.getItem("tokenInicio");
  new_access_token = localStorage.getItem("newTokenAccess");

  if (new_access_token === null || new_access_token === '') {
    fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${token_usuario}`,{
        method: "POST",
        body: JSON.stringify(event),
      }
    )
      .then((respuesta) => respuesta.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } else {
    fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${new_access_token}`,{
        method: "POST",
        body: JSON.stringify(event),
      }
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
}

 function limpiar(){
     document.getElementById("date_cliente").value = "";
     document.getElementById("mostrar-datos").value = "";
 }

//  ---Metodo para comprobar si aun hay fechas
 let arrayFechasNuevas = [];
 function verificarFechaHorarios(){  
    let nuevaFecha = localStorage.getItem("fecha");
    let nuevaHora = localStorage.getItem("hora");
    arrayFechasNuevas.push(nuevaFecha);
    localStorage.setItem("nuevafecha",JSON.stringify(arrayFechasNuevas));

    let idx = arrayFechasNuevas.includes(nuevaFecha);
    console.log(idx);
    
    let nuevoArrayHoras = JSON.parse(localStorage.getItem("horarios"));
    let nuevoArrayFechas = JSON.parse(localStorage.getItem("fechas"));


    if(idx === true && nuevoArrayHoras.length <= 1){
        // let nuevoArrayHoras = JSON.parse(localStorage.getItem("horarios"));
        nuevoArrayFechas.push(nuevaFecha);
        localStorage.setItem("fechas",JSON.stringify(nuevoArrayFechas));
        let eliminar = nuevoArrayHoras.filter((item) => item !== nuevaHora);
        localStorage.setItem("horarios",JSON.stringify(eliminar));
    }else{
        let eliminar = nuevoArrayHoras.filter((item) => item !== nuevaHora);
        localStorage.setItem("horarios",JSON.stringify(eliminar));
    }
 }

function elminarUltimoModal(){
    setTimeout(()=>{
      ModalFinal.classList.remove("modal-show");
    },5000)
}

enviarEventCalendar.addEventListener("click", () => {
    let fecha = document.querySelector(".value-date").value;
    localStorage.setItem("fecha",fecha);
    let fecha_storage = localStorage.getItem("fecha")
   if(horaSelect === '' || fecha_storage === '' ){
        document.querySelector(".input-error-fech").classList.add("formulario-input-error-activo");
   }else{
       localStorage.setItem("hora", horaSelect);
       authenticationKey();
       verificarFechaHorarios()
       limpiar();
       ModalFinal.classList.add('modal-show');
       ModalEvent.classList.remove('modal-show');
       elminarUltimoModal();
   }
});
