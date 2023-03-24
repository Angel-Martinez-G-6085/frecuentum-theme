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

  console.log(fecha);
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

enviarEventCalendar.addEventListener("click", () => {
    let fecha = document.getElementById("date_cliente").value;
    localStorage.setItem("fecha",fecha);
    let fecha_storage = localStorage.getItem("fecha")
   if(horaSelect === '' || fecha_storage === '' ){
        document.querySelector(".input-error-fech").classList.add("formulario-input-error-activo");
   }else{
       authenticationKey();
       limpiar();
    //    ModalFinal.classList.add('modal-show');
    //    ModalEvent.classList.remove('modal-show');

   }

});
