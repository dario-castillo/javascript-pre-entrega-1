precio = 0

function mostrarPrecio(codigoDibujo) {
    switch(codigoDibujo) {
        case 1:
            alert("El dibujo a lápiz cuesta $3.000 ARS")
            precio = 3000
            break
        case 2:
            alert("La ilustración en acrílico cuesta $8.000 ARS")
            precio = 8000
            break
        case 3:
            alert("La ilustración digital cuesta $15.000 ARS")
            precio = 15000
            break
        default: 
            alert("Por favor, ingresa un número valido")
            break
    } 
}

function consultarPrecio() {
    let codigoDibujo = prompt("Ingrese el número del tipo de dibujo que quiere consultar")
    if (codigoDibujo) {
        mostrarPrecio(parseInt(codigoDibujo))
        mostrarFinanciacion()
        let respuesta = confirm("¿Quieres consultar el precio de otro dibujo?")
        if (respuesta === true) {
            consultarPrecio()
        }
    else {
        console.log("¡😃 Gracias por tu consulta! Puedes seguirme en Instagram: @_dario_castillo para ver mi trabajo")
    }
    }
}

function mostrarFinanciacion() {
    console.log("Financiación en:")
    for (let i = 1; i <= 3; i++) {
        let valorCuota = precio / i
        console.log(i, "cuota(s) sin interés de:", valorCuota.toFixed(2))
    }
}