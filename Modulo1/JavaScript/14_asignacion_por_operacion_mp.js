// ================================================
// MÓDULO 14: ASIGNACIÓN POR OPERACIÓN - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Ejemplos de asignación con operaciones

let empleados = 100;

// += Añadir empleados
console.log(`Empleados iniciales: ${empleados}`);
empleados += 20;  // empleados = empleados + 20
console.log(`Después de +=20: ${empleados}`);

// -= Dar de baja empleados
empleados -= 5;   // empleados = empleados - 5
console.log(`Después de -=5: ${empleados}`);

// *= Multiplicar (ej: aumento del 50%)
let productividad = 80;
productividad *= 1.5;  // productividad = productividad * 1.5
console.log(`\nProductividad: ${productividad}`);

// /= Dividir (ej: distribuir entre departamentos)
let totalReportes = 50;
totalReportes /= 5;    // cada dept recibe 10
console.log(`Reportes por departamento: ${totalReportes}`);

// %= Módulo (ej: empleados por grupo)
let empleadosGrupo = 47;
empleadosGrupo %= 10;  // quedan 7 sin grupo completo
console.log(`\nEmpleados restantes sin grupo completo: ${empleadosGrupo}`);

// **= Potencia
let factorIncremento = 2;
factorIncremento **= 3; // 2^3 = 8
console.log(`Factor de incremento: ${factorIncremento}`);

// Ejemplo práctico: cálculo de nómina
let salarioBase = 2000;
let horasExtra = 10;
let valorHoraExtra = 25;

salarioBase += horasExtra * valorHoraExtra;
console.log(`\nSalario con horas extra: $${salarioBase}`);