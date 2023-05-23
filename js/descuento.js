const precioActualInput = document.querySelector('#precio-actual');
const DescuentoInput = document.querySelector('#descuento');
const calcularDescuentoBoton = document.querySelector('#calcular-descuento');
const pResultado = document.querySelector('#resultado');
const botonCupon10 = document.querySelector('#cupon10');
const botonCupon15 = document.querySelector('#cupon15');
const botonCupon30 = document.querySelector('#cupon30');

calcularDescuentoBoton.addEventListener('click', calcularPrecioConDescuento);
botonCupon10.addEventListener('click', calcularElCupon10);
botonCupon15.addEventListener('click', calcularElCupon15);
botonCupon30.addEventListener('click', calcularElCupon30);

function calcularPrecioConDescuento() {
    let precioNormal = Number(precioActualInput.value);
    let descuento = Number(DescuentoInput.value);

    if(!precioNormal || !descuento) {
        pResultado.innerHTML = '!Por favor llenar el formulario¡';
        return;
    }

    if ( descuento > 100) {
        pResultado.innerHTML = 'El descuento no debe ser mayor a 100';
        return;
    }

    let calcularPrecio = (precioNormal * (100 - descuento)) / 100;

    pResultado.innerHTML = 'El nuevo precio con descuento es:' + calcularPrecio;

}

function calcularElCupon10() {
    let precioNormal = Number(precioActualInput.value);

    let calcularPrecio = (precioNormal * (100 - 10)) / 100;

    pResultado.innerHTML = 'El nuevo precio con el 10% de descuento es: $' + calcularPrecio;
}

function calcularElCupon15() {
    let precioNormal = Number(precioActualInput.value);

    let calcularPrecio = (precioNormal * (100 - 15)) / 100;

    pResultado.innerHTML = 'El nuevo precio con el 15% de descuento es: $' + calcularPrecio
}

function calcularElCupon30() {
    let precioNormal = Number(precioActualInput.value);

    let calcularPrecio = (precioNormal * (100 - 30)) / 100;

    pResultado.innerHTML= 'El nuevo precio con el 30% de descuento es: $' + calcularPrecio;
}