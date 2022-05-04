/*

Arreglos Arrays o Mtrices

Definicion

Un array es un conjunto de datos que se pueden almacenar en una sola variable.

cuano tenemos una variable, la usamos para guardar un dato.
cuando tenemos un array 


*/

let variable = 1; //Es un array con varios valores

let array =[1,2,3,4,5]; //Es un array con varios valores


/*
*Formas de crear un array o arreglo

1- Utilizamos la palabra reservada "new" y el metodo "Array"

*/

//Estructura basica de un array
var arcoiris = new Array();

// Declaramos un nombre para nuestro arreglo (arcoiris)
// y le asignamos el metodo "Array" usando la palabra reservadan "new"

var arcoiris = new Array(7); //Este arreglo tendra 7 elementos 

var arcoiris = new Array("rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"); //Declaramos un arreglo con 7 posiciones


/*
? segundaforma de crear un arreglo (favorita d felipe)

La segunda forma es crear un array a traves de los corchetes. Esta forma es muy utilzada en los arrays de JS, ya que es la forma más sencilla para crearlos.


*/
var arcoiris = ["rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"]; //Declaramos un arreglo con 7 posiciones (refactorizar)

var arcoiris = {}; //Declaramos un arreglo vacio

//EJEMPLOS DE ARREGLOS 

var listasuper = new Array();
var listasuper = {};

var diasSemana = new Array("Leche", "Pan", "Dulces");//primera forma
var listasuper =["Leche", "Pan", "Dulces"]//segunda forma



/*Acceder a elmentos de un array


Antes de hablar de elementos de un array, es importante definir 2 conceptos:

-cantidad elementos 
-indices de estos elementos (posiciones del elemento)

*/

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

//Elementos : 7 elementos 
//indices (posiciones): 0, 1, 2, 3, 4, 5, 6

// 0 - Lunes
// 1 - Martes
// 2 - Miercoles
// 3 - Jueves
// 4 - Viernes
// 5 - Sabado
// 6 - Domingo

//? Accerder a un elemento de un array
//sintaxis general para imprimir un elemento de un array
//console.log(nommbreDelArreglo{valorDeIndice});

console.log(diasSemana[4]); //Imprime el elemento de la posicion 0
console.log(diasSemana[0]); //Imprime el elemento de la posicion 0
console.log(diasSemana[9]); //Imprime el elemento de la posicion 0

//* Arrays asociativos

/* 
Un array asociativo es un  array que contiene una serie de datos que se almacenan en una estructura  que se llama objeto.
Nos sirve hacerlo de esta modo porque podemos tener un control mas especifico 
*/

compu = ["asus", "intel core i7", "8GB", "16GM"]

console.log(micompu[0]); //Imprime el elemento de la posicion 0
console.log(micompu[1]); //Imprime el elemento de la posicion 1
console.log(micompu[2]); //Imprime el elemento de la posicion 2
console.log(micompu[3]); //Imprime el elemento de la posicion 3

let micomputadora = {
    marca: "Asus",
    modelo: "GL5523X",
    procesador: "Intel core i7",
    ram: "16 GB",
    almacenamiento: "1 TB"
}

console.log(micomputadora.ram); //Imprime el elemento de la posicion 3


let participante = {
    nombre: "Amairany",
    edad: "30",
    gitbub: "enlace",
    repositorios: "entregado",

}


/*

* Metodos de los arrays 

En los arrays, tenemos ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desde agregar elementos, eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3 grupos:

-metodos transformadores : son los que nos permiten manipular los elementos de un array y cambiar su estructura.
-metodos accesores : son los que nos permiten acceder a los elementos de un array.
-metodos iteradores o repetitivos: son los que nos permiten iterar sobre los elementos de un array, recorriendolos.

Sintaxis basica de los metodos 

nombreDelArrayModificar.metodoDeLaClase(parametos);

*/

console.log("");
console.log("-----------------------------------");
console.log("");


var arrayEjemplo = ["Manzanas", "Peras", "Zanahoria", "Drurazno", "Melones", "Sandias", "Aguacates", "Naranjas"];
console.log("Este es mi arreglo original", arrayEjemplo);

//? Metodos transformadores

//* Metodo push(): Agregar un elemento  al final del arreglo
arrayEjemplo.push("Uvas");
console.log ("Agrege uvas al arreglo ariginal", arrayEjemplo);

//* Metodo pop(): Eliminar un elemento del final del arreglo
arrayEjemplo.pop();
console.log("Elimine el ultimo elemento agregado del arreglo, que eran las uvas", arrayEjemplo);

//* Metodo unshift(): Agregar uno o mas elementos al principio del arreglo
arrayEjemplo.unshift("Fresas", "Platanitos");
console.log("Agrege dos elementos al principio del arreglo, que son fresas y platanos", arrayEjemplo);

//* Metodo shift(): Eliminar un elemento del principio del arreglo 
arrayEjemplo.shift();
console.log("Elimine el primer elemento del arreglo, que era fresas", arrayEjemplo);

//* reserve(): Reserva los elementos del arreglo alfabetico
arrayEjemplo.reserve();
console.log("Reserva los elementos del arreglo", arrayEjemplo);

let saludo = ["Hola", "soy", "Ricardo", "y", "soy", "un", "programador"];
saludo.reserve(); //!Revisar si hay parametros para este metodo
console.log(saludo);

//! Que determina el orden de los elementos de un array?
//* Sort(): Ordenar los elementos del arreglo
arrayEjemplo.sort();//!Revisar si hay parametros para este metodo
console.log("Ordene los elementos del arreglo", arrayEjemplo);

