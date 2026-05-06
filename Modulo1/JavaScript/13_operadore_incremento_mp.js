// ================================================
// MÓDULO 13: OPERADORES DE INCREMENTO - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Contador de empleados
let contadorEmpleados = 0;

// Post-incremento (++)
console.log("=== REGISTRO DE EMPLEADOS - MÓDULO 1 ===");
console.log(`Contador inicial: ${contadorEmpleados}`);

// Simular registro de empleados
contadorEmpleados++;
console.log(`Empleado registrado. Contador: ${contadorEmpleados}`);

contadorEmpleados++;
console.log(`Empleado registrado. Contador: ${contadorEmpleados}`);

contadorEmpleados++;
console.log(`Empleado registrado. Contador: ${contadorEmpleados}`);

// Pre-incremento
let horasExtras = 5;
console.log(`\nHoras extras: ${horasExtras}`);
console.log(`++horasExtras: ${++horasExtras}`); // 6

// Decremento
let diasVacaciones = 10;
console.log(`\nDías de vacaciones: ${diasVacaciones}`);
diasVacaciones--;
console.log(`Después de usar uno: ${diasVacaciones}`);

// En expresiones
let empleadosNuevos = 3;
let total = contadorEmpleados + empleadosNuevos++;
console.log(`\nEmpleados nuevos: ${empleadosNuevos}`);
console.log(`Total calculado: ${total}`);

// Operadores compuestos
let productividad = 100;
productividad += 15; // productividad = productividad + 15
console.log(`\nProductividad: ${productividad}`);

productividad -= 10;
console.log(`Productividad después de decremento: ${productividad}`);