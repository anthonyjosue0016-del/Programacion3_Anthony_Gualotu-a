// ================================================
// MÓDULO 16: MATH - RRHH
// Sistema de Control de Recursos Humanos
// ================================================

// Funciones Math para cálculos de RRHH

console.log("=== FUNCIONES MATEMÁTICAS ===");

// Redondeo
const promedioEdad = 34.56;
console.log(`Promedio edad: ${promedioEdad}`);
console.log(`Math.floor: ${Math.floor(promedioEdad)}`);  // 34
console.log(`Math.ceil: ${Math.ceil(promedioEdad)}`);   // 35
console.log(`Math.round: ${Math.round(promedioEdad)}`); // 35

// Valor absoluto
const diasPendientes = -5;
console.log(`\nDías pendientes: ${Math.abs(diasPendientes)}`);

// Potencia y raíz
const empleados = 125;
console.log(`\nRaíz cuadrada de empleados: ${Math.sqrt(empleados)}`);
console.log(`2^10 (empleados por equipo): ${Math.pow(2, 10)}`);

// Random
console.log(`\nRandom(): ${Math.random()}`);
// Número aleatorio entre 1 y 100
const idAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(`ID aleatorio generado: ${idAleatorio}`);

// Min y Max
console.log(`\nMenor edad: ${Math.min(22, 25, 28, 24)}`);
console.log(`Mayor edad: ${Math.max(22, 25, 28, 24)}`);

// Trunc
console.log(`\nMath.trunc(4.9): ${Math.trunc(4.9)}`);  // 4
console.log(`Math.trunc(-4.9): ${Math.trunc(-4.9)}`); // -4

// Ejemplo práctico: calcular bono
const puntuacion = 85.7;
const bonoMaximo = 500;
const bono = Math.round((puntuacion / 100) * bonoMaximo);
console.log(`\nBono calculado: $${bono}`);