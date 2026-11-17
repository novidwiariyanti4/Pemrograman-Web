<script setup>
import { useCartStore } from './stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <header class="navbar">
    <h2>Min-SPA Tugas 07</h2>
    <nav>
      <RouterLink to="/">Katalog Produk</RouterLink> | 
      <RouterLink to="/cart">Keranjang ({{ cartStore.totalItem }})</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; }
.navbar { background: #ffffff; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.navbar h2 { margin: 0; color: #2563eb; }
.navbar nav a { text-decoration: none; color: #64748b; font-weight: bold; margin: 0 0.5rem; }
.navbar nav a.router-link-active { color: #10b981; }
</style>