paquetaxo = ["Manzanas", "peras", 1, false];
paquetaxo.sort();
console.log("Este es mi arreglo paquetaxo", paquetaxo);


//* ForEach(): Recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion.
var frutas = ["manzana", "pera", "uva", "naranja", "sandia"];

//* slice(): Extrae una seccion de la cadena, devolvemos una cadena nuevo copiando el array por que no lo modificamos (para hacer cortes en nuestras cdenas)

//CORTANDO UN ARRAY
var cadena1 = ["Hola", "Generation", "de", "JavaScript"]; //Elemento por elemento
console.log("Esta es la cadena 1", cadena1);

var cadena2 = cadena1.slice(2); //de Java Sscript
console.log("Esta es la cadena 2", cadena2);

// indice 0 = de 
// indice 1 = Java Script

var cadena3 = cadena2[1].slice(1); //Script
console.log("Esta es la cadena 3", cadena3); //En este punto, ya modificamos el elemento Java Scriot porqu accedemos a el por medio del indice y luego aplicamos el splice.


//CORTANDO ARRAY DE NUMEROS
var arrayNumeracion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Este es mi array numeracion", arrayNumeracion);
var nuevaNumeracion = arrayNumeracion.slice(0. -5); //de 3 a 6
console.log("Esta es la nueva numeracion", nuevaNumeracion);

//CORTANDO CADENAS DE TEXTO 
var saludo5 = "Hola Generation de JavaScript"; //Letra por letra
console.log("Este es mi saludo", saludo5);
var nuevoSaludo = saludo5.slice(2); //de Felipe a  Maqueda
console.log("Esta es mi nuevo saludo", nuevoSaludo);

//Ejemplos del mundo real usando slice

/*
CREAMOS UN CORREO ELECTRONICO
Felipe 
Maqueda

Crear un correo con las 3 primeras Letras del nombre y apellido =  felmaq@generation.com.mx

CREAMOS UN CUPON PERSONALIZADO CON EL NOMBRE Y APELLIDO DEL USUARIO

Miguel
Anaya

Luis 
Gaytan

cupon = mian100
cupon2 = luga200

*/

/*
* Metodo splice()

Hay un metodo muy especial, que se llama splice, y nos permite modificar el contenido de un array. Podemos usarlo en tres formas:

    - Para eliminar o suprimir elementos del array.
    - Para agregar o insertar nuevos elementos al array.
    - Para reemplazar elementos existentes del array.

?Esta es la sintaxis general del metodo splice


splice(indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElementoN)

*Prametros que usa el metodo splice

- Indice de inicio : Indica la posiscion del inicio donde comenzara a eliminar elementos. (primer numero del parentesis)
- Cantidad de elementos a eliminar : Indica la acantidad de elementos a eliminar. (segundo numero del parentesis)
- Nuevo elemento : Indica el nuevo elemento que se agregar al array. (Los numeros que estan despues del parentesis)

*/

console.log("");
console.log("----------------------------");
console.log("");

//Crear un array de ejemplo llamado meses 

let meses = ["enero", "febrero", "lunes", "martes","marzo"];
console.log ("Este es mi array original de meses y dias revueltos", meses);

/*
*1- Eliminar elementos del array usando splice

Para suprimir valores del array, debemos especificar dos argumentos: la posicion del primer elemento que deseamos eliminar, y el numero de elementos a eliminar.

!Sintaxis del splice para eliminar elementos: splice(posicionInicial, cantidadDeElementosAEliminar)

*/
//enero = 0
//febrero = 1
//lunes = 2
//martes = 3
//marzo = 4

meses.splice(2,2); //Elimina los dos elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del arreglo", meses);

meses.splice(2); //Elimina los dos elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del arreglo", meses);

meses.splice(2, 2); //Elimina los dos elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del arreglo", meses);

meses.splice(1, 1); //Elimina los dos elementos de la posicion 1
console.log("Elimine el elemento de la posicion 1", meses);

//!EJERCICIO EXPRESS!!!!

var todosLosMesesDelAnio = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


//Usando splice quita todos los meses del anio que tengan 30 dias

nueva=meses.splice(1,1)
console.log(todosLosMesesDelAño[1]);

/*
 *2 .- Eliminar y agregar elementos al array usando splice

 El metodo splice tambien permite agregar nuevos elementos justo despues de la operacion de borrado. Solo tenemos que pasar los elementos que queremos agrgar despues de la operacion de borrdado

 !la sintaxis para eliminar y agregar elementos es: splice(posicionInicial, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElementoN)

 */

let meses2 =["enero", "febrero", "lunes", "martes"];
console.log("Este es un nuevo array llamado meses2", meses2); //Imprimemos el array.")

let dias =mese2.splice(2,2, "abril", "mayo", "junio", 5); //Elimina los dos elementos de la posicion2
console.log("Elimine los dos elementos que no son meses del arreglo", meses2);

  /*

*Agregar nuevos elementos al areglar sin eliminar ningun elemento

En este ultimo ejemplo, podemos agregar nuevos elementos sin eliminar ningun elemento del array, definiendo el 0 el parametro que indica la cantidad de elementos a eliminar.

*/

let meses3 = ["enero", "febrero", "lunes", "martes"];
console.log("Este es un nuevo array llamado meses3", meses3); //Imprimimos el array.")

meses3







// Sintaxis del slice

//nombreDeLaCadena.slice*


console.log("Esta es la cadena1", cadena2);
