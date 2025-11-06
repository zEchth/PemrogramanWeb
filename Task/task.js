import { readFile, writeFile } from 'fs/promises';

const FILE = "./tasks.json";

// LOAD TASKS
export async function loadTasks() {
    try {
        const data = await readFile(FILE, 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

// SAVE
export async function saveTasks(tasks) {
    await writeFile(FILE, JSON.stringify(tasks, null, 2));
}

// ADD TASK
export async function addTask(task){
    const tasks = await loadTasks();
    tasks.push({ description: task, done: false });
    await saveTasks(tasks);
    console.log(`Task "${task}" ditambahkan.`);
}

// LIST TASKS
export async function listTasks(){
    const tasks = await loadTasks();
    if(tasks.length === 0){
        console.log("Tidak ada tugas.");
        return;
    }
    
    console.log("Daftar task: ");
    tasks.forEach((task, index) => {
        const status = task.done ? "[x]" : "[ ]";
        console.log(`${index + 1}. ${status} ${task.description}`);
    });
}

// DONE TASKS
export async function doneTask(index){
    const tasks = await loadTasks();
    if(index < 1 || index > tasks.length){
        console.log("Index tugas tidak valid.");
        return;
    }
    tasks[index - 1].done = true;
    await saveTasks(tasks);
    console.log(`Tugas ke-${index} telah ditandai sebagai selesai.`);
}

// DELETE TASK
export async function deleteTask(index){
    const tasks = await loadTasks();
    if(index < 1 || index > tasks.length){
        console.log("Index tugas tidak valid.");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    await saveTasks(tasks);
    console.log(`Tugas "${removedTask[0].description}" telah dihapus.`);
}