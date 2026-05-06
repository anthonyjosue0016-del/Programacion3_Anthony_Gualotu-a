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
