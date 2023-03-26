let holiDays = localStorage.getItem("fechas");
holiDays = JSON.parse(holiDays);
let Horariosdefecto = localStorage.getItem("horarios");
Horariosdefecto = JSON.parse(Horariosdefecto);

function disableHoliday(date) {
    var string = $.datepicker.formatDate('yy-mm-dd', date);
          
    var filterDate = new Date(string);
    var day = filterDate.getDay();
    var isHoliday = ($.inArray(string, holiDays) != -1);
    
    return [day != 0 && day !=6 && !isHoliday]
 }
        
 $( "#date_cliente" ).datepicker({
    beforeShowDay: disableHoliday
 });

//Selector de horas
const SelectordeHoras = document.querySelector(".select-fecha");
Horariosdefecto.forEach(element => {
   let option = document.createElement("option");
   option.text = element;
   option.value = element;
   SelectordeHoras.appendChild(option);
});