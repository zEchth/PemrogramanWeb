import {addTask, listTasks, doneTask, deleteTask} from './task.js';

const command = process.argv[2];
const arg = process.argv[3];

if(command === 'add'){
    if(!arg){
        console.log("Deskripsi tugas diperlukan untuk menambahkan tugas.");
    } else {
        await addTask(arg);
    }  
} 
else if(command === 'list'){
    await listTasks();
} 
else if(command === 'done'){
    const index = parseInt(arg);
    if(isNaN(index)){
        console.log("Index tugas yang valid diperlukan untuk menandai tugas sebagai selesai.");
    } else {
        await doneTask(index);
    }
}
else if(command === 'delete'){
    const index = parseInt(arg);
    if(isNaN(index)){
        console.log("Index tugas yang valid diperlukan untuk menghapus tugas.");
    } else {
        await deleteTask(index);
    }
} 
else {
    console.log("Perintah tidak dikenal. Gunakan 'add', 'list', atau 'done'.");
} 
