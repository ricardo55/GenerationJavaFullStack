//alert("Ando en el archivo controlDeFlujo.js");

//prompt("Ingrese su nombre");

/*Control de flujo

Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las
instrucciones de un programa, siendo estas instrucciones las que determinan o 
controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una 
instruccion de control (por ejemplo una condicional), el control de flujo se 
mantiene en el mismo orden en el que se escriben las instrucciones 
(de arriba a abajo y de izquierda a derecha) 

*/

/* Sintaxis IF(Si)

Sintaxis:
if(condicion){
    //Instrucciones
}

if(La camisa de felipe esta limpia) {
    //Felipe va a la fiesta
}

Felipe quiere ir a una fiesta, pero felipe es menor de edad y esa fiesta
daran alcohol. AYUDA!! a felipe si puede ir o no a la fiesta.

*/

const edadFelipe=17;
if(edadFelipe>18){
    console.log("Felipe puede ir a la fiesta");
}else{
    console.log("Felipe no puede ir a la fiesta");
}


// Prompt nos permite pedirle al usuario que ingrese un dato.
var hora=prompt("Ingrese la hora actual-solo la hora");
if(hora<18){
    console.log("Buenos dias,hace calor");
}else{
    console.log("Buenas tardes, hace frio");
}

// Valores que se evaluan como falsos:
// Los valores que se evaluan como falsos son:
// - false
// - 0
// - ""
// - null
// - undefined
// - NaN (Not a Number)

/*
else if(de otro modo si la condicion anterior no se cumple, se evalua la siguiente condicion)

Sintaxis de un else if:
else if(condicion){
    //Instrucciones
}


// if nos da solo un resultado 
// else nos da dos resultados
// else if nos da los resultados que nosotros queramos
*/

var hora=prompt("Ingrese la hora actual en formato 24 horas");

if (hora<13){
    console.log("Es de mañana, desayunando");
} else if (hora<18){
    console.log("Es de tarde, comiendo");
} else {
    console.log("Es de noche, dormiendo");
}

/*

Operador ternario

Estructura de operador ternario

resultado = (condicion)?valor1:valor2;

*/
///Ayuda al profesor felipe a saber cuantos alumnos de su clase pasaron la materia.

var cantidaddereprobados = 30;

if (cantidaddereprobados < 15) {
  cantidaddereprobados = "Felipe tuvo pocos reprobados";
} else {
  cantidaddereprobados = "Felipe tuvo muchos reprobados";
}
console.log(cantidaddereprobados);

//Transformando a un operador ternario

var reprobados =
  cantidaddereprobados < 15
    ? "Felipe tuvo pocos reprobados"
    : "Felipe tuvo muchos reprobados";





/*Condicionales

Los condicionales nos permiten evaluar si una condicion cumple o no con lo que 
estemos evaluando. Su sintaxis en muy sencilla, tanto que podemos agregar 
condiciones intermedias en el caso de que no se cumpla la primera evaluacion y 
se deban evaluar mas.

*/
//Este condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados

opcion = prompt("Ingresa una opcion del 1 al 14");
switch (opcion) {
  case "1":
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
    console.log("Me quieres engañar, no estas ingresando una opcion valida");
}
