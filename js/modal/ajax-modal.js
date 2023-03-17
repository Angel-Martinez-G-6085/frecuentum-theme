function peticion() {
    const Data = {
        name: 'pedro'
    }

    JSON.stringify(Data)

    fetch('wp-json/api/v1/product', {
        method: 'POST',
        body: Data
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}