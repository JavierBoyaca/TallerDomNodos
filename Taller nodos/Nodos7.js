// Seleccionar todas las etiquetas <p> con la clase "ps"
var psElements = document.querySelectorAll('p.ps');

// Iterar sobre cada elemento seleccionado
psElements.forEach(function(element) {
    // Agregar estilos de color y tamaño de letra
    element.style.color = 'blue'; // Cambiar a cualquier color que desees
    element.style.fontSize = '16px'; // Cambiar el tamaño de la letra según sea necesario
});
