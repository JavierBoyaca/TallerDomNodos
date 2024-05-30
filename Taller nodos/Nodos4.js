// Seleccionar el elemento ol
var olElement = document.querySelector('ol');

// Crear un nuevo elemento ul
var ulElement = document.createElement('ul');
// Agregar el atributo de clase 'listado' al nuevo elemento ul
ulElement.classList.add('listado');

// Copiar los elementos hijos del ol al ul
while (olElement.firstChild) {
    ulElement.appendChild(olElement.firstChild);
}

// Reemplazar el ol por el ul en el DOM
olElement.replaceWith(ulElement);

// Seleccionar el elemento h2
var h2Element = document.querySelector('h2');

// Agregar la clase 'destacado' al elemento h2
h2Element.classList.add('destacado');

// Crear un nuevo elemento li para el ítem "Recoger a los niños"
var newItem = document.createElement('li');
newItem.textContent = 'Recoger a los niños';

// Insertar el nuevo ítem después del ítem "preparar almuerzo"
var listItem = document.querySelector('li:nth-child(4)'); // Seleccionar el ítem "preparar almuerzo"
listItem.parentNode.insertBefore(newItem, listItem.nextElementSibling);

// Aplicar la clase "cumplido" al ítem "desayunar", "preparar almuerzo" y "recoger a los niños"
document.querySelector('li:nth-child(1)').classList.add('cumplido'); // Desayunar
document.querySelector('li:nth-child(4)').classList.add('cumplido'); // Preparar almuerzo
newItem.classList.add('cumplido'); // Recoger a los niños

// Aplicar la clase "fallido" al ítem "ir al banco"
document.querySelector('li:nth-child(2)').classList.add('fallido'); // Ir al banco


