// ================================================
// MÓDULO 11: COMENTARIOS - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Comentario de una línea - para notas rápidas

/*
 * Comentario de múltiples líneas
 * Sistema de Control de Recursos Humanos
 * Módulo 1: Fundamentos de JavaScript
 */

// ================================================
// FUNCIÓN: Calcular antigüedad del empleado
// ================================================
function calcularAntiguedad(fechaIngreso) {
  const hoy = new Date();
  const ingreso = new Date(fechaIngreso);
  const diffTime = Math.abs(hoy - ingreso);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// TODO: Implementar cálculo de vacaciones
// TODO: Agregar validación de datos del empleado
// FIXME: Corregir formato de fecha en reportes

/**
 * Función para registrar un nuevo empleado
 * @param {string} nombre - Nombre completo del empleado
 * @param {string} departamento - Departamento asignado
 * @param {string} cargo - Cargo del empleado
 * @returns {object} Objeto con los datos del empleado
 */
function registrarEmpleado(nombre, departamento, cargo) {
  return {
    id: Date.now(),
    nombre: nombre,
    departamento: departamento,
    cargo: cargo,
    fechaRegistro: new Date()
  };
}

// Ejemplo de uso
const nuevoEmpleado = registrarEmpleado("Ana Pérez", "RRHH", "Gerente");
console.log("Empleado registrado:", nuevoEmpleado);