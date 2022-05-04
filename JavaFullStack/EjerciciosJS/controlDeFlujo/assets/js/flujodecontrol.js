
//Control de flujo

/*Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha) */



/* 
Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha) */


/*Condicionales 
Las condicionales son permiten evaluar si una condicion cumple o no con lo que estemos evaluando. Su sintaxis es muy sencilla, tanto que podamos agregar condiciones intermendias en el caso de uqe no se cumpla la primera evaluacion y se deban evaular mas.*/


/* if("si"7)
//Sintaxis de un if

if(condicion){
   Sentencia else ("sino" o "de otro modo")         
}
*/

//Felipe quiere ir a una fiesta,pero Felipe es menor de edad y esa fiesta taran alcohol.Ayuda a Fleipe a decidir si puede o no ir a la fista.

/*const edadFelipe=17;
if(edadFelipe<18){
    console.log("Felipe no puede ir a la fiesta");
} else{console.log("Felipe puede ir a la fiesta");

}
// PROMPT nos sirve para solicitar datos al usuario y almacenarlos en una variable.

var hora=prompt("Ingrese la hora actual(SOlO LA HORA)");
if(hora>18){
    console.log("Buenos dias,hace mucho calor, toma agua");
} else{
    console.log("Buenas noches, hace mucho frio,por favor usa un sueter ");

}






*/
/*Valores que se evaluan como falsos:
}-false
-0
-""(cadena vacia)
-null
-undefined
-NaN (Not o a number)



*/

/*
else if("de otro modo si")
Sintaxis de un esle if 
 
else if(La camisa de felipe esta limpia){
    /felipe va a la fiesta
}


//if nos da solo un resultado

//else nos da dos resultados

//else if () nos da los resultados que queramos 
*/
/*
var hora= prompt("Ingresa solo la hora actual en formato de 24 horas");
if(hora<13){
    console.log("Es de mañana,desayuna rico");
} else if(hora<=19){
    console.log("Es tarde, comme rico");
} else {
    console.log("Es de noche, cena rico");

}
*/

//Otro bonito ejempplo de Felipe
/*
nombreIngresado= prompt("Ingrese su nombre");
if (nombre==="Felipe");
{
    console.log("Hola Felipe");}
 else if (nombreIngresado ==="Juan Carlos") {
    console.log("Hola Juan Carlos");
}
 else{
conosole.log("Hola desconocido");
}*/

/*operador ternario

Estructura de un operador ternario

resultado=(condicion)?valor1:valor2);

EL operador ternario necesitara 3 operandos: la condicion, el valor que se devuelve si la condicion se cumple y el valor que se devuelve si la condicion no se cumple.



*/
//Ayuda al profesor felipe a calificar a sus alumnos

var calificacion;
var caificaciones=43;

if (calificaciones<30){
    calificaciones= "Feliipe tuvo pocos reprobados";
}  else{
    calificaciones="Felpe tuvo muchos reporbados";

}

console.log(calificaciones);


//Transformando en un operador ternario

var calificaciones= calificacion <30? "Felipe tuvo pocos reprobados": "Felipe tuvo muchos reprobados"

//Otro ejercicios de cambio de condicionales if a operador ternario
/*
if(hora<13){
    console.log("Es de mañana,desayuna rico");
} else if(hora<=19)
    console.log("Es tarde, comme rico");

//Operador ternario
    var v=hora<18? "Es de mañana,desayuna rico": "Es tarde, comme rico";
console.log(v);
*/

// if devuelve un posible resultado
//if+ else que devuelven 2 posibles resultados
// if+ else if+ else que devuelve 3 o mas posibles resultados




         /*Condicional Switch
          switch(expresion) {
    case valor1;
      /Bloque de codigo que se ejecuta si la expresion es igual a valor1;
      break;
    case valor2:
        /bloque de codigo que se ejcuta si la expresion es igual a valor2
        break;
    case valor3;
       /Bloque de codigo que se eejcuta si la expresion es igual a valor3
       break;
    deafult;
    /bloque de codigo que se ejcuta si no se cumple ninguna de las condiciones anteriores


    switch:iniciar nuestra condicion
    case: evaluar la condicion
    break:terminar la condicion
    default: terminamos y mostramos el resultado final.
    */


opcion= prompt("Ingrese una opcion del 1 al 4");



