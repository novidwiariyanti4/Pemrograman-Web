<script setup>
import { ref, computed } from 'vue'

// State untuk form input
const judulBaru = ref('')
const kategoriBaru = ref('Fiksi')
const statusBacaBaru = ref(false)

// Daftar kategori pilihan untuk select dropdown
const pilihanKategori = ['Fiksi', 'Non-Fiksi', 'Teknologi', 'Sains', 'Sejarah']

// State untuk menyimpan daftar buku
const daftarBuku = ref([
  { id: 1, judul: 'Belajar Vue.js Dasar', kategori: 'Teknologi', selesai: true },
  { id: 2, judul: 'Pemrograman Web Lanjut', kategori: 'Teknologi', selesai: false }
])

// Fungsi untuk menambah buku baru
const tambahBuku = () => {
  if (!judulBaru.value.trim()) {
    alert('Judul buku tidak boleh kosong!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBaru.value,
    kategori: kategoriBaru.value,
    selesai: statusBacaBaru.value
  })

  // Reset form setelah disubmit
  judulBaru.value = ''
  kategoriBaru.value = 'Fiksi'
  statusBacaBaru.value = false
}

// Computed property untuk menghitung jumlah buku yang sudah selesai dibaca
const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})
</script>

<template>
  <div class="buku-container">
    <h2>📖 Aplikasi Catatan Buku</h2>

    <!-- Form Input Buku -->
    <form @submit.prevent="tambahBuku" class="form-group">
      <div class="input-field">
        <label>Judul Buku:</label>
        <input 
          type="text" 
          v-model="judulBaru" 
          placeholder="Masukkan judul buku..." 
        />
      </div>

      <div class="input-field">
        <label>Kategori Buku:</label>
        <select v-model="kategoriBaru">
          <option v-for="kat in pilihanKategori" :key="kat" :value="kat">
            {{ kat }}
          </option>
        </select>
      </div>

      <div class="input-field checkbox-field">
        <label>
          <input type="checkbox" v-model="statusBacaBaru" />
          Sudah Selesai Dibaca
        </label>
      </div>

      <button type="submit" class="btn-submit">Tambah Buku</button>
    </form>

    <hr />

    <!-- Informasi / Statistik -->
    <div class="info-box">
      <p>Total Buku: <strong>{{ daftarBuku.length }}</strong></p>
      <p>Selesai Dibaca: <strong class="text-success">{{ jumlahSelesai }}</strong></p>
    </div>

    <!-- Daftar Buku dengan v-for -->
    <h3>Daftar Buku</h3>
    <p v-if="daftarBuku.length === 0" class="empty-text">Belum ada catatan buku.</p>
    
    <ul v-else class="book-list">
      <li v-for="buku in daftarBuku" :key="buku.id" :class="{ 'completed': buku.selesai }">
        <div class="book-info">
          <span class="book-title">{{ buku.judul }}</span>
          <span class="book-category">[{{ buku.kategori }}]</span>
        </div>
        <div class="book-status">
          <label>
            <input type="checkbox" v-model="buku.selesai" />
            {{ buku.selesai ? 'Selesai' : 'Belum Selesai' }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.buku-container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h2, h3 {
  color: #2c3e50;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-field input[type="text"],
.input-field select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-field {
  flex-direction: row;
  align-items: center;
}

.btn-submit {
  padding: 10px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-submit:hover {
  background-color: #35495e;
}

.info-box {
  display: flex;
  justify-content: space-around;
  background: #eef2f5;
  padding: 10px;
  border-radius: 6px;
  margin: 15px 0;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.book-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.book-list li.completed {
  background-color: #e8f8f0;
  border-color: #42b883;
}

.book-title {
  font-weight: bold;
}

.book-category {
  font-size: 0.85em;
  color: #666;
  margin-left: 6px;
}

.text-success {
  color: #42b883;
}
</style>