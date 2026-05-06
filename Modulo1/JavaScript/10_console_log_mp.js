// ================================================
// MÓDULO 10: CONSOLE LOG - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Diferentes formas de mostrar información de RRHH - Módulo 1

// console.log - Información general
console.log("=== SISTEMA DE RECURSOS HUMANOS - MÓDULO 1 ===");
console.log("Iniciando sesión...");
console.log("Usuario: admin");
console.log("Perfil: Administrador de RRHH");

// console.info - Información informativa
console.info("Total de empleados registrados: 150");
console.info("Departamento con más empleados: Tecnología");
console.info("Promedio de antigüedad: 3.5 años");

// console.warn - Advertencias
console.warn("Advertencia: 5 empleados próximo a vencer contrato");
console.warn("Advertencia: Hay 3 solicitudes de vacaciones pendientes");

// console.error - Errores
console.error("Error: No se pudo conectar con la base de datos");
console.error("Error: El empleado ID 1234 no existe");

// console.table - Tabla de datos
const empleados = [
  { nombre: "Ana Pérez", cargo: "Gerente", dept: "RRHH" },
  { nombre: "Juan García", cargo: "Desarrollador", dept: "TI" },
  { nombre: "María López", cargo: "Contadora", dept: "Contabilidad" }
];
console.table(empleados);

// console.group - Grupos
console.group("DATOS DEL EMPLEADO - MÓDULO 1");
console.log("Nombre: Juan Pérez");
console.log("ID: 12345");
console.log("Departamento: Tecnología");
console.groupEnd();