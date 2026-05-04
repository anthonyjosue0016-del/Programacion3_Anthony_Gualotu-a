// ================================================
// MÓDULO 23: IF / ELSE IF - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Evaluación de desempeño para determinar promoción
const puntajeEvaluacion = 82;

if (puntajeEvaluacion >= 90) {
  console.log("Promoción recomendada: Nivel Ejecutivo.");
} else if (puntajeEvaluacion >= 75) {
  console.log("Promoción recomendada: Nivel Senior.");
} else if (puntajeEvaluacion >= 60) {
  console.log("Mantener en su puesto actual y mejorar desempeño.");
} else {
  console.log("Se recomienda capacitación adicional.");
}

// Asignación de bonus según antigüedad
const antiguedad = 3; // años

if (antiguedad >= 10) {
  console.log("Bonus anual: 10% del salario.");
} else if (antiguedad >= 5) {
  console.log("Bonus anual: 5% del salario.");
} else {
  console.log("No corresponde bonus anual por antigüedad.");
}
