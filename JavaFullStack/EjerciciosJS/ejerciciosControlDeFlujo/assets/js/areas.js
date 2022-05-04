function triangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

function cuad(lado) {
    let area = lado * lado;
    return area;
}

function rectang(largo, ancho) {
    let area = largo * ancho;
    return area;
}

function circulo(radio) {
    let area = Math.PI * radio * radio;
    return area;
}

console.log("Elige una opcion para obtener el area:")
console.log("1.Triangulo");
console.log("2.Cuadrado");
console.log("3.Rectangulo");
console.log("4.Circulo");
console.log("")
let opcion = Number(prompt("Eligue una opcion: "))



switch (opcion) {
    case 1:
        let baseTrian = Number(prompt("Ingresa la base del triángulo"));
        let alturaTrian = Number(prompt("Ingresa la altura del triángulo"));

        let areaTrian = triangulo(baseTrian, alturaTrian);
        let perimetroTrian = baseTrian + 2 * alturaTrian;

        console.log("El area del triángulo es de " + areaTrian + " y el perimetro es de " + perimetroTrian);

        break;

    case 2:
        let lado = Number(prompt("Ingresa el valor de un lado del cuadrado"));
        let area = cuad(lado);

        let perimetro = 4 * lado;

        console.log("El area del cuadrado es de " + area + " y el perimetro es de " + perimetro);
        break;

    case 3:

        let baseRect = Number(prompt("Ingresa la base del rectángulo"));
        let alturaRect = Number(prompt("Ingresa la altura del rectángulo"));
        if (baseRect == alturaRect) {
            console.log("Un rectángulo debe llevar valores diferentes de base y altura");

        } else if (baseRect != alturaRect) {

            let areaRect = rectang(baseRect,alturaRect);
            let perimetroRect = baseRect + baseRect + alturaRect + alturaRect;

            console.log("El area del rectángulo es de " +areaRect +" y el perimetro es de " +perimetroRect);
        }

        break;

       
    case 4:

        let radio = Number(prompt("Ingresa el radio del circulo"));
        let areaCir = circulo(radio);

        let circunferencia = Math.PI * (2 * radio);

        console.log("El area del circulo es de " +areaCir +" y el diametro es de " +circunferencia);

        break;

    default:
        console.log("Elige una opcion correcta");
        break;
}