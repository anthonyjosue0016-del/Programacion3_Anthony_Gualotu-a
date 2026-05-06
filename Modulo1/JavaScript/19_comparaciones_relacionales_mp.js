// ================================================
// MÓDULO 19: COMPARACIONES RELACIONALES - RRHH (Módulo 1)
// Sistema de Control de Recursos Humanos
// ================================================

// Comparaciones en datos de empleados - Módulo 1

const empleados = 10;
const puestosDisponibles = 20;

console.log("=== COMPARACIONES RELACIONALES - MÓDULO 1 ===");
console.log(`Empleados: ${empleados}`);
console.log(`Puestos disponibles: ${puestosDisponibles}`);
console.log(`empleados > puestosDisponibles: ${empleados > puestosDisponibles}`); // false
console.log(`empleados < puestosDisponibles: ${empleados < puestosDisponibles}`); // true
console.log(`empleados >= 10: ${empleados >= 10}`);  // true
console.log(`empleados <= 9: ${empleados <= 9}`);    // false

// Con strings — se compara por orden Unicode
console.log("\n=== COMPARACIONES DE STRINGS ===");
console.log(`"Ana" < "Juan": ${"Ana" < "Juan"}`);      // true
console.log(`"B" < "a": ${"B" < "a"}`);                // true
console.log(`"10" > "9": ${"10" > "9"}`);              // false (string)
console.log(`10 > 9: ${10 > 9}`);                       // true (número)

// Comparación mixta
console.log("\n=== COMPARACIÓN MIXTA ===");
console.log(`"10" > 9: ${"10" > 9}`);    // true
console.log(`"RRHH" > 1: ${"RRHH" > 1}`); // false

// Ejemplo práctico
const empleado = {
  nombre: "Ana",
  edad: 28,
  experiencia: 5
};

console.log("\n=== EVALUACIÓN DE CANDIDATO - MÓDULO 1 ===");
console.log(`Edad: ${empleado.edad}`);
console.log(`Experiencia: ${empleado.experiencia} años`);
console.log(`¿Es mayor de edad? ${empleado.edad >= 18}`);
console.log(`¿Tiene experiencia suficiente? ${empleado.experiencia >= 3}`);