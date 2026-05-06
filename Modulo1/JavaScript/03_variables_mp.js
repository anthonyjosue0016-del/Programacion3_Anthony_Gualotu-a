// ================================================
// MÓDULO 3: VARIABLES - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// const — no se puede reasignar (datos fijos del empleado)
const nombreEmpleado = "Ana";           // tipo inferido: string
const idEmpleado = 2847;                // tipo inferido: number
const fechaIngreso = "2024-03-15";      // tipo inferido: string

// let — se puede reasignar (datos variables)
let estadoEmpleado = "Activo";
let horasTrabajadas = 0;
horasTrabajadas = horasTrabajadas + 8;  // permitido
horasTrabajadas++;                      // también permitido

// Ejemplo de actualización de estado
console.log(`Empleado: ${nombreEmpleado}`);
console.log(`ID: ${idEmpleado}`);
console.log(`Estado: ${estadoEmpleado}`);
console.log(`Horas trabajadas hoy: ${horasTrabajadas}`);

// Actualizar estado
estadoEmpleado = "Inactivo";
console.log(`Estado actualizado: ${estadoEmpleado}`);

// var — forma antigua, evitar en código moderno
var departamentoAntiguo = "Evitar var";