
// Que es un variable?
// Una variable es un espacio que guardamos en memoria. Imaginemos un vaso de agua que para poder convertirlo en una variable, tengo que agregarle cualquier dato. Si en este caso vemos al agua como información, al momento de agregar agua al vaso se convierte en una variable.
// Se llama variable porque se puede cambiar su valor.


recipiente="agua";
recipiente="cafe";
recipiente="leche";
recipiente="azucar";
recipiente="miel";
recipiente="chocolate";

console.log(recipiente); //Nos sirve para mostrar una consola para mostrar en consola la infor.


/*
Tipos de variables:

-var
-let
-const

*/

var base=10;
var altura=5;

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function areaCuadrado(base,altura){
    return base*altura;
}

console.log(areaTriangulo(base,altura));
console.log(areaCuadrado(base,altura));

const pi=3.1416;
const areaTriangulo=(base,altura);


var nombre="Juan";
let apellido="Perez";
const edad=20;
let perrito="Toby";


let numero6=10;


let zapatosNegros=500; //Precio con descuento
zapatosNegros=250; //Precio con descuento

console.log("Precio de zapatos: ",zapatosNegros);

// Tipos de datos

/*

-string = Para representar texto. podemos escribir una cadena de texto.
-number = Para representar números. podemos escribir un número.
-boolean= Para representar verdadero o falso.
-null= Para representar un valor nulo.
-undefined= Para representar un valor indefinido.
-symbol= Para representar un símbolo.
-object= Para representar un objeto.
-NaN= Para representar un número no válido.

*/


let string="Hola soy una cadena de textos";
let string2='Hola soy una cadena de textos con comillas simples';
let string3=`Hola soy una cadena de textos con comillas invertidas o backticks`;

console.log(string);
console.log(string2);
console.log(string3);

let numero1="15";
let numero2=55;
let numero3=10;
let suma=numero1+numero2+numero3;

console.log(suma);

// eJEMPLO de tiipo de datos numericos

// Calculo de area de un triangulo

let base=15;
let altura=55;
let area=base*altura/2;
console.log(area);

// Ejemplo de tipo de datos booleanos

datosBooleano=true;
datosBooleano2=false;


//Ejercicios

// Programa para calcular el suldo de un empleado

let costoHora=82.76;
let horasTrabajadas=40;
let primaDominical=0.05;
let bonoExtra=1000;// si el trabajador trabaja mas de 45 horas per week

let nombreEmpleado="Juan";
let nombreEmpleado2="Pedro";


let sueldo=costoHora*horasTrabajadas;
let prima=sueldo*primaDominical;

console.log(sueldo);
console.log(prima);

console.log("El nombre del 1 empleado es: ",nombreEmpleado);
console.log("El nombre del 2 empleado es: ",nombreEmpleado2);
console.log("El sueldo del 1 empleado es: ",sueldo);
console.log("El sueldo del 2 empleado es: ",sueldo);
console.log("El prima del 1 empleado es: ",prima);
console.log("El prima del 2 empleado es: ",prima);





