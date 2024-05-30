// Crear el nuevo elemento h1
var h1 = document.createElement('h1');
// Establecer su contenido de texto
h1.textContent = 'My presentation';
// Seleccionar el div existente
var div = document.querySelector('div');
// Insertar el nuevo h1 antes del div
document.body.insertBefore(h1, div);

// Aplicar color al h1
h1.style.color = 'blue'; // Cambia 'blue' por el color que prefieras

// Crear el nuevo elemento p
var pNew = document.createElement('p');
// Establecer su contenido de texto
pNew.textContent = 'My best friend is Mickey';
// Seleccionar el p existente dentro del div
var pExisting = div.querySelector('p');
// Insertar el nuevo p después del p existente
pExisting.insertAdjacentElement('afterend', pNew);

// Aplicar estilo al último p
pNew.style.fontWeight = 'bold'; // Hacer la letra en negrita
pNew.style.backgroundColor = 'yellow'; // Cambia 'yellow' por el color de fondo que prefieras

