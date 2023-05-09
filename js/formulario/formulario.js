const SelectordeHoras = document.querySelector(".select-fecha");
const SelectorFecha = document.querySelector("#date_cliente");

let Horariosdefecto = [];
let HorariosEspecificos = [];

fetch('http://localhost:9090/www/frequencylex/wp-content/plugins/admin_pluguin/js/local.json', {
   method: 'POST',
})
   .then((response) => response.json())
   .then((response) =>{
   let horarios = response.horarios;
   let listaFechasEspecificas = response.listaFechasEspecificas;
 
   Horariosdefecto.push(horarios);
   HorariosEspecificos.push(listaFechasEspecificas);
});


let holiDays = [];

fetch('http://localhost:9090/www/frequencylex/wp-content/plugins/admin_pluguin/js/fechas.json', {
   method: 'POST',
})
   .then((response) => response.json())
   .then((response) =>{
   let fechas = response.fechas;
 
   holiDays.push(fechas);
}); 


let citaAgendada = [];

fetch('http://localhost:9090/www/frequencylex/wp-content/plugins/admin_pluguin/js/citaAgenda.json', {
   method: 'POST',
})
   .then((response) => response.json())
   .then((response) =>{
   let citasAgendadas = response.citasAgendadas;
 
   citaAgendada.push(citasAgendadas);
}); 





document.onreadystatechange = () => {
   if (document.readyState === 'complete') {

   setTimeout(()=>{
      citaAgendada;
      holiDays;
      Horariosdefecto;
      HorariosEspecificos;
   },500)

   console.log(HorariosEspecificos);
   console.log(HorariosEspecificos[0]);
   console.log(HorariosEspecificos);
    

   function disableHoliday(date) {
    let string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    let filterDate = new Date(string);
    let day = filterDate.getDay();
    let isHoliday = (jQuery.inArray(string, holiDays[0]) != -1);
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
    if (HorariosEspecificos[0].some(item => JSON.stringify(item.fecha) === JSON.stringify(objetoFecha.fecha))) {
       return true;
    }
 }

 function LaFechaTieneCita() {
    let objetoFecha = {
       fecha: SelectorFecha.value
    }
    if (citaAgendada[0].some(item => JSON.stringify(item.fecha) === JSON.stringify(objetoFecha.fecha))) {
       return true;
    }
 }

 SelectordeHoras.addEventListener("focus", () => {
    let objetoBusca = {
       fecha: SelectorFecha.value
    }

    if(LaFechaTieneCita()) {
       citaAgendada[0].forEach((cita) => {
          if(cita.fecha == SelectorFecha.value) {
             let opciones = document.querySelectorAll(".opcionesCalendario");
             opciones.forEach(opcion => {
                opcion.remove();
             });
             cargarHorarios(cita.horarios);
          }
       })
    }

    else if(HorariosEspecificos[0].length == 0) {
       let opciones = document.querySelectorAll(".opcionesCalendario");
          opciones.forEach(opcion => {
             opcion.remove();
          });
       cargarHorarios(Horariosdefecto[0]);
    }
   
    else if(!HorariosEspecificos[0].length == 0 && LaFechaesEspecifica()) {
       HorariosEspecificos[0].forEach((element) => {
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
       cargarHorarios(Horariosdefecto[0]);
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

   }
};


