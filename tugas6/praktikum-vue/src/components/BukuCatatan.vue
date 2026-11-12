<script setup>
import { ref, computed } from 'vue'

const judulBaru = ref('')
const kategoriBaru = ref('Fiksi')
const sudahBacaBaru = ref(false)

const daftarBuku = ref([
  { id: 1, judul: 'Belajar Pemrograman Web', kategori: 'Teknologi', selesai: true },
  { id: 2, judul: 'Algoritma dan Struktur Data', kategori: 'Teknologi', selesai: false }
])

const tambahBuku = () => {
  if (!judulBaru.value.trim()) {
    alert('Judul buku tidak boleh kosong!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBaru.value,
    kategori: kategoriBaru.value,
    selesai: sudahBacaBaru.value
  })

  judulBaru.value = ''
  kategoriBaru.value = 'Fiksi'
  sudahBacaBaru.value = false
}

const totalSelesaiDibaca = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})
</script>

<template>
  <div class="buku-container">
    <h2>Manajemen Buku Catatan</h2>

    <form @submit.prevent="tambahBuku" class="form-group">
      <div class="input-field">
        <label for="judul">Judul Buku:</label>
        <input 
          type="text" 
          id="judul" 
          v-model="judulBaru" 
          placeholder="Masukkan judul buku..." 
        />
      </div>

      <div class="input-field">
        <label for="kategori">Kategori:</label>
        <select id="kategori" v-model="kategoriBaru">
          <option value="Fiksi">Fiksi</option>
          <option value="Non-Fiksi">Non-Fiksi</option>
          <option value="Teknologi">Teknologi</option>
          <option value="Sains">Sains</option>
        </select>
      </div>

      <div class="checkbox-field">
        <input 
          type="checkbox" 
          id="status" 
          v-model="sudahBacaBaru" 
        />
        <label for="status">Sudah Selesai Dibaca</label>
      </div>

      <button type="submit" class="btn-submit">Tambah Buku</button>
    </form>

    <hr />

    <div class="stats">
      <p>Total Buku: <strong>{{ daftarBuku.length }}</strong></p>
      <p>Selesai Dibaca: <strong style="color: green;">{{ totalSelesaiDibaca }}</strong></p>
    </div>

    <h3>Daftar Buku</h3>
    <p v-if="daftarBuku.length === 0" class="empty-text">Belum ada buku yang ditambahkan.</p>
    
    <ul v-else class="book-list">
      <li v-for="buku in daftarBuku" :key="buku.id" :class="{ completed: buku.selesai }">
        <div>
          <strong>{{ buku.judul }}</strong> 
          <span class="badge">{{ buku.kategori }}</span>
        </div>
        <div>
          <span :style="{ color: buku.selesai ? 'green' : 'orange' }">
            {{ buku.selesai ? '✔ Selesai' : '⏳ Belum Selesai' }}
          </span>
          <input type="checkbox" v-model="buku.selesai" style="margin-left: 10px;" />
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
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-field input, .input-field select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-field {
  display: flex;
  align-items: center;
  gap: 8px;
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
  border: 1px solid #ddd;
  border-radius: 4px;
}

.badge {
  background-color: #e0e0e0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 8px;
}

.stats {
  display: flex;
  justify-content: space-between;
  background: #eef2f5;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>