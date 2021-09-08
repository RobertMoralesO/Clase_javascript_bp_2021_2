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


// Operadores Binarios

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; // mod
res = a ** b; // potencia



// Funciones

function sumar(a, b){
    return a + b;
}

console.log(sumar(4, 5, 6));

//HUF que dado un nombre y un apellido, salude a la persona;

function saludar(nombre, apellido){
    return `Hola ${nombre} ${apellido}`;
}
console.log(saludar('Roberto', 'Morales'));

//HUF que dado un número lo eleve al cuadrado

function elevar(numero){
    return numero ** 2;
}

console.log(elevar(5));

// HUF que tome el valor de un producto, le aplique el 20%
// de descuento, imprima el valor del producto inicial,
// el valor con descuento y el valor ahorrado

function valor_descuento(valor_producto){
    let descuento = valor_producto * 0.2;
    let valor_final = valor_producto - descuento;
    return ` Valor inicial: ${valor_producto} 
    \n Valor descuento: ${descuento} 
    \n Valor Final: ${valor_final}`;
}

console.log(valor_descuento(150000));


// COMPARACIONES

// Al comparar valores de diferentes tipos, JS primero convierte los valores a números
// Toda comparación con NaN es false.
// el undefined y el null SON IGUALES entre sí pero no a ningún valor

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/



console.log(2 > true); //true
console.log(2 < true); //false
console.log('2' > 1); // true
console.log('casa' > 0); // false
console.log('casa' < 0); // false
console.log('casa' == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true ERROR DE JAVASCRIPT
console.log(null == undefined); // true

// Sentencia if

if(4 < 5) console.log('If de línea');

if(4 >5){
    b = 5 + 3;
}

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
x = 0;
if(x){
    console.log('entró');
}

if('az'){
    console.log('entró en la segunda línea');
}

// Operador ternario
let edad_tres = 45;
let resultado = edad_tres > 18 ? 30 : 20;

if(edad_tres > 18){
    resultado = 30;
}else if(edad_tres == 0){
    resultado = 0;
}else{
    resultado = 28;
}
console.log(resultado);

// Ciclos

let i = 1;
while(i <= 10){
    console.log(`El valor de i es: ${i}`);
    i++;
}

console.log('*************');
i = 1;
do{
    console.log(`El valor de i es: ${i}`);
    i++;
}while(i<=10);

// Ciclo for

console.log('*************');

for(i=0; i <=10; i++){
    console.log(`El valor de i es ${i}`);
}

// switch

a = 2 + 2;
switch(a){
    case 3:
        console.log('El resutlado es 3');
        break;
    case 4:
        console.log('El resultado es 4');
        break;
    default:
         console.log('Ninguna de las Anteriores');
}

// Funciones

function saludar_tres(){
    console.log('Hola Mundo');
}

saludar_tres();

// Variable local

function saludar_nombre(){
    let nomb = "Roberto";
    console.log(`Hola ${nomb}`);
}
//console.log(`Hola ${nomb}`);

// Variable externa

let nomb = "Roberto";
function saludar_nombre(){
    console.log(`Hola ${nomb}`);
}
console.log(`Hola ${nomb}`);

// Parámetros de una función
function mensaje_(de, texto){
    console.log(`${de}: ${texto}`);
}

mensaje_('Roberto', 'Hola María')
mensaje_('Roberto')
mensaje_('María', 'Hola Roberto')

// Parámetros predeterminados

function mensaje_2(de, texto=''){
    console.log(`${de}: ${texto}`);
}

mensaje_2('Roberto')
mensaje_('María', 'Hola Roberto')

// Retorno en javascript

function sumar_dos(a, b){
    return a + b;
}



// HUF que devuelva la sumatoria de los números pares del 1 al x

function sumatoria_pares(x){
    let suma = 0;
    for(i = 1; i <=x; i++){
        if(!(i%2)) suma = suma + i;
    }
    return suma;
}

console.log(sumatoria_pares(10));


// Expresión y Declaración de una función

// Declarar una función
function hola_(){
    return 'Hola mundo';
}

console.log(hola_());
console.log(hola_);
let aux = hola_;
console.log(aux);
console.log(aux());

// Expresión de una función

let hola_dos = function(){
    return 'Hola Mundo dos';
}

console.log(hola_dos);
console.log(hola_dos());

// Functiones flecha

let hola_tres = function(){
    console.log('Hola MUndo tres');
}

let hola_tres_retorno = function(){
    return 'Hola Mundo tres';
}

hola_tres_retorno = ()=> {
    return ('Hola Mundo tres');
}



