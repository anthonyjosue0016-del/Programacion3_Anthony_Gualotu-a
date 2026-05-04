// ================================================
// MÓDULO 25: IF ANIDADOS - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Control sencillo de acceso según sesión, rol y sección
const sesionActiva = true;
const rolUsuario = "recursos";
const seccionSolicitada = "nomina";

if (sesionActiva) {
  if (rolUsuario === "admin") {
    console.log("Acceso completo concedido a RRHH.");
  } else if (rolUsuario === "recursos") {
    if (seccionSolicitada === "nomina") {
      console.log("Acceso concedido a Nómina.");
    } else if (seccionSolicitada === "contratacion") {
      console.log("Acceso concedido a Contratación.");
    } else {
      console.log("Acceso restringido: sección no disponible para RRHH.");
    }
  } else {
    console.log("Acceso denegado: solo personal de RRHH puede ingresar.");
  }
} else {
  console.log("Sesión no iniciada. Redirigir a login.");
}

// Validación de solicitud de permiso según estado y tipo
const permisoActivo = true;
const tipoPermiso = "enfermedad";

if (permisoActivo) {
  if (tipoPermiso === "vacaciones") {
    console.log("Solicitud de vacaciones aprobada.");
  } else if (tipoPermiso === "enfermedad") {
    console.log("Solicitud de permiso médico aprobada.");
  } else {
    console.log("Tipo de permiso no reconocido. Consulte a RRHH.");
  }
} else {
  console.log("No hay solicitud de permiso activa.");
}
