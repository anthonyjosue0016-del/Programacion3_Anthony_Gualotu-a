const prompt = require("prompt-sync")();/*
const monto_compra = prompt("Monto de la Compra: ");
const monto = parseInt(monto_compra, 10);

const compra = 100;

if (monto >=100) {
    console.log("Aplica Descuento");
}

const velocidad = prompt("Velocidad del Vehículo: ");
const velocidad_corregida = parseInt(velocidad, 10);
if(velocidad_corregida>=90){
    console.log("Exceso de vELOCIDAD");
}

const asis = prompt ("Numero de Estudiantes Asistidos:  ")
const asistencia = parseInt(asis, 10);
if(asistencia<=70){
    console.log("Pierde materia oir faltas");
}

const prompt = require("prompt-sync")();
const productos = prompt("Cantidad Productos Comprados: ");
const productos_comprados = parseInt(productos, 10);

if(productos_comprados >=10){
    console.log("Descuento Aplicado");
} else {
    console.log("Sin descuento");
}

const contrasena = prompt("Ingresa tu Contraseña: ");
const contrasenaCorrecta  = "1234";

if(contrasena ==contrasenaCorrecta){
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

const hora = prompt("Ingresa la hora enn formatado 24H");
const hora_actual = parseInt(hora, 10);

if (hora_actual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}

const energia = prompt("Ingresa tu consumo de energia (kWh):");
const consumo_energia = parseINT(energia,10);

if (consumo_energia <=100){
    console.log("Consumo bajo")
} else if (consumo_energia <=300){
    Console.log("Consumo Medio");
}else {
    console.log("Consumo Alto");
}

const sueldo = prompt("Ingresa tu sueldo: ");
const sueldo_actual = parseInt(sueldo, 10);

if (sueldo_actual < 500){
    console.log("Sueldo Básico")
}else if (sueldo_actual >=500 && sueldo_actual <=1000){
    console.log("Sueldo Medio")
}else {
    console.log("Sueldo Alto")
}

const dia =prompt("Ingrese el día de la Semana (1-7): ");
const dia_semana = parseInt(dia, 10);

if (dia_semana >=1 && dia_semana <=5){
    console.log("Dia Laboral")
}else if(dia_semana ==6 || dia_semana ==7){
    console.log("Fin de Semana")
}

const total =prompt("Total de la Compra: ");
const total_compra = parseInt(total, 10);
const miembro = prompt("Es miembrode descuentos (si/no): ");

if(total_compra >=50){
    if(miembro=="si"){
        console.log("Descuento Especial");
    }else {
        console.log("Descuento normal");
    }
} else {
    console.log("No aplica descuento");
}

const edad =prompt("Ingresa tu edad: ");
const edad_total = parseInt(edad, 10);
const Estudia = prompt("Usted se Encuentra actualmente estudiando (si/no): ");

if(edad_total <18){
    if(estudia=="si"){
        console.log("Estudiante Activo");
    }else {
        console.log("Debe estar Estudiando");
    }
} else {
    console.log("Adulto");
}



const espar = n => n % 2===0;

console.log(espar(3));


const base = prompt("Ingresa la base del triángulo: ");
const altura = prompt("Ingresa la altura del triángulo: ");
const area = (base, altura) => (base * altura) / 2;
const area_triangulo = area(parseInt(base, 10), parseInt(altura, 10));
console.log(`El área del triángulo es: ${area_triangulo}`);
*/

function registrar(persona, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${persona}] ${msg}`);
  }
}

registrar("INFO", "Anthony", "Gualotuña", "21 años", "Ecuador");

const celsius = [0, 15, -5, 22, 37, 100, -10, 28];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);

console.log(fahrenheit);*/
