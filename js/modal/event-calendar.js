// Insertar en Google calendar
let enviarEventCalendar = document.querySelector(".eventCalendar");
let mostrarSelect = document.getElementById("mostrar-datos");
let fecha = document.getElementById("date_cliente");
localStorage.setItem("citasAgendadas", JSON.stringify(citaAgendada));

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
      dateTime: fecha + "T" + mostrarSelect.value + ":00-06:00",
      timeZone: "America/Mexico_City",
    },
    end: {
      //   dateTime: "2023-03-25T12:40:00-06:00",
      dateTime: fecha + "T" + mostrarSelect.value + ":00-06:00",
      timeZone: "America/Mexico_City",
    },
    attendees: [{ email: correo }],
  };
  console.log(event);

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
  fecha.value = "";
  mostrarSelect.value = "";
 }

 function actulizarHorarioCita(fechaEscogida, nuevoHorarioEscogido) {
  citaAgendada.forEach((cita, index) => {
    if(cita.fecha == fechaEscogida) {
      let posicionHorario = cita.horarios.indexOf(nuevoHorarioEscogido);
      cita.horarios.splice(posicionHorario, 1);
      let CitasAgendadasStorage = localStorage.getItem("citasAgendadas");
      CitasAgendadasStorage = JSON.parse(CitasAgendadasStorage);
      CitasAgendadasStorage[index] = {
        fecha: cita.fecha,
        horarios: cita.horarios
      }

      if(cita.horarios.length == 0) {
        let fechasNoUsadas = localStorage.getItem("fechas");
        fechasNoUsadas = JSON.parse(fechasNoUsadas);
        let citaSinHorarios = cita.fecha;
        fechasNoUsadas.push(citaSinHorarios);
        localStorage.setItem("fechas", JSON.stringify(fechasNoUsadas));
      }
      localStorage.setItem("citasAgendadas", JSON.stringify(CitasAgendadasStorage));
    }
  })
 }

function AgregarObjetoCitasAgendadas(fechaConsultar) {
  let citas = localStorage.getItem("citasAgendadas");
  citas = JSON.parse(citas);
  
  if (!citas.some(item => JSON.stringify(item.fecha) === JSON.stringify(fechaConsultar))) {
    let horarios = document.querySelectorAll(".opcionesCalendario");
    let horarioEscogido = SelectordeHoras.value;
    let indexHorarioEscogido = "";
    
    let objetoCita = {
      fecha: fecha.value,
      horarios: []
    }

    horarios.forEach((element) => {
      objetoCita.horarios.push(element.value);
    });
    indexHorarioEscogido = objetoCita.horarios.indexOf(horarioEscogido);
    objetoCita.horarios.splice(indexHorarioEscogido, 1);
    citaAgendada.push(objetoCita);
    localStorage.setItem("citasAgendadas", JSON.stringify(citaAgendada));
  } else {
    actulizarHorarioCita(fecha.value, mostrarSelect.value);
  }
}

function eliminarUltimoModal() {
  setTimeout(() => {
    ModalFinal.classList.remove("modal-show");
  },5000)
}

enviarEventCalendar.addEventListener("click", () => {
    localStorage.setItem("fecha",fecha.value);

  if(mostrarSelect.value === '' || fecha.value === '' ){
    document.querySelector(".input-error-fech").classList.add("formulario-input-error-activo");
  } else {
    AgregarObjetoCitasAgendadas(fecha.value, mostrarSelect.value);
    authenticationKey();
    limpiar();
    ModalFinal.classList.add('modal-show');
    ModalEvent.classList.remove('modal-show');
    eliminarUltimoModal();
  }
});