switch (opcion){
case"1":

console.log("Seleccionaste la opcion 1");
break;
case "2":
    console.log("Seleccionaste la opcion 2");
break;
case "3":
    console.log("Seleccionaste la opcion 3");
break;
case "4":
    console.log("Seleccionaste la opcion 4");
break;
default:
console.log("Me quieres engañar, opcion no valida");
}

console.log(typeof(opcion));

/*Crear los ejercicios en euna carpeta de la sesion llamada control de flujo
El repositorio se llama control de flujo
*/

/*MATRICES Y BUCLES*/


/*Arreglos, Arrays o Matrices



Defnicion
Arreglos, Arrays o Matrices

Definicion

Un array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemeos una variable, la usamos para guardar un dato. Cuando tenemos un array, guardamos esos datos en una lista. 

Un array ya no es un tipo de dato primitivo, si no que es un objeto porque es considerado una estructura de datos.
En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).


*/
let variable=1; //Es una variable con un solo valor
let array=[1,2,3,4,5,6]//Es un array con varios valores.

/*  Formas de crear un array o arreglo
1.-Utilizando la palabra reservada "new" y el metodo"Array"*/
//Estructura básica de un array
/*

var arcoiris=new Array();
//Detectamos un nombre para nuestro arreglo(arcoiris)
//Y le agregamos el metodo "Array" usando la palabra reservada 

var arcoiris=new Array(7);*/

var arcoiris=new Array("rojo","verde","azul","amarillo","violeta","naranja","rosa");//Declaramos un arreglo con 7 posiciones


/*Segunda forma de crear un arreglo

*/
var arcoiris=["rojo","verde","azul","amarillo","violeta","naranja","rosa"];

var arcoiris=[];//Declaramos un arreglo vacío

//Ejemplo de arreglos
var listaDeSuper= new  Array("Leche","Pan","Azucar","Dulces");

var listaDeSuper=["Leche","Pan","Azucar","Dulces"];


var diaSemana=new Array("Lunes","Martes","Miercoles","Jueves","Viermes","Sabado","Domingo");

var diaSemana=
["Lunes","Martes","Miercoles","Jueves","Viermes","Sabado","Domingo"];




//Investigar si se pueden hacer arreglos con otros tipos de datos


//Acceder a lementos de un Array

/*Antes de hablar de elementos de un Array, es importante definir conceptos:

-Cantidad de elementos
-Indices de esoe elementos(posiciones de elementos)
*/

var diaSemana=
["Lunes","Martes","Miercoles","Jueves","Viermes","Sabado","Domingo"];
// 7Elementos
//Indices: 0, 1, 2, 3, 4, 5, 6
//Sinatxis general para imprimir un elemento de un array
console.log(nombreDelarreglo[valordelindice]);
console.log(diaSemana[4]);


//Arrays asociativos

/* UN array asociativo es un array que contiene una serie de datos que se almacenan en uuna estructura de datos que se llama obhjeto.
Nos sirve hacerlo de este modo porque podemos tener el control mas especifico al momento de llamar la posicion de ese elemento. Por ejemplo, nsosotros en un array normal,llamamos a los elementos por su indice(1,2,3,4) en cambio en un array asociativo , llamamos a los elementos por su nombre (nombre, apellido, etc.).

En pocas palabras, cambiamos y asociamos el numero del indice por una cadena de texto para poder identificar la posicion del elemento de una mejor forma.

*/
micumpu=["Lenovo", "Intel core i5","12gb","1 TB"];

console.log(micumpu[0]);//Imprime el elemento de la posicion 0





let micomputadora={
    marca:"Lenovo",
    procesador:"Intel core i5",
    ram:"12 gb",
    esacioEnDisco:"1 TB"

}

/* Metodos de los arrays

En los arrays, tenemos ciertos metodos que nos permiten manipular los elementos de un array. Estos nos permiten desdde agregar elementos , eliminar elementos,hasta reordenarlos.

Podemos  dividir estos metodos en 3 grupos:
-metodos trasnformadores: Son los que nos permiten manipular los elementos de un array y cambiar su estructura.
-metodos accesores: son los que nos permiten acceder a loos elementos de un array.
-metodos iteradores o repetitivos: son los que nos permiten iteraer sobre los elementos de un array, recorriendolos.
*/


console.log("");
console.log("-------------------------------------------------");
console.log("");
var arrayEjemplo= ["Manzana", "Peras","Zanahorias","Duraznos","Melones","Sandias","Aguacates","Naranjas"];
console.log("Este es mi arreglo original",arrayEjemplo);
