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
const sumar1 = (a, b) => {
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

const espar = n => n % 2 === 0;
console.log(espar(4));

//Parametros por defecto 
function saludar1(nombre = "Mundo", saludo = "Hola") {
    console.log(`${saludo}, ${nombre}!`);
}
console.log(saludar1()); // "Hola, Mundo!"
console.log(saludar1("Alice")); // "Hola, Alice!"
console.log(saludar1("Bob", "¡Bienvenido!")); // "¡Bienvenido!, Bob!"

//Tambien funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3)); // 9 (3 elevado a la 2)
console.log(potencia(3, 3)); // 27 (3 elevado a la 3)

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo

const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

// Una función sin return devuelve undefined implícitamente
function sinReturn() {
  const x = 42;
  // no hay return
}
console.log(sinReturn());   // undefined

// return detiene la ejecución de la función
function esPar(n) {
  if (n % 2 === 0) {
    return true;    // sale aquí si n es par
  }
  return false;     // solo llega aquí si n es impar
}

// Forma más concisa — devolver la expresión directamente
const esParCorto = n => n % 2 === 0;

console.log(esPar(4));         // true
console.log(esParCorto(7));    // false

// operar recibe dos números y una función
function operar(a, b, operacion) {
  return operacion(a, b);
}

const sumar2   = (a, b) => a + b;
const restar  = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        // 13
console.log(operar(10, 3, restar));       // 7
console.log(operar(10, 3, multiplicar));  // 30

// Callback anónimo (arrow function inline)
console.log(operar(10, 3, (a, b) => a ** b));  // 1000

const global = "soy global";   // accesible en todo el archivo

function ejemploScope() {
  const local = "soy local";   // solo accesible dentro de esta función
  console.log(global);         // ✅ puede acceder a la variable global
  console.log(local);          // ✅
}

ejemploScope();
// console.log(local);         // ❌ ReferenceError — local no existe aquí

// Block scope — const y let respetan los bloques { }
{
  const dentroDeBloque = "solo aquí";
  console.log(dentroDeBloque);   // ✅
}
// console.log(dentroDeBloque);  // ❌ ReferenceError

// var NO respeta el block scope — otra razón para no usarlo
{
  var escapó = "estoy en todos lados";
}
console.log(escapó);   // ✅ "estoy en todos lados" — comportamiento inesperado