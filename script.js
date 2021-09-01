// Hola Mundo
//alert('Hello world');

// Comentarios

// Comentario de línea
/*
Comentario de mas 
de una
línea
*/

// Variables
let mensaje;

mensaje = "Hola Mundo";
//alert(mensaje);

mensaje = "Hola Mundo dos";
//alert(mensaje);

mensaje = "Hola Mundo tres";
//alert(mensaje);

let a= 3, b= 4, c = 5;
console.log(a + b);

let nombre = "Roberto";
let apellido = "Morales";

console.log("Hola",nombre,apellido);

// Nombrar Variables

// Camel Case
let nombreUno = "Roberto";
let nombreDos = "Morales";

// Nombrar como underscore
nombre_uno = "Roberto";
nombre_dos = "Morales";

// Nombre no comunes
let $ = 1;
let _ = 2;
console.log($,_);

// No puedo nombrar variables
// let 1a = 3;
// let primer-nombre = 4;

// Constantes
const PI = 3.141624;
const COLOR_NEGRO = "#FFFFF";


// TIPOS DE DATOS

// Dinámicamente tipado

let n = 123;
n = "Hola Mundo";
console.log(n);

// Tipo de dato Number
let x = 123;
x = 12.456;

// Infinity, - Infinity y NaN

// Infinity: Representa el infinito matemático.
// Es un valor especial que es MAYOR que cualquier cosa
console.log(1/0);

// Nan representa un erro de cálculo.
// Es el resultado de una operación matemática incorrecta o indefinida

console.log("hola" / 5);

// Nan es pegajoso. Cualquier operación que tengo un NaN devuelve NaN
console.log("hola"/ 2 + 5);

// Tipo de dato BigInt

// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

// Tipo String

let t= "a";
let texto = 'hola';
let texto_dos = ``; // backticks para interpolación de cadenas
let cadena = 'Roberto alias "Robert"';
let cadena_dos = "I can't do it";
console.log(cadena);
console.log(cadena_dos);

nombre = "Roberto";
apellido = "Morales";

console.log("Hola",nombre,apellido);
console.log(`Hola ${nombre} ${apellido}`)

// Tipo Booleano

// true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 5;
console.log(mayor);

// Valor null

// Valor especial que no pertenece a ningún tipo de dato anterior.
// forma un tipo de dato propio separado que contiene sólo el valor null.

let edad = null;
console.log(edad);

// en JS Null NO significa un objeto no existe
// Es sólo un valor especial que representa nada, vacío o desconocido

// Valor Undefined

// Valor especial que no pertenece a ningún tipo de dato anterior.
// El significado de undefined es valor no asignado.

let edad_dos;
console.log(edad_dos);

// Operador typeof o función typeof(x), devuelve el tipo de dato de una variable

console.log(typeof undefined); //undefined
console.log(typeof 0); // number
console.log(typeof 0.5); // number
console.log(typeof "Hola Mundo"); // string
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof null); // object ERROR DE JAVASCRIPT

// Conversiones de tipo de dato

// Existen dos tipo de conversiones explícita e implícita

// Convertir a String

valor = true;
valor = String(valor); // "true"

// Convertir a Número

// Conversiones numéricas en JS ocurren automáticamente en funciones
// matemáticas y expresiones

console.log(typeof('6'/'2')); //number
console.log(typeof(1 + '2')); // String

valor = "123";
valor = Number(valor);
console.log(Number('hola')); //NaN

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

// Convertir a Booleano

console.log(Boolean("hola")); //true

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/

