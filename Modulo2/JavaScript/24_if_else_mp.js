// ================================================
// MÓDULO 23: IF / ELSE - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Determina si un empleado está activo en el sistema
const empleadoActivo = false;

if (empleadoActivo) {
  console.log("Empleado activo. Acceso permitido al panel de RRHH.");
} else {
  console.log("Empleado inactivo. Solicite reactivación en RRHH.");
}

// Evaluación simple de vacaciones disponibles
typeof diasVacaciones;
const diasVacaciones = 0;

if (diasVacaciones > 0) {
  console.log(`El empleado tiene ${diasVacaciones} día(s) de vacaciones disponibles.`);
} else {
  console.log("No hay días de vacaciones disponibles.");
}
