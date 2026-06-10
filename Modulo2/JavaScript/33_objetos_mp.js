// Crear un objeto — llaves {}
const persona = {
  nombre: "Ana",        // clave: "nombre", valor: "Ana"
  edad: 28,             // clave: "edad",   valor: 28
  activo: true          // clave: "activo", valor: true
};

// Acceso a propiedades — notación de punto (preferida)
console.log(persona.nombre);   // "Ana"
console.log(persona.edad);     // 28

// Acceso con corchetes — necesario cuando la clave es dinámica o tiene espacios
console.log(persona["nombre"]);         // "Ana"
const clave = "edad";
console.log(persona[clave]);            // 28

// Propiedad que no existe → undefined (no lanza error)
console.log(persona.telefono);          // undefined

// Añadir propiedades después de crear el objeto
persona.ciudad = "Madrid";
console.log(persona.ciudad);            // "Madrid"

// Eliminar propiedades
delete persona.activo;
console.log(persona.activo);            // undefined
console.log(persona);
persona.nombre="Maria";
console.log(persona);


// Métodos — funciones dentro de un objeto
const calculadora = {
  // Forma clásica
  sumar: function(a, b) {
    return a + b;
  },

  // Shorthand de método (ES6) — forma preferida
  restar(a, b) {
    return a - b;
  },

  // Arrow function — ojo con this (lo veremos más adelante)
  multiplicar: (a, b) => a * b
};

console.log(calculadora.sumar(3, 4));        // 7
console.log(calculadora.restar(10, 3));      // 7
console.log(calculadora.multiplicar(2, 5));  // 10
