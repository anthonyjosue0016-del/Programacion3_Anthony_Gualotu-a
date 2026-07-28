// ================================================
// MÓDULO 5: TEMPLATE LITERALS - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Datos del empleado
const nombre = "Juan Pérez";
const departamento = "Recursos Humanos";
const cargo = "Gerente de Área";
const salario = 3500.00;
const fechaIngreso = new Date("2022-06-15");

// Template literal con expresiones
console.log(`========================================`);
console.log(`  FICHA DEL EMPLEADO`);
console.log(`========================================`);
console.log(`Nombre: ${nombre}`);
console.log(`Departamento: ${departamento}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: $${salario.toFixed(2)}`);
console.log(`Fecha de ingreso: ${fechaIngreso.toLocaleDateString()}`);

// Cálculos en template
const antiguedadAños = 2026 - fechaIngreso.getFullYear();
console.log(`Antigüedad: ${antiguedadAños} años`);

// Multilínea
const mensaje = `
Estimado/a ${nombre},

Se le informa que ha sido promovido al cargo de ${cargo}.
Su nuevo salario será de $${salario * 1.1.toFixed(2)}

Atentamente,
Departamento de RRHH
`;

console.log(mensaje);