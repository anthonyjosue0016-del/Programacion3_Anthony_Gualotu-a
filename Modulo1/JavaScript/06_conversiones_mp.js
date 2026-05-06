// ================================================
// MÓDULO 6: CONVERSIONES - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Conversiones de tipo en datos de empleados

// String a Número
const edadTexto = "28";
const edadNumero = Number(edadTexto);
console.log(`Edad como string: "${edadTexto}" → como número: ${edadNumero}`);

// Número a String
const idEmpleado = 12345;
const idString = String(idEmpleado);
console.log(`ID como número: ${idEmpleado} → como string: "${idString}"`);

// a parseInt y parseFloat
const salarioTexto = "3500.50";
console.log(`parseInt("3500.50"): ${parseInt(salarioTexto)}`);
console.log(`parseFloat("3500.50"): ${parseFloat(salarioTexto)}`);

// Boolean
console.log(`Boolean(1): ${Boolean(1)}`);
console.log(`Boolean(0): ${Boolean(0)}`);
console.log(`Boolean(""): ${Boolean("")}`);
console.log(`Boolean("false"): ${Boolean("false")}`);

// Conversiones en operaciones
const horasNormales = "40";
const horasExtras = 5;
console.log(`Horas totales: ${Number(horasNormales) + horasExtras}`);

// NaN (Not a Number)
console.log(`parseInt("ABC"): ${parseInt("ABC")}`); // NaN
console.log(`isNaN(NaN): ${isNaN(NaN)}`);