// ================================================
// MÓDULO 26: OPERADOR TERNARIO - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Estado de disponibilidad de un empleado según ausencias
const diasAusencia = 2;
const estadoAsistencia = diasAusencia > 3 ? "Ausente" : "Presente";
console.log(`Estado de asistencia: ${estadoAsistencia}`);

// Determina si un empleado recibe bono por antigüedad
const antiguedadEmpleado = 6; // años
const bonificacion = antiguedadEmpleado >= 5 ? 500 : 200;
console.log(`Bonus por antigüedad: $${bonificacion}`);

// Mensaje breve según aprobación de evaluación
const puntaje = 88;
const mensajeEvaluacion = puntaje >= 80 ? "Evaluación exitosa" : "Evaluación requiere mejora";
console.log(mensajeEvaluacion);
