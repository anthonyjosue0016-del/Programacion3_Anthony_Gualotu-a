// ================================================
// MÓDULO 7: READLINE - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sistema de consulta de empleado
console.log("=========================================");
console.log("  CONSULTA DE EMPLEADO - SISTEMA RRHH");
console.log("=========================================");

function preguntarEmpleado(pregunta) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function consultarEmpleado() {
  const nombre = await preguntarEmpleado("Ingrese el nombre del empleado: ");
  const departamento = await preguntarEmpleado("Ingrese el departamento: ");
  const cargo = await preguntarEmpleado("Ingrese el cargo: ");
  
  console.log("\n=== DATOS DEL EMPLEADO ===");
  console.log(`Nombre: ${nombre}`);
  console.log(`Departamento: ${departamento}`);
  console.log(`Cargo: ${cargo}`);
  console.log("==========================\n");
  
  rl.close();
}

consultarEmpleado();