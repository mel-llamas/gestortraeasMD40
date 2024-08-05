import { gettasks } from './task';

export const rendertasks = () => {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";
}