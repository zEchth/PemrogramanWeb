# Pemrograman Web
### aplikasi task manager berbasis file JSON yang berjalan di command-line

### ⚙️ Setup
1. Clone atau salin proyek ini ke komputer kamu.
   -> git clone <url-repo-kamu>
   -> cd TaskManagerCLI
2. Pastikan Node.js sudah terinstal.
   -> node -v
3. Tidak perlu install library tambahan (hanya menggunakan modul bawaan Node.js).

### 🚀 Cara Menjalankan
Tambah Task
-> node index.js add "Belajar Node.js async/await"

Lihat Semua Task
-> node index.js list

Tandai Task Selesai
-> node index.js done 1

Hapus Task
-> node index.js delete 2

### 📁 Struktur Folder
'''
TaskManagerCLI/
│
├── README.md
└── Task/
    ├── index.js         # Entry utama CLI
    ├── task.js          # Logika CRUD task
    ├── tasks.json       # File penyimpanan tugas
    └── package.json     # Informasi dan konfigurasi proyek Node.js
'''

### ✨ Fitur
- Menambahkan tugas baru
- Menampilkan semua tugas
- Menandai tugas selesai
- Menghapus tugas
- Menyimpan data secara permanen di tasks.json
