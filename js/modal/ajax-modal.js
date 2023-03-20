function peticion() {
    const Rawdata = {
        nombre: 'Angel',
        empresa : 'Código Geek',
        telefono: '5610213865',
        correo: 'ben6085@gmail.com'
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