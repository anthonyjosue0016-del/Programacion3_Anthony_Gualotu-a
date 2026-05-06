// ================================================
// MÓDULO 4: TIPOS DE VARIABLES - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Números — un solo tipo para enteros y decimales
const enteroEmpleados = 150;           // total de empleados
const decimalHoraExtra = 1.5;           // factor de hora extra
const grandeId = 9_007_199_254_740_991; // ID grande
const negativoDiasVacaciones = -5;     // días pendientes (negativo)

// String — texto entre comillas simples, dobles o backticks
var nombreEmpleado = 'Ana';            // tipo inferido: string
const simpleDepartamento = 'RRHH';
const dobleCargo = "Gerente";
const templateBienvenida = `Bienvenido ${nombreEmpleado} al sistema de RRHH`;

// Boolean
const verdaderoActivo = true;
const falsoInactivo = false;

// null y undefined — dos formas de "sin valor"
const sinDatos = null;                 // ausencia intencional de valor
let departamentoNoAsignado;            // undefined — declarada pero sin valor

// Symbol — identificador único (avanzado)
const idEmpleado = Symbol("id");

// BigInt — enteros de precisión arbitraria
const enormeId = 9999999999999999999n; // sufijo n

// typeof — conocer el tipo en tiempo de ejecución
console.log(typeof 150);           // "number"
console.log(typeof "Ana");          // "string"
console.log(typeof true);           // "boolean"
console.log(typeof null);           // "object" ← peculiaridad de JS