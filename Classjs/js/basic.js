console.log("Holiiii")

// Tipos datos
let num =1;

console.log(num);

let cadena = "Cadena 1";
let cadena2 = 'cadena 2';

console.log(cadena+cadena2)

let codl;
console.log(typeof codl)

let N = null;
console.log(typeof N)

function miFuncion(){

};

console.log(miFuncion())

var nume = 0;
let gato = "michi"

{let gato3 = "sssss"}


function misGatos(){
    let gato2= "jam"
    console.log(gato2);
    console.log(gato)
}
console.log(gato)
misGatos()

let CadenaFull = `Uno es ${cadena} y la otra es ${cadena2}`;
console.log(CadenaFull)

// Incrementos
let a = 3; b=2;
let z = a + b;

console.log(z);

z = ++a; // primero se suma y luego se asigna
console.log(z)
console.log(a)

z = b++; // Primero se asigna a z y luego se suma
console.log(z)
console.log(b)

//OperadorTernario

// SINTAXIS :    let x = (CONDICION) ? VALORTRUE : VALORFALSE;

let y = 4 > 5 ? "Sí es verdadero" : "Híjole no es";
console.log(y)