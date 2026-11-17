<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div class="container">
    <h2>🛒 Halaman Keranjang Belanja</h2>
    <div v-if="cartStore.items.length === 0">
      <p>Keranjang kamu masih kosong.</p>
    </div>
    <div v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id">
            <td>{{ item.nama }}</td>
            <td>Rp {{ item.harga.toLocaleString("id-ID") }}</td>
            <td>{{ item.qty }}</td>
            <td>Rp {{ (item.harga * item.qty).toLocaleString("id-ID") }}</td>
            <td><button @click="cartStore.hapusItem(item.id)" class="btn-del">Hapus</button></td>
          </tr>
        </tbody>
      </table>
      <div class="cart-summary">
        <h3>Total Item: {{ cartStore.totalItem }}</h3>
        <h3>Total Harga: Rp {{ cartStore.totalHarga.toLocaleString("id-ID") }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 800px; margin: 2rem auto; padding: 0 1rem; font-family: sans-serif; }
.cart-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
.cart-table th, .cart-table td { border: 1px solid #cbd5e1; padding: 0.75rem; text-align: left; }
.btn-del { background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; }
.cart-summary { margin-top: 1.5rem; background: #f8fafc; padding: 1rem; border-radius: 8px; text-align: right; }
</style>