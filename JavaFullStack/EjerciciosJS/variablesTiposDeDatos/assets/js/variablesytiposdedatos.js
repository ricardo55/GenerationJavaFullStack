alert("Estoy vivo!!!");
/* Que es un variable?

Una variable es un espacio que guardamos en memoria. Imaginemos un vaso de agua que para poder convertirlo en una variable, tengo que agregarle cualquier dato. Si en este caso vemos al agua como información, al momento de agregar agua al vaso se convierte en una variable. Se llama variable porque se puede cambiar su valor.
*/

recipiente="agua";//Cuando escribo recipiente, declaro mi variable y le asigno el valor de leche, en ese momento ya estamos inicializando
recipiente="cafe";//Estamos modificando el valor de la variable
recipiente="leche";
recipiente="miel";
recipiente="chocolate";


console.log(recipiente);//Esto nos sirve para mostrar en consola nuestra información


//console.log(Recipiente);Js es CaseSensitive(sensible a mayusculas y minusculas)

/*Tipos de variables

-var: (variable global)

-let: (variable local)
-const:(variable constante)



Declarar, inicialzar y modificar variables

Decalrar una variable: es cuando la comienzo a escribiry aun no le doy valores.
Inincializar la  varibale es cuando le doy valores a la variable. 
let:la utilizamos para declarar vaiables
*/
//Cerar multiples variables en una sola línea (seapradas por coma)


let nombre1;
let nombre2;
let nombre3;


nombre1="Juan";
nombre2="Adriana";
nombre3="Ivonne";
 edad1=30;
 edad2=25;
 edad3=20;

let nombre4, nombre5, nombre6;
nombre4="Argemiro", nombre5="Briana", nombre6="Carmen";

console.log(nombre1, edad1);
console.log(nombre2,edad3);
console.log(nombre3, edad2);
console.log(nombre4, edad1);
console.log(nombre5,edad2);
console.log(nombre6,edad1);

/* Tipos de datos



Primitivos: son datos que trae default js y que sirven para modificar datos. 
-strings: para representar cadenas de texto. 
-number:Para rperesentar datos de valor numerico, como números en teros o decimales. Para hacerlo no usamos comillas, solo agregamos el valor.
-boolean: Para representar datos del valor lógico,como verdadero o falso.
-undefined:Para representar datos que no tiene valor.
-null:Para representar datos que nos tinen valor.
-NaN: Para representar datos que no tiene valor.
*/

let string="Hola,soy una cadena de texto con comillas dobles";
let string2='Hola,soy una cadena con comillas simples';
let string3=`Hola, soy una cadena de texto con comillas invertidas o backticks`;

console.log(string);
console.log(string2);
console.log(string3);
let numero1=15;
let numero2=55;
let numero3=10;

let suma=numero1+ numero2+ numero3;
console.log(suma);

//Ejemplo de tipo de datos numericos

//Calculos de área de un trinagulo
let base=15;
let altura=55;
let area= (base*altura)/2;



 console.log(area);

 //Ejemplo de tipo de datos booleanos

 datoBooleano=true;
 datoBooleano2=false;

 //Ejemplo de tipo de dato undefined

 let perrito
 let alumno
 let fruta="manzana";
 let comida= null;



 cnosole.log(comida);


 ////EJERCICIOS

//Programa para calcular el sueldo de un empleado.

let costoHora=80.76;
let horasTrabajadas=40;
let primaDominical=0.05;
let nombreEmpleado1="Juan";
let nombreEmpleado2="Adriana";
let bonoExtra=1000 //Bono extra si el trabajador trabaja más de 45 horas a la semana.

let sueldoBase= costoHora * horasTrabajadas;
let primaDominicalTotal=sueldoBase * primaDominical;
let vacaciones
let agunialdo= null




console.log("El nombre de nuestro primer trabajador es:", nombreEmpleado1);
console.log("El sueldo base de nuestro primer trabajador es:",sueldoBase);
console.log("La prima domoinical de nuestro trabajador es:",primaDominicalTotal);
console.log("A nuestro primer trabajador le corresponden dias de aguinaldo",agunialdo);




//Ejercicio por que lo pidio felipe

//Tipos de datos

// Cadenas
let string6=`Hola este es mi primer ejercicio`
console.log(string6);
let string7='Este es un nuevo texto'
console.log(string7);
let sring8="Ya no se que más poner"
console.log(string8);
let string9=`jaja`
console.log(string9);
let string10= 'Necesito un vaso de agua'
console.log(string10);
 
//Numericos

let num1= 19;
let num2= 24;
let num3= 45;
let num4= 36;
let num5= 89;

let sum= num1+num2+num3+num4+num5;
console.log(sum) ;

// Booleano

Datbool=true;
Datbool2=false;


//Undefined y null

let casa;
let musica;
let viajes;
let perritos;
let cajas=null;

console.log(cajas);


//Conversion de datos

//Cadenas a numeros

console.log(Number("50"));
console.log(Number("50.5"));
console.log(Number(""));
console.log(Number("    "));
console.log(Number("Ricardo"));
console.log(Number("98  99 100"));

Number("Loquevamosacambiar")


//NUmeros a cadenas de texto


console.log(String(50));
console.log(String(true));
console.log(String(null));

//Metodos numericos


//Para cortar numeros decimales


console.log(parseInt(50.57));
console.log(parseInt(3.14595405467));


//Para redondear numeros decimales


console.log(Math.round(50.57));

















