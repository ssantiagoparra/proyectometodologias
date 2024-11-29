// Array para almacenar los beneficios
let benefits = [
    { id: 1, name: "Beneficio 1", description: "Descripción del beneficio 1" },
    { id: 2, name: "Beneficio 2", description: "Descripción del beneficio 2" }
];

// Función para renderizar los beneficios en la tabla
function renderBenefits() {
    const tableBody = document.querySelector('#benefitsTable tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla

    benefits.forEach((benefit) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${benefit.id}</td>
            <td>${benefit.name}</td>
            <td>${benefit.description}</td>
            <td>
                <button class="btn btn-warning" onclick="editBenefit(${benefit.id})">Editar</button>
                <button class="btn btn-danger" onclick="deleteBenefit(${benefit.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Llamada inicial para renderizar los beneficios
renderBenefits();

// Función para agregar un nuevo beneficio
document.querySelector('#saveBenefitButton').addEventListener('click', () => {
    const name = document.querySelector('#benefitName').value;
    const description = document.querySelector('#benefitDescription').value;

    if (name && description) {
        const newBenefit = {
            id: benefits.length + 1, // Asignar un ID único
            name,
            description
        };

        benefits.push(newBenefit); // Agregar el nuevo beneficio al array
        renderBenefits(); // Actualizar la tabla
        document.querySelector('#addBenefitForm').reset(); // Limpiar el formulario
        document.querySelector('#addBenefitModal').modal('hide'); // Cerrar el modal
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Función para editar un beneficio
function editBenefit(id) {
    const benefit = benefits.find((benefit) => benefit.id === id);

    if (benefit) {
        // Llenar el formulario con los datos del beneficio
        document.querySelector('#benefitName').value = benefit.name;
        document.querySelector('#benefitDescription').value = benefit.description;

        // Cambiar el botón para actualizar
        const saveButton = document.querySelector('#saveBenefitButton');
        saveButton.textContent = 'Actualizar';
        saveButton.removeEventListener('click', addBenefit);
        saveButton.addEventListener('click', () => updateBenefit(id));
    }
}

// Función para actualizar un beneficio
function updateBenefit(id) {
    const name = document.querySelector('#benefitName').value;
    const description = document.querySelector('#benefitDescription').value;

    if (name && description) {
        const index = benefits.findIndex((benefit) => benefit.id === id);

        if (index !== -1) {
            benefits[index] = { id, name, description }; // Actualizar el beneficio en el array
            renderBenefits(); // Volver a renderizar la tabla
            document.querySelector('#addBenefitForm').reset(); // Limpiar el formulario
            document.querySelector('#addBenefitModal').modal('hide'); // Cerrar el modal

            // Restablecer el botón a su estado inicial
            const saveButton = document.querySelector('#saveBenefitButton');
            saveButton.textContent = 'Guardar';
            saveButton.removeEventListener('click', updateBenefit);
            saveButton.addEventListener('click', () => {
                const name = document.querySelector('#benefitName').value;
                const description = document.querySelector('#benefitDescription').value;

                if (name && description) {
                    const newBenefit = {
                        id: benefits.length + 1,
                        name,
                        description
                    };

                    benefits.push(newBenefit); // Agregar el nuevo beneficio
                    renderBenefits(); // Actualizar la tabla
                    document.querySelector('#addBenefitForm').reset(); // Limpiar el formulario
                    document.querySelector('#addBenefitModal').modal('hide'); // Cerrar el modal
                } else {
                    alert('Por favor, complete todos los campos.');
                }
            });
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Función para eliminar un beneficio
function deleteBenefit(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este beneficio?')) {
        benefits = benefits.filter((benefit) => benefit.id !== id); // Eliminar el beneficio
        renderBenefits(); // Actualizar la tabla
    }
}

// Función para agregar un producto
document.querySelector('#saveProductButton').addEventListener('click', () => {
    const name = document.querySelector('#productName').value;
    const description = document.querySelector('#productDescription').value;
    const price = document.querySelector('#productPrice').value;

    if (name && description && price) {
        // Agregar producto a la base de datos o hacer cualquier acción necesaria
        console.log(`Producto agregado: ${name}, ${description}, $${price}`);
        document.querySelector('#productForm').reset(); // Limpiar el formulario
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
