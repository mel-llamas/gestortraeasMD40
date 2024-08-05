// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTask = (task) => {
    const newtask = {
        id: Date.now(),
        Text: task,
        completed: false,
    };
    tasks.push(newtask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tareas
export const gettask = () => tasks;