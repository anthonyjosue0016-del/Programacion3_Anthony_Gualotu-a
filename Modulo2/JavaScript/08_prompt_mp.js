// ================================================
// MÓDULO 8: PROMPT - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Este archivo requiere un archivo HTML para funcionar
// Ejemplo de uso con prompt en navegador

/*
<!DOCTYPE html>
<html>
<head>
  <title>Sistema RRHH - Registro</title>
</head>
<body>
  <h1>Registro de Empleado</h1>
  
  <script>
    // Usando prompt para capturar datos del empleado
    const nombre = prompt("Ingrese el nombre del empleado:");
    const departamento = prompt("Ingrese el departamento:");
    const cargo = prompt("Ingrese el cargo:");
    
    // Mostrar datos
    console.log("=== NUEVO EMPLEADO REGISTRADO ===");
    console.log("Nombre:", nombre);
    console.log("Departamento:", departamento);
    console.log("Cargo:", cargo);
    
    // Mostrar en página
    document.write("<h2>Datos Registrados</h2>");
    document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
    document.write("<p><strong>Departamento:</strong> " + departamento + "</p>");
    document.write("<p><strong>Cargo:</strong> " + cargo + "</p>");
  </script>
</body>
</html>
*/

// Versión para Node.js usando readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== REGISTRO DE NUEVO EMPLEADO ===");

rl.question('Nombre: ', (nombre) => {
  rl.question('Departamento: ', (dept) => {
    rl.question('Cargo: ', (cargo) => {
      console.log('\n=== EMPLEADO REGISTRADO ===');
      console.log('Nombre:', nombre);
      console.log('Departamento:', dept);
      console.log('Cargo:', cargo);
      rl.close();
    });
  });
});