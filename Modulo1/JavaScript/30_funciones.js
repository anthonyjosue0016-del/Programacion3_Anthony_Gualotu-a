// Funcion declarada
function saludo () {
    console.log("¡Hello World!");
}
saludo(); 

// Funcion expresada
const saludar=function() {
    console.log("Hola con funcion expresada!");
}
saludar();

//funcion flecha
const saludarFlecha= () => {
    console.log("Hola con funcion flecha!");
}
saludarFlecha();

//function Anonima
setTimeout(function() {
    console.log("Ejecutando....");
}, 1000);

//function con parametros
function saludarConParametro(nombre) {
    console.log("Hola "+nombre);
}
saludarConParametro("Anthony");

function sumar(a,b) {
    return a+b;
}
resultado= sumar(5,3);
console.log(resultado);

//sintaxis: function nombre(parametros) {cuerpo de la funcion}
function saludar1 (nombre) {
    console.log(`¡Hola ${nombre}!`);
}
console.log(saludar1("Anthony"));

// Sintaxis completa
const sumar = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"