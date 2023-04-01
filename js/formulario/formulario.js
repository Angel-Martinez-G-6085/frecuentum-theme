const SelectordeHoras = document.querySelector(".select-fecha");
const SelectorFecha = document.querySelector("#date_cliente");
let citaAgendada = localStorage.getItem("citasAgendadas");
citaAgendada = JSON.parse(citaAgendada);
let holiDays = localStorage.getItem("fechas");
holiDays = JSON.parse(holiDays);
let Horariosdefecto = localStorage.getItem("horarios");
Horariosdefecto = JSON.parse(Horariosdefecto);
let HorariosEspecificos = localStorage.getItem("fechaHoraESpecificos");
HorariosEspecificos = JSON.parse(HorariosEspecificos);

function disableHoliday(date) {
   let string = jQuery.datepicker.formatDate('yy-mm-dd', date);
   let filterDate = new Date(string);
   let day = filterDate.getDay();
   let isHoliday = (jQuery.inArray(string, holiDays) != -1);
   return [day != 6 && day !=5 && !isHoliday]
}

//Selector de horas
function cargarHorarios(horarios) {
   horarios.forEach(element => {
      let option = document.createElement("option");
      option.classList.add("opcionesCalendario");
      option.text = element;
      option.value = element;
      SelectordeHoras.appendChild(option);
   });
}

function LaFechaesEspecifica() {
   let objetoFecha = {
      fecha: SelectorFecha.value
   }
   if (HorariosEspecificos.some(item => JSON.stringify(item.fecha) === JSON.stringify(objetoFecha.fecha))) {
      return true;
   }
}

function LaFechaTieneCita() {
   let objetoFecha = {
      fecha: SelectorFecha.value
   }
   if (citaAgendada.some(item => JSON.stringify(item.fecha) === JSON.stringify(objetoFecha.fecha))) {
      return true;
   }
}

SelectordeHoras.addEventListener("focus", () => {
   let objetoBusca = {
      fecha: SelectorFecha.value
   }

   if(LaFechaTieneCita()) {
      citaAgendada.forEach((cita) => {
         if(cita.fecha == SelectorFecha.value) {
            let opciones = document.querySelectorAll(".opcionesCalendario");
            opciones.forEach(opcion => {
               opcion.remove();
            });
            cargarHorarios(cita.horarios);
         }
      })
   }

   else if(HorariosEspecificos.length == 0) {
      let opciones = document.querySelectorAll(".opcionesCalendario");
         opciones.forEach(opcion => {
            opcion.remove();
         });
      cargarHorarios(Horariosdefecto);
   }
   
   else if(!HorariosEspecificos.length == 0 && LaFechaesEspecifica()) {
      HorariosEspecificos.forEach((element) => {
            let opciones = document.querySelectorAll(".opcionesCalendario");
            opciones.forEach(opcion => {
               opcion.remove();
            });
            cargarHorarios(element.horarios);
      })
   }
   else {
      let opciones = document.querySelectorAll(".opcionesCalendario");
      opciones.forEach(opcion => {
         opcion.remove();
      });
      cargarHorarios(Horariosdefecto);
   }
});

SelectorFecha.addEventListener("focus", () => {
   SelectordeHoras.value = "";
})

//Ubicamos el calendario del usuario
jQuery( "#date_cliente" ).datepicker({
   minDate: 0,
   dateFormat: "yy-mm-dd",
   monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
   dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
   beforeShowDay: disableHoliday
});