<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div id="app">
    <!-- Header / Navbar ala Shopee -->
    <header class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">
          🛍️ Novia Mart
        </router-link>

        <nav class="nav-links">
          <router-link to="/" class="nav-item">Beranda</router-link>
          <router-link to="/cart" class="nav-item">
            Keranjang 
            <span v-if="cartStore.itemCount > 0" class="badge">
              ({{ cartStore.itemCount }})
            </span>
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Konten Halaman Berubah-ubah (Home / Cart) -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.navbar {
  background-color: #ee4d2d;
  color: white;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-item:hover {
  opacity: 0.8;
}

.badge {
  background-color: white;
  color: #ee4d2d;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 4px;
}

.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}
</style>