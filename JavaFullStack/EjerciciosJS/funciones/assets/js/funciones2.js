alert("esta vivo");



/* 
Scope(alcance) es el alcance de una variable, que esta definida al momento */
/* 
Funciones


Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o invoca.Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.



*/
//Esta es la estructura basica de una funcion, que ya esta siendo llamada o invocada.


function nombreFuncion(parametros) {
    //Instrucciones

}

nombreFuncion();                //Invocamos a nuestra funcion.

/* Formas de crear e invocar funciones
 
1.- Crear una funcion tradicional, crearla y darle un nombre y parametros*/

//Funcion tradicional creada y con un nombre asignado

function sumaDeDosValores() {

    let valor1 = 5;
    let valor2 = 10;
    let suma = valor1 + valor2;

    console.log("Este es mi primer funcion", suma);
}

sumaDeDosValores();//Invocamos a nuestra funcion.




//Funcion con parametros asignados en la llamada

function AreaTriangulo(base, altura) {
    let area = base * altura / 2;
    console.log("El area del trinagulo es:", area);

}

AreaTriangulo(5, 32);//Invocamos nuestra funcion y agregamos nuestros parametros.
AreaTriangulo(10, 20);//Invocamos nuestra funcion y agregamos nuestros parametros.AreaTriangulo(5, 32);//Invocamos nuestra funcion y agregamos nuestros parametros.
AreaTriangulo(467, 789);//Invocamos nuestra funcion y agregamos nuestros parametros.
 /* Rerurn
 
 La sentencia  return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo,usamos return para finalizar y tambien para poder asignar el resultado a una variable.*/7

function areaCuadrado() {
    let lado = 5;
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}

let reulstadoQueUsareMasTarde = areaCuadrado(); //Guardando el resultado de mi areaCuadrado en una variable para usarla despues.
areaCuadrado(); //Invocamos nuestra funcion
console.log(areaCuadrado());

console.log("Usaré el resltado que guarde anteriormente:", reulstadoQueUsareMasTarde);


function volumenCubo() {
    let volumen = reulstadoQueUsareMasTarde * reulstadoQueUsareMasTarde * reulstadoQueUsareMasTarde;

    console.log("El volumen del cubo es:", volumen);
}
volumenCubo();




function AreaCirculo() {
    const pi = 3.1416;
    let radio = 4;
    let AreaCirculo = pi * radio * radio;
    return AreaCirculo;
}
let A = AreaCirculo();
AreaCirculo();

function VolumenCilindro() {
    let h = 10;
    let volumen = A * h;
    console.log("El volumen del cilindro es;", volumen);
}


VolumenCilindro();


//Funcion calculadora

function calculadora(num1, num2) {
    let suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    divison = num1 / num2;

    console.log("El reslultado de la suma es:", suma);
    console.log("El resultado de la resta es:", resta);
    console.log("El resultado de la multiplicacion es:", multiplicacion);
    console.log("El resltado de la division es:", divison);

}
calculadora(1, 2);


//Funcion calculadora cientifica

function CalCient() {
    let exponente;
    let raíz;
    let porcentaje;
    let fraccion;
    let seno;
    let coseno;
    let tangente;

}

//Funciones flecha
/*Funciones que no tiene nombre y que no pueden llamarse desde otro lado
 */
//Funcion tradicional

/*function sumita(numero1,numero2){
return numero1+numero2;
}
//Convirtiendo a sumita en una terrorifica funcion flecha
//Paso 1. Quitamos la palabra reservada function
sumita(numero1,numero2){
    return numero1+numero2;
    }

//Paso 2. Quitamos las llaves que delimitan la funcion y en su lugar, arbimos este bloque de texto con una flecha =>

sumita (numero1,numero2)=>  return numero1 + numero2;

//Paso 3. Quitamos el return porque ya esta implicito

var sumita= (numero1,numero2)=>numero1 + numero2;*/

//Las funciones flecha son siempre anonimas, estamos usando una estructura declarativa done asignamos  


//Otra forma de crear funciones
//2.-Asignando nuestra funcion a una variable


function sumita(numero1, numero2) {
    return numero1 + numeor2;
}

let x = function () {

    let numero1 = 5;
    let numero2 = 10;
    let suma = numero1 + numero2;
    console.log("La suma es:", suma);


}
x();  //Invocamos a nuestra funcion

x = 55;
var y = (numero1, numero2) => numero1 + numero2;



//Otra funcion anonima convertida a una funcion flecha


function saludar(nombre) {
    let saludo = "Hola" + nombre;
    console.log(saludo);

}
saludar("Felipe");
saludar("Alonso");
saludar("Juan");


//Convertir mi saludo a una funcion flecha

let saludoFlecha = nombre => console.log("Hola" + nombre);
saludoFlecha("Felipe");
saludoFlecha("Alonso");
saludoFlecha("Juan");


function div(n1, n2, n3, n4) {
    let div = (n1 + n2) / (n3 * n4);
    console.log("El resultado de la division es:", div);

}
div(3, 2, 2, 5)


function chicharronera(a, b, c) {
    let chicharronera = -b

}
