// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTask = (task) => {
    const newtask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newtask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tareas
export const getTasks = () => tasks;

//Funcion para eliminar una tarea de la lista
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Funcion para actualizar una tarea
export const updateTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};