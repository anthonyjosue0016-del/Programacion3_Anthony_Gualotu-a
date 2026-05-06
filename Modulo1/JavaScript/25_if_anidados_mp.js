// ================================================
// MÓDULO 1: IF ANIDADOS - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const empleadoActivo = true;
const evaluacionDesempeno = 85; // sobre 100

if (empleadoActivo) {
    if (evaluacionDesempeno >= 90) {
        console.log("Empleado activo con desempeño sobresaliente: evaluar ascenso.");
    } else if (evaluacionDesempeno >= 70) {
        console.log("Empleado activo con buen desempeño: continuar seguimiento.");
    } else {
        console.log("Empleado activo con desempeño bajo: preparar plan de mejora.");
    }
} else {
    console.log("Empleado inactivo: verificar estado administrativo y suspender beneficios.");
}