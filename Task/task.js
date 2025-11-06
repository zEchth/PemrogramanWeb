import { readFile, writeFile } from 'fs/promises';
import path from 'path';

function getFilePath(dir) {
    return path.join(dir, 'tasks.json');
}

// LOAD TASKS
export async function loadTasks(dir) {
    const FILE = getFilePath(dir);
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
export async function saveTasks(tasks, dir) {
    const FILE = getFilePath(dir);
    await writeFile(FILE, JSON.stringify(tasks, null, 2));
}

// ADD TASK
export async function addTask(task, dir) {
    const tasks = await loadTasks(dir);
    tasks.push({ description: task, done: false });
    await saveTasks(tasks, dir);
    console.log(`Task "${task}" ditambahkan.`);
}

// LIST TASKS
export async function listTasks(dir) {
    const tasks = await loadTasks(dir);
    if (tasks.length === 0) {
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
export async function doneTask(index, dir) {
    const tasks = await loadTasks(dir);
    if (index < 1 || index > tasks.length) {
        console.log("Index tugas tidak valid.");
        return;
    }
    tasks[index - 1].done = true;
    await saveTasks(tasks, dir);
    console.log(`Tugas ke-${index} telah ditandai sebagai selesai.`);
}

// DELETE TASK
export async function deleteTask(index, dir) {
    const tasks = await loadTasks(dir);
    if (index < 1 || index > tasks.length) {
        console.log("Index tugas tidak valid.");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    await saveTasks(tasks, dir);
    console.log(`Tugas "${removedTask[0].description}" telah dihapus.`);
}