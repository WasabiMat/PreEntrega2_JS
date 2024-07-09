let tarea = [];

function agregarTarea() {
    const tareaTexto = prompt("Ingresa una nueva tarea:").trim();
    if (tareaTexto === "") {
        alert("no se puede agregar una tarea vacia");
        return;
    }


const tareaNueva = {
    id: Date.now(),
    texto: tareaTexto,
    completada: false
    };

    tarea.push(tareaNueva);
    console.log("tarea Agregada:", tareaNueva);
}

function verTarea() {
    console.clear();
    console.log("lista de tareas:");
    tarea.forEach(tarea => {
        console.log(`${tarea.id}: ${tarea.texto} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
}

function borrarTarea() {
    const tareaId = parseInt(prompt("ingresa el ID de la trea a eliminar:"));
    const tareaIndex = tarea.findIndex(tarea => tarea.id === tareaId);
    if (tareaIndex === -1) {
        alert("tarea no encontrada.");
        return;
    }
    const borrarTarea = tarea.splice(tareaIndex, 1)[0];
    console.log("tarea eliminada:", borrarTarea);
    verTarea();
}

function buscarTarea() {
    const buscar = prompt("Ingresar el texto a buscar en las tareas:").trim().ToLowerCase();
    const tareaEncontrada = tarea.filter(tarea => tarea.texto.ToLowerCase().includes(buscar));
    console.clear();
    console.logs("Tareas Encontradas:");
    tareaEncontrada.forEach(tarea =>{
        console.log(`${tarea.id}: ${tarea.texto} - ${tarea.completada ? 'Completada' : 'Pendiente'}`)
    })
}

function filtroTareasCompletadas() {
    const tareasCompletadas = tarea.filter(tarea => tarea.completada);
    console.clear();
    console.log("tarea completaas:");
    tareasCompletadas.forEach(tarea => {
        console.log(`${tarea.id}: ${tarea.texto} - Completada`)
    });
}

function filtroTareaPendiente (){
    const tareaPendiente = tarea.filter(tarea => !tarea.completada);
    console.clear();
    console.log("tarea pendientes:");
    tareaPendiente.forEach(tarea => {
        console.log(`${tarea.id}: ${tarea.texto} - Pendiente`)
    });
}

//Ejemplo de Usos
agregarTarea();
agregarTarea();
borrarTarea();
buscarTarea();
filtroTareasCompletadas();
filtroTareaPendiente();