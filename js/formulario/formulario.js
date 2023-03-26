let holiDays = localStorage.getItem("fechas");
holiDays = JSON.parse(holiDays);

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
