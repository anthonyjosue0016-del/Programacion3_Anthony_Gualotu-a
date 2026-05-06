// ================================================
// MÓDULO 20: COMPARACIÓN NULL - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Comparaciones con null y undefined - Módulo 1

console.log("=== COMPARACIONES CON NULL - MÓDULO 1 ===");

// Con igualdad estricta
console.log(`null === null: ${null === null}`);        // true
console.log(`undefined === undefined: ${undefined === undefined}`); // true
console.log(`null === undefined: ${null === undefined}`);   // false

// Con igualdad débil
console.log(`\nnull == undefined: ${null == undefined}`);    // true
console.log(`null == 0: ${null == 0}`);                    // false
console.log(`null == false: ${null == false}`);            // false

// Con operadores relacionales
console.log("\n=== OPERADORES RELACIONALES ===");
console.log(`null > 0: ${null > 0}`);    // false
console.log(`null == 0: ${null == 0}`);  // false
console.log(`null >= 0: ${null >= 0}`);  // true (null se convierte a 0)

console.log(`\nundefined > 0: ${undefined > 0}`);   // false
console.log(`undefined < 0: ${undefined < 0}`);     // false
console.log(`undefined == 0: ${undefined == 0}`);   // false

// Ejemplo práctico: datos opcionales de empleado
const empleado = {
  nombre: "Juan Pérez",
  departamento: "Tecnología",
  supervisor: null  // Sin asignar
};

console.log("\n=== DATOS DE EMPLEADO - MÓDULO 1 ===");
console.log(`Nombre: ${empleado.nombre}`);
console.log(`Departamento: ${empleado.departamento}`);
console.log(`Supervisor asignado: ${empleado.supervisor}`);

// Verificar si tiene supervisor
console.log(`¿Tiene supervisor? ${empleado.supervisor !== null}`);

// Verificar si está definido
console.log(`¿Supervisor está definido? ${empleado.supervisor !== undefined}`);