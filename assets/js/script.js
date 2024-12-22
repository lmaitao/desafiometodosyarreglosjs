const tareas = [
    { id: 16, descripcion: "Hacer mercado", completada: false },
    { id: 60, descripcion: "Estudiar para hoy", completada: false },
    { id: 24, descripcion: "Sacar a pasear a Lana", completada: false }
];

const listaTareas = document.getElementById('listaTareas');
const totalTareas = document.getElementById('totalTareas');
const tareasRealizadas = document.getElementById('tareasRealizadas');

function actualizarResumen() {
    totalTareas.textContent = tareas.length;
    tareasRealizadas.textContent = tareas.filter(tarea => tarea.completada).length;
}

function agregarTarea() {
    const nuevaTarea = document.getElementById('nuevaTarea').value;
    if (nuevaTarea) {
        tareas.push({ id: Date.now(), descripcion: nuevaTarea, completada: false });
        renderizarTareas();
        document.getElementById('nuevaTarea').value = '';
        actualizarResumen();
    }
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
    actualizarResumen();
}

function cambiarEstado(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
    actualizarResumen();
}

function renderizarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = `${tarea.descripcion} - ${tarea.completada ? 'Realizado' : ''}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarTarea(index);
        const botonCambiar = document.createElement('button');
        botonCambiar.textContent = 'Cambiar';
        botonCambiar.onclick = () => cambiarEstado(index);
        li.appendChild(botonEliminar);
        li.appendChild(botonCambiar);
        listaTareas.appendChild(li);
    });
}

renderizarTareas();
actualizarResumen();