let ejemplo1=23;
let ejemplo2=5;

let textoEjemplo="23";
let textoEjemplo2="Holaaa";

//Imprime true porque tienen el mismo valor pero son distintos tipos de datos.
console.log("El numero 23 y el texto 23 son estrictamente diferentes",ejemplo1 !== textoEjemplo);

// Operador mayor que ( >)

//Sirve para determinar si un valor es mayor que otro.

console.log("El numero 23 es mayor que el 5: ",ejemplo1 > ejemplo2);
console.log("Operador mayor que: ",ejemplo1 > ejemplo2);

// Operador mayor o igual que ( >=)

// Sirve para determinar si un valor es mayor o igual que otro.
console.log("El numero 23 es mayor o igual que el 5: ",ejemplo1 >= ejemplo2);


//Operador menor o igual que ( <=)
//Sirve para determinar si un valor es menor o igual que otro.
console.log("El numero 23 es menor o igual que el 5: ",ejemplo1 <= ejemplo2);


// Combinando operadores

num1=12;
num2=24;
num3=25;
num4=92;
num5=91;

op= (num1 < num2 || num2 < num3 ) && (num1 != num2 ) && (num5 != num3);
