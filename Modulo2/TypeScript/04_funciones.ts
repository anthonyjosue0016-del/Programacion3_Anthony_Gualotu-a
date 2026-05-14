// funciones-basicas.ts

// Recibe dos números, devuelve número
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Recibe un string, devuelve string
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Recibe un número, devuelve boolean
function esPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void
function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(multiplicar(4, 7));    // 28
console.log(saludar("Ana"));       // Hola, Ana!
console.log(esPar(10));            // true
console.log(esPar(7));             // false
mostrar("Todo listo");             // [INFO] Todo listo


// funciones-con-if.ts

// Función que usa if/else para decidir qué devolver
function clasificarNota(nota: number): string {
  if (nota < 0 || nota > 10) {
    return "Nota fuera de rango";
  }

  if (nota >= 9) {
    return "Sobresaliente";
  } else if (nota >= 7) {
    return "Notable";
  } else if (nota >= 5) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
}

const notas: number[] = [10, 8.5, 6, 4.2, 11, -1];
for (const nota of notas) {
  console.log(`Nota ${nota}: ${clasificarNota(nota)}`);
}
// Nota 10:   Sobresaliente
// Nota 8.5:  Notable
// Nota 6:    Aprobado
// Nota 4.2:  Suspenso
// Nota 11:   Nota fuera de rango
// Nota -1:   Nota fuera de rango

// Función que valida datos con if y devuelve un mensaje
function validarPassword(password: string): string {
  if (password.length < 8) {
    return "❌ Muy corta (mínimo 8 caracteres)";
  }
  if (!/[A-Z]/.test(password)) {
    return "❌ Debe tener al menos una mayúscula";
  }
  if (!/[0-9]/.test(password)) {
    return "❌ Debe tener al menos un número";
  }
  return "✅ Contraseña válida";
}

const passwords: string[] = ["abc", "abcdefgh", "Abcdefgh", "Abcdefg1"];
for (const p of passwords) {
  console.log(`"${p}" → ${validarPassword(p)}`);
}

// parametros-opcionales.ts

// ? hace el parámetro opcional — dentro puede ser undefined
// Necesitas el if para manejarlo de forma segura
function presentar(nombre: string, edad?: number, ciudad?: string): string {
  let resultado = `Me llamo ${nombre}`;

  if (edad !== undefined) {
    resultado += ` y tengo ${edad} años`;
  }

  if (ciudad !== undefined) {
    resultado += `, vivo en ${ciudad}`;
  }

  resultado += ".";
  return resultado;
}

console.log(presentar("Ana"));
console.log(presentar("Ana", 28));
console.log(presentar("Ana", 28, "Madrid"));
// Me llamo Ana.
// Me llamo Ana y tengo 28 años.
// Me llamo Ana y tengo 28 años, vivo en Madrid.

// Función de búsqueda — retorna null si no encuentra
function buscarProducto(
  productos: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const producto of productos) {
    if (exacto) {
      // Búsqueda exacta
      if (producto === busqueda) return producto;
    } else {
      // Búsqueda parcial (contiene el texto)
      if (producto.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1) {
        return producto;
      }
    }
  }
  return null;  // no encontró nada
}

export {};

const catalogo = ["Laptop Pro", "Teclado Mecánico", "Monitor 4K", "Ratón Inalámbrico"];

console.log(buscarProducto(catalogo, "laptop"));         // Laptop Pro
console.log(buscarProducto(catalogo, "laptop", true));   // null (exacto, no coincide)
console.log(buscarProducto(catalogo, "Teclado Mecánico", true)); // Teclado Mecánico
console.log(buscarProducto(catalogo, "tablet"));         // null