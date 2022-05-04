function areaCuadrado(lado) {
    var area = lado * lado;
    return area;
}

//Guardando el resultado de la funcion en una variable para usarla despues.
let resultadoQueUsarMasTarde=areaCuadrado(5);

//Invocamos la funcion
areaCuadrado(5);

console.log("Usare mi resultado que guarde para mostrar el area del cuadrado",resultadoQueUsarMasTarde);

function volumenCubo(lado) {
    var volumen = lado * lado * lado;
    return volumen;
}

console.log("El volumen del cubo es:",volumenCubo(5));

function areaCirculo() {
    let radio=7;
    var area = Math.PI * radio * radio;

    console.log("El area del circulo es:",area);

}

function areaCirculo2(radio) {
    var area = Math.PI * radio * radio;
    return area;
}

console.log("El area del circulo 2 es:",areaCirculo2(7));
console.log("....")
var a= areaCirculo2(7);
console.log("El area del circulo es--->:",a);


function areaCilindro() {
    let radio=7;
    let altura=10;
    let res=areaCirculo2(radio);
    var area = Math.abs(res + 2 * Math.PI * radio * altura);
    console.log("El area del cilindro es:",area);
}

areaCilindro();

function volumenCilindro() {
    let radio=7;
    let altura=10;
    let res=areaCirculo2(radio);
    var volumen = Math.abs(res * altura);
    console.log("El volumen del cilindro es:",volumen);
}


volumenCilindro();


function calculadoraDosNumeros(num1,num2) {
    var suma=num1+num2;
    var resta=num1-num2;
    var multiplicacion=num1*num2;
    var division=num1/num2;
    var resultado={
        suma:suma,
        resta:resta,
        multiplicacion:multiplicacion,
        division:division
    };
    return resultado;
}

calculadoraDosNumeros(5,7);

console.log("La suma es:",calculadoraDosNumeros(5,7).suma);

function calculadoraCientifica(){

    let exponente;
    let raiz;
}

function operacionAritmetica(){
    let operacion=(3+2)/(2*5);
    return operacion;
}

console.log("La operacion aritmetica es:",operacionAritmetica());

function formulaGeneralEcuacionesSegundoGrado(a,b,c){
    let x1=(-b+Math.sqrt(b*b-4*a*c))/(2*a);
    let x2=(-b-Math.sqrt(b*b-4*a*c))/(2*a);
    let resultado={
        x1:x1,
        x2:x2
    };
    return resultado;
}

console.log("La ecuacion es:",formulaGeneralEcuacionesSegundoGrado(1,2,1));