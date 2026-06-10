// ================================================
// MÓDULO 27: SWITCH - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const departamento = "nomina";

switch (departamento) {
  case "recursos":
    console.log("Departamento de Recursos Humanos seleccionado.");
    break;
  case "nomina":
    console.log("Departamento de Nómina seleccionado.");
    break;
  case "contratacion":
    console.log("Departamento de Contratación seleccionado.");
    break;
  default:
    console.log("Departamento desconocido. Verifica el nombre.");
}

const accionEmpleado = "ingreso";

switch (accionEmpleado) {
  case "ingreso":
    console.log("Registrar ingreso de empleado.");
    break;
  case "salida":
    console.log("Registrar salida de empleado.");
    break;
  case "actualizar":
    console.log("Actualizar información del empleado.");
    break;
  default:
    console.log("Acción no reconocida en el sistema de RRHH.");
}
