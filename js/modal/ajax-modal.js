function insertData(dataString) {
    console.log("haciendo peticion")
    jQuery.ajax({
        url: 'functions',
        type: "POST",
        data: dataString,
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });
}