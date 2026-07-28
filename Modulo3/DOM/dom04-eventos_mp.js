
function mostrarAlerta() {
    alert('HOla desde el boton desde DOMContentLoaded');
}

function agregarEmpleado() {
    const lista = document.getElementById("Lista-empleados1");
    const nuevoEmpleado = document.createElement("li");
    nuevoEmpleado.textContent = "Empleado agregado";
    lista.appendChild(nuevoEmpleado);
}

function cambiarTexto() {
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "Texto del pÃ¡rrafo modificado desde funciÃ³n";
}

function textocambiado() {
    const titulo2 = document.getElementById("titulo2");
    titulo2.textContent = "Titulo cambiado desde Listener";
}


document.getElementById("btn3").addEventListener("click", function() {
    const lista2 = document.getElementById("Lista-empleados2");
    const nuevoEmpleado = document.createElement("li");
    nuevoEmpleado.textContent = "Nuevo empleado desde Listener";
    lista2.appendChild(nuevoEmpleado);
}


);
