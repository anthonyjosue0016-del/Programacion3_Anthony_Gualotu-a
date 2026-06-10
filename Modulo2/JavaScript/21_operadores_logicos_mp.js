// ================================================
// MÓDULO 21: OPERADORES LÓGICOS - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Valores FALSY en JavaScript
console.log("=== VALORES FALSY ===");
const valoresFalsy = [false, 0, "", null, undefined, NaN];
console.log("Valores que evalúan a false:");
valoresFalsy.forEach(v => console.log(`  ${v}: ${Boolean(v)}`));

// Valores TRUTHY
console.log("\n=== VALORES TRUTHY ===");
console.log(`"false": ${Boolean("false")}`);   // true (string no vacío)
console.log(`"0": ${Boolean("0")}`);           // true
console.log(`-1: ${Boolean(-1)}`);            // true

/** OPERADORES LÓGICOS AND (&&) */
console.log("\n=== OPERADOR AND (&&) ===");

// Uso booleano clásico
const empleadoActivo = true;
const tienePermiso = true;

console.log(`empleadoActivo && tienePermiso: ${empleadoActivo && tienePermiso}`); // true

// Cortocircuito — devuelve el primer valor falsy o el último
console.log(`\n"Ana" && "Juan": ${"Ana" && "Juan"}`);  // "Juan"
console.log(`null && "Juan": ${null && "Juan"}`);      // null
console.log(`0 && "Juan": ${0 && "Juan"}`);            // 0

/** OPERADOR OR (||) */
console.log("\n=== OPERADOR OR (||) ===");

// Devuelve el primer valor truthy
console.log(`null || "默认值": ${null || "默认值"}`);  // "默认值"
console.log(`"Ana" || "Juan": ${"Ana" || "Juan"}`);    // "Ana"
console.log(`0 || 100: ${0 || 100}`);                  // 100

/** OPERADOR NOT (!) */
console.log("\n=== OPERADOR NOT (!) ===");
console.log(`!true: ${!true}`);
console.log(`!!true: ${!!true}`);

/** EJEMPLO PRÁCTICO: VALIDAR EMPLEADO */
console.log("\n=== VALIDACIÓN DE EMPLEADO ===");

const empleado = {
  nombre: "Juan",
  edad: 25,
  contrato: "indefinido"
};

// Validar con operadores lógicos
const esValido = empleado.nombre && empleado.edad >= 18 && empleado.contrato;
console.log(`¿Empleado válido? ${Boolean(esValido)}`);

// Usar || para valor por defecto
const departamento = empleado.departamento || "No asignado";
console.log(`Departamento: ${departamento}`);

// Usar && para ejecución condicional
empleado.edad >= 60 && console.log("⚠️ Revisar jubilación");