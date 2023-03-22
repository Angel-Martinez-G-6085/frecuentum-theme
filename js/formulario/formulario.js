let holiDays = [""]; //suppose 17th june is holiday, we can also add others holidays

function disableHoliday(date) {
    let string = $.datepicker.formatDate('yy-mm-dd', date);
          
    let filterDate = new Date(string);
    let day = filterDate.getDay();
    let isHoliday = ($.inArray(string, holiDays) != -1);
    return [day != 0 && day !=6 && !isHoliday];
 }

jQuery( "#date_cliente" ).datepicker({
    minDate: 0,
    dateFormat: "yy-mm-dd",
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
    beforeShowDay: disableHoliday,
});