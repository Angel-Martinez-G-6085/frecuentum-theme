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
   verificarFechas();
   // console.log(SelectordeHoras)
});

// verificar si existen fechas, eliminar
function verificarFechas(){
   let fecha = localStorage.getItem("fecha");
   let hora = localStorage.getItem("hora");
   if(fecha !== ''){
    console.log(e);
   }else{
      let ver = holiDays.filter(e => e !== fecha); 
      localStorage.setItem("fechas",ver)
   }

}

//Ubicamos el calendario del usuario
$( "#date_cliente" ).datepicker({
   beforeShowDay: disableHoliday
});