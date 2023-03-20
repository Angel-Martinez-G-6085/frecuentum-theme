// function insertData(dataString) {
//     console.log("haciendo peticion")
//     jQuery.ajax({
//         url: 'functions',
//         type: "POST",
//         data: dataString,
//         dataType: "json",
//         success: function (response) {
//             console.log(response)
//         }
//     });
// }
// let datos = {
//     nombre: nombre_usuario, 
//     empresa: empresa_usuario,
//     telefono: numero_usuario,
//     correo:  correo_usuario
// };

function peticion() {
    const Rawdata = {
        nombre: localStorage.getItem("nombre"),
        empresa : localStorage.getItem("empresa"),
        telefono: localStorage.getItem("telefono"),
        correo: localStorage.getItem("correo")
    }

    let data = JSON.stringify(Rawdata)

    fetch('wp-json/api/v1/product', {
        headers : {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: data
    })
    .then((data) => console.log(data))
}


// let url = urlTheme.templateUrl;

// function enviarDatos(){

//     let nombre_usuario = localStorage.getItem("nombre");
//     let empresa_usuario = localStorage.getItem("empresa");
//     let telefono_usuario = localStorage.getItem("telefono");
//     let correo_usuario = localStorage.getItem("correo");

//     let formData = new FormData();

//     formData.append("nombre",nombre_usuario);
//     formData.append("empresa",empresa_usuario);
//     formData.append("telefono",telefono_usuario);
//     formData.append("correo",correo_usuario);

//     fetch(`${url}/includes/peticion.php`,{
//         method:"POST",
//         body: formData
//     })
//     .then((response) => response.text())
//     .then((response) => {
//         console.log(response)
//     }) 
//     .catch(err => console.error(err));     
// }