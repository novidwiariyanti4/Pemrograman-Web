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
          🛒 Novia Mart
        </router-link>
        
        <nav class="nav-links">
          <router-link to="/" class="nav-item">Beranda</router-link>
          <router-link to="/cart" class="cart-link">
            Keranjang 
            <span v-if="cartStore.cart.length > 0" class="cart-badge">
              {{ cartStore.cart.length }}
            </span>
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Konten Halaman yang Berubah-ubah (Home / Cart) -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  color: #333;
}

.navbar {
  background-color: #ee4d2d;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 22px;
  font-weight: 800;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-item, .cart-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background 0.2s;
  position: relative;
}

.nav-item:hover, .cart-link:hover {
  background: rgba(255, 255, 255, 0.15);
}

.cart-badge {
  background: #ffdb4d;
  color: #333;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 10px;
  margin-left: 5px;
  vertical-align: top;
}

.main-content {
  padding: 25px 20px;
}
</style>