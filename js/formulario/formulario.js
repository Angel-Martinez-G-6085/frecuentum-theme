let holiDays = localStorage.getItem("fechas");
holiDays = JSON.parse(holiDays);
let Horariosdefecto = localStorage.getItem("horarios");
Horariosdefecto = JSON.parse(Horariosdefecto);

function disableHoliday(date) {
   let string = $.datepicker.formatDate('yy-mm-dd', date);
         
   let filterDate = new Date(string);
   let day = filterDate.getDay();
   let isHoliday = ($.inArray(string, holiDays) != -1);
   
   return [day != 6 && day !=5 && !isHoliday]
}

function verificarHorarios(fechas) {}

//Selector de horas
const SelectordeHoras = document.querySelector(".select-fecha");
Horariosdefecto.forEach(element => {
   let option = document.createElement("option");
   option.text = element;
   option.value = element;
   SelectordeHoras.appendChild(option);
});

SelectordeHoras.addEventListener("focus", () => {
   verificarHorarios(Horariosdefecto);
});

//Ubicamos el calendario del usuario
$( "#date_cliente" ).datepicker({
   beforeShowDay: disableHoliday
});