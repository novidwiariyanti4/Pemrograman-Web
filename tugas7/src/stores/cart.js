import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  
  // 1. STATE UTAMA
  // Menyimpan daftar item yang dimasukkan ke keranjang
  const items = ref([])

  // 2.  HITUNG TOTAL JUMLAH BARANG
  // Menggabungkan total kuantitas semua barang secara otomatis
  const itemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  // 3. HITUNG TOTAL HARGA
  // Mengalikan harga barang dengan jumlah kuantitasnya lalu dijumlahkan semua
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  // 4.TAMBAH KE KERANJANG
  function addToCart(product) {
    // Cek apakah produk sudah pernah dimasukkan sebelumnya
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++ 
    } else {
      items.value.push({ ...product, quantity: 1 }) 
    }
  }

  // 5. FUNGSI: UBAH JUMLAH KUANTITAS (+ / -)
  function updateQuantity(id, amount) {
    const item = items.value.find(i => i.id === id)
    if (item) {
      item.quantity += amount
      if (item.quantity <= 0) {
        removeFromCart(id) 
      }
    }
  }

  // 6. HAPUS PRODUK DARI KERANJANG
  function removeFromCart(id) {
    items.value = items.value.filter(item => item.id !== id)
  }

  // 7.KOSONGKAN KERANJANG (Setelah Checkout)
  function clearCart() {
    items.value = []
  }

  // Mengembalikan data dan fungsi agar bisa dipanggil di file Vue lain
  return { items, itemCount, totalPrice, addToCart, updateQuantity, removeFromCart, clearCart }
})