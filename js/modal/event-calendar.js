// Insertar en Google calendar
const Client_Id = "67432885076-8teua21398sq7elvdn0cmkgr4a6e018l.apps.googleusercontent.com";
const Client_Secret = "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";

let enviarEventCalendar = document.querySelector(".eventCalendar");
let mostrarSelect = document.getElementById("mostrar-datos");
let fecha = document.getElementById("date_cliente");

let lanzarApiKeyJson = document.querySelector(".apikey");

// Cargamos el json donde esta el refresh token
let nuevo_refresh_token = [];
function refresToken() {
  fetch(
    "http://localhost:9090/www/frequencylex/wp-content/plugins/admin_pluguin/js/google.json",
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((response) => {
      let refresh_token = response.refresh_token;
      nuevo_refresh_token.push(refresh_token);
    });
}

// Hacemos una peticion a la API de Google Calendar
let newTokenAccess = [];
function new_refres_token_access() {
  setTimeout(() => {
    nuevo_refresh_token[0];
  }, 500);
  let refresh_token = nuevo_refresh_token[0];
  console.log(refresh_token);
  fetch(
    `https://oauth2.googleapis.com/token?client_secret=${Client_Secret}&grant_type=refresh_token&refresh_token=${refresh_token}&client_id=${Client_Id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  )
    .then((respuesta) => respuesta.json())
    .then((data) => {
      let new_access_token = data.access_token;
      newTokenAccess.push(new_access_token);

      insertarNuevoToken();
    })
    .catch((error) => console.log(error));
}

// Insertamos el nuevo token al archivo Key.json
function insertarNuevoToken() {
  setTimeout(() => {
    newTokenAccess;
  }, 500);
  console.log(newTokenAccess);

  let objeto = { newTokenAccess: newTokenAccess };

  let obj = JSON.stringify(objeto);
  fetch("http://localhost:9090/www/frequencylex/wp-json/api/v1/key", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: obj,
  })
    .then((data) => data.text())
    .then((response) => {
      console.log();
    });
}

// Al dar click en el modal hacemos las diferentes peticiones
lanzarApiKeyJson.addEventListener("click",()=>{
      refresToken();
      setTimeout(()=>{
        new_refres_token_access();
      },1000)
})

// Traemos el select de horarios
let horaSelect = "";
mostrarSelect.addEventListener("change", () => {
  horaSelect = mostrarSelect.value;
  document
    .querySelector(".input-error-fech")
    .classList.remove("formulario-input-error-activo");
});


// Hacemos una petición para traer el api key
let new_access_token = [];
function traerNuevoToken() {
  fetch(
    "http://localhost:9090/www/frequencylex/wp-content/plugins/admin_pluguin/js/key.json",
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((response) => {
      let new_token = response.newTokenAccess;
      new_access_token.push(new_token);
    });
}

//Enviar el evento a calendar
function authenticationKey() {
  setTimeout(() => {
    new_access_token;
  }, 500);
  let new_token = new_access_token[0].slice(-1);

  let title = localStorage.getItem("nombre");
  let empresa = localStorage.getItem("empresa");
  let telefono = localStorage.getItem("telefono");
  let description = title + "\n" + empresa + "\n" + telefono;
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

  if (new_token) {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${new_token}`,
      {
        method: "POST",
        body: JSON.stringify(event),
      }
    )
      .then((respuesta) => respuesta.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}

//vaciamos los inputs
function limpiar() {
  fecha.value = "";
  mostrarSelect.value = "";
}

function actulizarHorarioCita(fechaEscogida, nuevoHorarioEscogido) {
  // console.log(citaAgendada[0])
  let citaAgendaNew = citaAgendada[0];
  citaAgendaNew.forEach((cita, index) => {
    if (cita.fecha == fechaEscogida) {
      let posicionHorario = cita.horarios.indexOf(nuevoHorarioEscogido);
      cita.horarios.splice(posicionHorario, 1);
      let CitasAgendadasStorage = localStorage.getItem("citasAgendadas");
      CitasAgendadasStorage = JSON.parse(CitasAgendadasStorage);
      //  let CitasAgendadasStorage = citaAgendada;
      CitasAgendadasStorage[index] = {
        fecha: cita.fecha,
        horarios: cita.horarios,
      };

      if (cita.horarios.length == 0) {
        let fechasNoUsadas = localStorage.getItem("fechas");
        fechasNoUsadas = JSON.parse(fechasNoUsadas);
        let citaSinHorarios = cita.fecha;
        // console.log(citaSinHorarios)
        fechasNoUsadas.push(citaSinHorarios);
        localStorage.setItem("fechas", JSON.stringify(fechasNoUsadas));

        let fechasNoUsadasLocal = localStorage.getItem("fechas");
        fechasNoUsadasLocal = JSON.parse(fechasNoUsadasLocal);
        insertarFechasActualizadas(fechasNoUsadasLocal);
      }
      localStorage.setItem(
        "citasAgendadas",
        JSON.stringify(CitasAgendadasStorage)
      );
     
      // let CitasAgendadasStarageLocal = localStorage.getItem("citasAgendadas");
      // CitasAgendadasStarageLocal = JSON.parse(CitasAgendadasStarageLocal);

      insertarcitasAgendadasActualizadas(CitasAgendadasStorage);
    }
  });
}

function AgregarObjetoCitasAgendadas(fechaConsultar) {
  localStorage.setItem("fechas", JSON.stringify(holiDays[0]));
  localStorage.setItem("citasAgendadas", JSON.stringify(citaAgendada[0]));

  let citas = localStorage.getItem("citasAgendadas");
  console.log(citas);
  citas = JSON.parse(citas);
  console.log(citas);
  if (
    !citas.some(
      (item) => JSON.stringify(item.fecha) === JSON.stringify(fechaConsultar)
    )
  ) {
    let horarios = document.querySelectorAll(".opcionesCalendario");
    let horarioEscogido = SelectordeHoras.value;
    let indexHorarioEscogido = "";

    let objetoCita = {
      fecha: fecha.value,
      horarios: [],
    };

    // let citasAgendadasLocal = [];
    horarios.forEach((element) => {
      objetoCita.horarios.push(element.value);
    });

    indexHorarioEscogido = objetoCita.horarios.indexOf(horarioEscogido);
    objetoCita.horarios.splice(indexHorarioEscogido, 1);
    citaAgendada[0].push(objetoCita);

    localStorage.setItem("citasAgendadas", JSON.stringify(citaAgendada[0]));
    let traeCitasAgendasLocal = localStorage.getItem("citasAgendadas");
    traeCitasAgendasLocal = JSON.parse(traeCitasAgendasLocal);
    insertarcitasAgendadasActualizadas(traeCitasAgendasLocal);
  } else {
    actulizarHorarioCita(fecha.value, mostrarSelect.value);
  }
}

function insertarFechasActualizadas(fechasNoUsadas) {
  // console.log(fechasNoUsadas);
  let objeto = { fechas: fechasNoUsadas };

  let obj = JSON.stringify(objeto);
  fetch("http://localhost:9090/www/frequencylex/wp-json/api/v1/fechas", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: obj,
  })
    .then((data) => data.text())
    .then((response) => console.log(response));
}

function insertarcitasAgendadasActualizadas(citasNuevas) {
  let objeto = { citasAgendadas: citasNuevas };

  let obj = JSON.stringify(objeto);

  fetch("http://localhost:9090/www/frequencylex/wp-json/api/v1/citaAgenda", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: obj,
  })
    .then((data) => data.text())
    .then((response) => console.log(response));
}

function eliminarUltimoModal() {
  setTimeout(() => {
    ModalFinal.classList.remove("modal-show");
  }, 5000);
}

enviarEventCalendar.addEventListener("click", () => {
  localStorage.setItem("fecha", fecha.value);

  if (mostrarSelect.value === "" || fecha.value === "") {
    document
      .querySelector(".input-error-fech")
      .classList.add("formulario-input-error-activo");
  } else {
    traerNuevoToken();
    AgregarObjetoCitasAgendadas(fecha.value, mostrarSelect.value);
    setTimeout(() => {
      authenticationKey();
      limpiar();
      ModalFinal.classList.add('modal-show');
      ModalEvent.classList.remove('modal-show');
      eliminarUltimoModal();
    }, 1000);
  }
});
