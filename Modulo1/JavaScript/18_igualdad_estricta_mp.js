// ================================================
// MÓDULO 18: IGUALDAD ESTRICTA - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Diferencia entre == y === en datos de RRHH - Módulo 1

console.log("=== IGUALDAD ESTRICTA - MÓDULO 1 ===");

// Ejemplo con tipos de datos
const idEmpleado = "12345";
const idNumero = 12345;

console.log(`idEmpleado (string): "${idEmpleado}"`);
console.log(`idNumero (number): ${idNumero}`);
console.log(`== : ${idEmpleado == idNumero}`);   // true (convierte)
console.log(`===: ${idEmpleado === idNumero}`);  // false (tipos distintos)

// Comparaciones de estado
const estadoActivo = "Activo";
const estadoBoolean = true;

console.log(`\nEstado string: "${estadoActivo}"`);
console.log(`Estado boolean: ${estadoBoolean}`);
console.log(`== : ${estadoActivo == estadoBoolean}`);  // true
console.log(`===: ${estadoActivo === estadoBoolean}`); // false

// Best practice: siempre usar ===
function buscarEmpleado(id, lista) {
  for (const emp of lista) {
    if (emp.id === id) {  // comparación estricta
      return emp;
    }
  }
  return null;
}

const empleados = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "María" }
];

console.log(`\nBuscar empleado ID 2:`);
console.log(buscarEmpleado(2, empleados));