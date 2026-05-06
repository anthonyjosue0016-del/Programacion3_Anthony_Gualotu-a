// ================================================
// MÓDULO 1: IF / ELSE - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const estadoSolicitud = "aprobada"; // puede ser: aprobada, rechazada

if (estadoSolicitud === "aprobada") {
    console.log("Solicitud de contratación aprobada. Continuar proceso de onboarding.");
} else {
    console.log("Solicitud de contratación rechazada. Enviar retroalimentación al candidato.");
}