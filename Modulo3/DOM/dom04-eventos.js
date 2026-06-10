
function mostrarAlerta() {
    alert('HOla desde el boton desde DOMContentLoaded');
}

function agregarProducto() {
    const lista = document.getElementById("Lista-productos1");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Producto agregado";
    lista.appendChild(nuevoProducto);
}

function cambiarTexto() {
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "Texto del párrafo modificado desde función";
}

function textocambiado() {
    const titulo2 = document.getElementById("titulo2");
    titulo2.textContent = "Titulo cambiado desde Listener";
}


document.getElementById("btn3").addEventListener("click", function() {
    const lista2 = document.getElementById("Lista-productos2");
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo producto desde Listener";
    lista2.appendChild(nuevoProducto);
}


);