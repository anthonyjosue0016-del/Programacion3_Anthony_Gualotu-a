// ================================================
// MÓDULO 22: IF SIMPLE - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Verifica si un empleado tiene derecho a descanso por horas trabajadas
const horasTrabajadas = 42;
const HORAS_MINIMAS_DESCANSO = 40;

if (horasTrabajadas >= HORAS_MINIMAS_DESCANSO) {
  console.log("El empleado tiene derecho a descanso esta semana.");
}

console.log(`Horas trabajadas: ${horasTrabajadas}`);

// Verifica si el salario cumple el mínimo legal en RRHH
const salarioEmpleado = 4200;
const SALARIO_MINIMO = 4100;

if (salarioEmpleado >= SALARIO_MINIMO) {
  console.log("Salario dentro del rango legal.");
}
