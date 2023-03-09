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

let nombre_usuario = localStorage.getItem("nombre");
let empresa_usuario = localStorage.getItem("empresa");
let numero_usuario = localStorage.getItem("contacto");
let correo_usuario = localStorage.getItem("correo");

console.log(nombre_usuario);

let datos = {
     nombre: nombre_usuario, 
     empresa: empresa_usuario,
     telefono: numero_usuario,
     correo:  correo_usuario
};

let enviar = document.querySelector('.enviar');

enviar.addEventListener('click',()=>{
    enviarDatos();
})

function enviarDatos(){
    console.log(datos)
    fetch("peticion.php",{
        method:"POST",
        body: datos
    })
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
    }) 
    .catch(err => console.error(err));

     
 }