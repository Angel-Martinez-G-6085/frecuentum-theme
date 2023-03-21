
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
