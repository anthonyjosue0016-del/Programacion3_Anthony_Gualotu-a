// ================================================
// MÓDULO 15: CASOS ESPECIALES - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Casos especiales en JavaScript para datos de RRHH

// NaN (Not a Number)
console.log("=== CASOS ESPECIALES ===");
console.log(`0/0 = ${0/0}`);           // NaN
console.log(`parseInt('ABC') = ${parseInt('ABC')}`); // NaN
console.log(`isNaN(NaN): ${isNaN(NaN)}`);

// Infinity
console.log(`\n10/0 = ${10/0}`);        // Infinity
console.log(`-10/0 = ${-10/0}`);       // -Infinity

// Precision
console.log(`\n0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004
console.log(`(0.1 * 10 + 0.2 * 10) / 10 = ${(0.1 * 10 + 0.2 * 10) / 10}`);

// Strings especiales
console.log(`\n'100' - 50 = ${'100' - 50}`);  // 50 (string a número)
console.log(`'100' + 50 = ${'100' + 50}`);  // "10050" (concatenación)

// Boolean en operaciones
console.log(`\ntrue + 1 = ${true + 1}`);    // 2
console.log(`false + 1 = ${false + 1}`);  // 1
console.log(`'true' + 1 = ${'true' + 1}`); // "true1"

// Null y undefined en operaciones
console.log(`\nnull + 5 = ${null + 5}`);    // 5
console.log(`undefined + 5 = ${undefined + 5}`); // NaN

// Ejemplo práctico: cálculo de salario
let horasTrabajadas = 40;
let valorHora = 25;
let descuento = null;

let salario = horasTrabajadas * valorHora;
if (descuento) {
  salario -= descuento;
}
console.log(`\nSalario calculado: $${salario}`);