// ================================================
// MÓDULO 1: IF / ELSE IF - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const puntuacionEvaluacion = 78; // puntuación de rendimiento

if (puntuacionEvaluacion >= 90) {
    console.log("Desempeño excelente: el empleado es candidato a bono y ascenso.");
} else if (puntuacionEvaluacion >= 75) {
    console.log("Desempeño bueno: el empleado mantiene su puesto y recibe reconocimiento.");
} else if (puntuacionEvaluacion >= 60) {
    console.log("Desempeño aceptable: plan de mejora recomendado.");
} else {
    console.log("Desempeño bajo: agendar reunión de retroalimentación con RRHH.");
}

console.log(`Puntuación de evaluación: ${puntuacionEvaluacion}`);