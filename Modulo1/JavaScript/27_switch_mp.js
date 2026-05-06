// ================================================
// MÓDULO 1: SWITCH - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const departamento = "Recursos Humanos";

switch (departamento) {
    case "Recursos Humanos":
        console.log("Gestión de empleados y procesos internos de RRHH.");
        break;
    case "Finanzas":
        console.log("Control de nómina y presupuesto del personal.");
        break;
    case "Tecnología":
        console.log("Apoyo técnico y administración de sistemas de RRHH.");
        break;
    case "Ventas":
        console.log("Coordinación de objetivos comerciales y cumplimiento de metas.");
        break;
    default:
        console.log("Departamento no registrado en el sistema de RRHH.");
}

console.log(`Departamento consultado: ${departamento}`);