// ================================================
// MÓDULO 1: OPERADOR TERNARIO - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const diasVacaciones = 12;
const permisoEspecial = diasVacaciones >= 15
    ? "El empleado califica para vacaciones extendidas."
    : "El empleado tiene vacaciones normales disponibles.";

console.log(permisoEspecial);
console.log(`Días de vacaciones actuales: ${diasVacaciones}`);