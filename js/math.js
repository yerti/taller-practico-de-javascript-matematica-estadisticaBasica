// CUADRADO
const inputLadoCuadrado = document.querySelector('#lado-cuadrado');
const botonAreaCuadrado = document.querySelector('#area-cuadrado');
const botonPerimetroCuadrado = document.querySelector('#perimetro-cuadrado');
const pResultadoCuadrado = document.querySelector('#resultado-cuadrado');
const divResultadoCuadradoStilos = document.querySelector('.resultado-cuadrado')
// TRIANGULO
const inputLado1Triangulo = document.querySelector('#lado1-triangulo');
const inputLado2Triangulo = document.querySelector('#lado2-triangulo');
const inputBaseTriangulo = document.querySelector('#base-triangulo');
const inputAlturaTriangulo = document.querySelector('#altura-triangulo');
const botonAreaTriangulo = document.querySelector('#area-triangulo');
const botonPerimetroTriangulo = document.querySelector('#perimetro-triangulo');
const pResultadoTriangulo = document.querySelector('#resultado-triangulo');
const divResultadoTrianguloEstilos = document.querySelector('.resultado-triangulof');
// CIRCULO
const inputRadioCirculo = document.querySelector('#radio-circulo');
const inputDiametroCirculo = document.querySelector('#diametro-circulo');
const botonAreaCirculo = document.querySelector('#area-circulo');
const botonCircunferenciaCirculo = document.querySelector('#circunferencia-circulo');
const pResultadoCirculo = document.querySelector('#resultado-circulo');
const divResultadoCirculoF = document.querySelector('.resultado-circulo');
// TRIANGULO ISOSCELES
const inputLadosIguales = document.querySelector('#lados-iguales');
const inputBaseTianguloI = document.querySelector('#base-trianguloI');
const botonAlturaTrianguloI = document.querySelector('#altura-de-trianguloI');
const pAlturaIsosceles = document.querySelector('#altura-isosceles');
const divResultadoIsosceles = document.querySelector('.resultado-isosceles');
// TRIANGULO ESCALENO
const inputLado1Escaleno = document.querySelector('#lado1-traiangulo-escaleno');
const inputLado2Escaleno = document.querySelector('#lado2-triangulo-escaleno');
const inputBaseEscaleno = document.querySelector('#base-triangulo-escaleno');
const botonEscaleno = document.querySelector('#altura-triangulo-escaleno');
const pResultadoEscaleno = document.querySelector('#resultado-escaleno');
const divResultadoEscaleno = document.querySelector('.resultado-escaleno');

// CUADRADO
botonAreaCuadrado.addEventListener('click', areaCuadrado);
botonPerimetroCuadrado.addEventListener('click', perimetroCuadrado);
// TRIANGULO
botonAreaTriangulo.addEventListener('click', areaTriangulo);
botonPerimetroTriangulo.addEventListener('click', perimetroTriangulo);
// CIRCULO
botonAreaCirculo.addEventListener('click', areaCirculo);
botonCircunferenciaCirculo.addEventListener('click', circunferenciaCirculo);
// TRIANGULO ISOSCELES
botonAlturaTrianguloI.addEventListener('click', alturaTrianguloIsosceles);
// TRIANGULO ESCALENO
botonEscaleno.addEventListener('click', alturaTrianguloEscaleno);


// CUADRADO
function areaCuadrado() {
    const ladoCuadrado = Number(inputLadoCuadrado.value);
    let area = ladoCuadrado * ladoCuadrado;
    pResultadoCuadrado.innerHTML = 'El área del cuadrado es igual a: ' + area;

    divResultadoCuadradoStilos.classList.toggle('ocultar')
}
function perimetroCuadrado() {
    const ladoCuadrado = Number(inputLadoCuadrado.value);
    let perimetro = ladoCuadrado * 4;

    pResultadoCuadrado.innerHTML = 'El perimetro del cuadrado es igual a: ' + perimetro;
    divResultadoCuadradoStilos.classList.toggle('ocultar')
}

// TRIANGULO
function areaTriangulo() {
    const baseTriangulo = Number(inputBaseTriangulo.value);
    const alturaTriangulo = Number(inputAlturaTriangulo.value);

    let area = (baseTriangulo * alturaTriangulo)/2;
    pResultadoTriangulo.innerHTML = 'El rea del triangulo es igual a: ' + area;
    divResultadoTrianguloEstilos.classList.toggle('ocultar')
}
function perimetroTriangulo() {
    const lado1T = Number(inputLado1Triangulo.value);
    const lado2T = Number(inputLado2Triangulo.value);
    const baseT = Number(inputBaseTriangulo.value);

    let perimetro = lado1T + lado2T + baseT;
    pResultadoTriangulo.innerHTML = 'El perimetro del triangulo es igual a: ' + perimetro;
    divResultadoTrianguloEstilos.classList.toggle('ocultar')
}

// CIRCULO
function areaCirculo() {
    const radio = Number(inputRadioCirculo.value);

    let area = Math.PI * (radio * radio);

    pResultadoCirculo.innerHTML = 'El area del circulo es igual a: ' + area;
    divResultadoCirculoF.classList.toggle('ocultar');
}
function circunferenciaCirculo() {
    const diametroCirculo = Number(inputDiametroCirculo.value);

    let circunferencia = diametroCirculo * Math.PI;

    pResultadoCirculo.innerHTML = 'La circunferencia del circulo es igual a: ' + circunferencia;
    divResultadoCirculoF.classList.toggle('ocultar');
}

// TRIANGULO ISOSCELES
function alturaTrianguloIsosceles() {
    let lados = Number(inputLadosIguales.value);
    let base = Number(inputBaseTianguloI.value);

    let alturaIsosceles = Math.sqrt((lados * lados) - ((base ** 2)/ 4));
    divResultadoIsosceles.classList.toggle('ocultar');

    pAlturaIsosceles.innerHTML = 'La altura del triangulo isosceles es igual a: ' + alturaIsosceles;

    if(lados == base) {
        pAlturaIsosceles.innerHTML = 'NO es un Triangulo isósceles'
        return;
    }

}

// TRIANGULO ESCALENO
function alturaTrianguloEscaleno() {
    let lado1E = Number(inputLado1Escaleno.value);
    let lado2E = Number(inputLado2Escaleno.value);
    let baseE = Number(inputBaseEscaleno.value);

    divResultadoEscaleno.classList.toggle('ocultar');
    const semiPerimetroE = lado1E + lado2E + baseE/2;

    const alturaEscaleno = 2/baseE * Math.sqrt(semiPerimetroE * (semiPerimetroE - lado1E) * (semiPerimetroE - lado2E) * (semiPerimetroE - baseE));


    pResultadoEscaleno.innerHTML = 'La altura del triangulo escaleno es igual a: ' + alturaEscaleno;
}

