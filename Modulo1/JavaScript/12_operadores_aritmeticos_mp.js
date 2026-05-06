// ================================================
// MÓDULO 12: OPERADORES ARITMÉTICOS - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Datos de ejemplo
const empleadosTotales = 150;
const empleadosActivos = 120;

// Operaciones básicas
console.log("=== CÁLCULOS DE PERSONAL - MÓDULO 1 ===");
console.log(`Total empleados: ${empleadosTotales}`);
console.log(`Activos: ${empleadosActivos}`);
console.log(`Inactivos: ${empleadosTotales - empleadosActivos}`);  // 30 - resta
console.log(`Promedio por departamento: ${empleadosTotales / 4}`); // 37.5 - división

// Cálculo de nómina
const salarioBase = 2500;
const bonoAsistencia = 150;
const deducciones = 320;

console.log("\n=== CÁLCULO DE NÓMINA ===");
console.log(`Salario base: $${salarioBase}`);
console.log(`Bono asistencia: $${bonoAsistencia}`);
console.log(`Deducciones: $${deducciones}`);
console.log(`Salario neto: $${salarioBase + bonoAsistencia - deducciones}`);

// Módulo - verificar si un número es par o impar
const idEmpleado = 2847;
console.log(`\nID Empleado: ${idEmpleado}`);
console.log(`¿Es par? ${idEmpleado % 2 === 0}`);
console.log(`¿Es impar? ${idEmpleado % 2 !== 0}`);

// Potencia - calcular aumento porcentual
const salarioActual = 3000;
const porcentajeAumento = 0.10; // 10%
const nuevoSalario = salarioActual * (1 + porcentajeAumento);
console.log(`\nSalario actual: $${salarioActual}`);
console.log(`Aumento (10%): $${salarioActual * porcentajeAumento}`);
console.log(`Nuevo salario: $${nuevoSalario}`);