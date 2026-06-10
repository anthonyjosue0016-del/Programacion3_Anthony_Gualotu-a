// ================================================
// MÓDULO 17: EJEMPLO BÁSICO - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Ejemplo completo de gestión de empleados

// Datos del empleado
const empleado = {
  nombre: "Juan Pérez",
  id: 12345,
  departamento: "Tecnología",
  cargo: "Desarrollador Senior",
  salario: 3500,
  activo: true
};

// Función para mostrar información
function mostrarEmpleado(emp) {
  console.log("=== DATOS DEL EMPLEADO ===");
  console.log(`ID: ${emp.id}`);
  console.log(`Nombre: ${emp.nombre}`);
  console.log(`Departamento: ${emp.departamento}`);
  console.log(`Cargo: ${emp.cargo}`);
  console.log(`Salario: $${emp.salario}`);
  console.log(`Estado: ${emp.activo ? "Activo" : "Inactivo"}`);
}

// Función para calcular salary neto
function calcularSalarioNeto(salarioBruto) {
  const descuento = salarioBruto * 0.15; // 15% de descuento
  return salarioBruto - descuento;
}

// Ejecutar
mostrarEmpleado(empleado);
console.log(`\nSalario bruto: $${empleado.salario}`);
console.log(`Salario neto: $${calcularSalarioNeto(empleado.salario)}`);