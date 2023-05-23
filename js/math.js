// CUADRADO
const ladoCuadrado = 5;

function areaDelCuadrado() {
    return ladoCuadrado * ladoCuadrado;
}

function perimetroDelCuadrado() {
    return ladoCuadrado * 4;
}

// TRIANGULO
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const ladoTrianguloHaltura = 5.5;

function areaDelTriangulo() {
    return (ladoTrianguloBase * ladoTrianguloHaltura) / 2;
    
} 
function perimetroDelTriangulo() {
    return ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
}

// CIRCULO
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;

function circunferencia() {
    return diametroCirculo * Math.PI;
}
function areaDelCirculo() {
    return (radioCirculo * radioCirculo) * Math.PI;
}

//  ALTURA DE UN TRIANGULO ISOSELES NO EQUILATERO

function calcularAlturaDelTriangulo(lado1,base) {
    if(lado1 == base) {
        console.warn('este no es un triangulo isosceles')
    } else {
        //raizcuadrad(lado1 ** 2 -(b**2)/4)
    }

    return Math.sqrt((lado1 *  lado1) - ((base ** 2 )/ 4))
}


// ALTURA DE UN TRIANGULO ESCALENO SI CONOCEN TODOS SUS LADOS
// LADO 1 ES IGUAL A LA BASE

function alturaDelTrianguloEscaleno(lado1, lado2, lado3) {
    var semiPerimetroDelTriangulo = (lado1 + lado2 + lado3) / 2;

    return 2/lado1 * Math.sqrt(semiPerimetroDelTriangulo * (semiPerimetroDelTriangulo - lado1) *(semiPerimetroDelTriangulo -lado2) * (semiPerimetroDelTriangulo - lado3))
}

