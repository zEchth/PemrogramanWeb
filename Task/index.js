import path from 'path';
import { fileURLToPath } from 'url';
import { addTask, listTasks, doneTask, deleteTask } from './task.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const command = process.argv[2];
const arg = process.argv[3];

try {
    if (command === 'add') {
        if (!arg) { console.log("Deskripsi tugas diperlukan untuk menambahkan tugas."); }
        else { await addTask(arg, __dirname); }
    }
    else if (command === 'list') {
        await listTasks(__dirname);
    }
    else if (command === 'done') {
        const index = parseInt(arg);
        if (isNaN(index)) {
            console.log("Index tugas yang valid diperlukan untuk menandai tugas sebagai selesai.");
        } else {
            await doneTask(index, __dirname);
        }
    }
    else if (command === 'delete') {
        const index = parseInt(arg);
        if (isNaN(index)) {
            console.log("Index tugas yang valid diperlukan untuk menghapus tugas.");
        } else {
            await deleteTask(index, __dirname);
        }
    }
    else {
        console.log("Perintah tidak dikenal. Gunakan 'add', 'list', 'done', atau 'delete'.");
    }

}
catch (err) {
    console.error("Terjadi kesalahan:", err.message);
}
