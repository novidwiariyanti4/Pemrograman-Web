<script setup>
import ProductCard from '../components/ProductCard.vue'

const produkList = [
  { 
    id: 1, 
    name: 'Minyak Goreng Premium 2 Liter', 
    price: 35000, 
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
    description: 'Minyak goreng jernih 2x penyaringan, cocok untuk segala masakan.' 
  },
  { 
    id: 2, 
    name: 'Beras Pulen Wangi Pandan 5 Kg', 
    price: 72000, 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
    description: 'Beras putih bersih alami, tekstur pulen, dan bebas pemutih.' 
  },
  { 
    id: 3, 
    name: 'Telur Ayam Negeri Segar 1 Tray', 
    price: 28000, 
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80',
    description: 'Telur ayam segar pilihan langsung dari peternakan setiap hari.' 
  },
  { 
    id: 4, 
    name: 'Kopi Bubuk Robusta Asli 250g', 
    price: 22000, 
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=400&q=80',
    description: 'Aroma kopi robusta kuat dan nikmat untuk menemani pagi hari.' 
  },
  { 
    id: 5, 
    name: 'Mie Instan Goreng Spesial 1 Dus (40 Pcs)', 
    price: 112000, 
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&q=80',
    description: 'Mie goreng favorit keluarga dengan bumbu rempah gurih dan bawang goreng.' 
  },
  { 
    id: 6, 
    name: 'Susu UHT Full Cream 1 Liter', 
    price: 19500, 
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
    description: 'Susu sapi segar murni kaya kalsium dan vitamin untuk nutrisi harian.' 
  },
    
  { 
    id: 8, 
    name: 'Tepung Terigu Protein Sedang 1 Kg', 
    price: 13500, 
    image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=400&q=80',
    description: 'Tepung terigu serbaguna cocok untuk aneka kue, gorengan, dan roti.' 
  }
]
</script>

<template>
  <div class="home">
    <div class="welcome-banner">
      <h2>🛒 Selamat Datang di Novia Mart</h2>
      <p>Belanja kebutuhan pokok & harian lengkap, murah, dan gratis ongkir sepuasnya!</p>
    </div>

    <div class="section-header">
      <h3>Rekomendasi Kebutuhan Harian</h3>
    </div>

    <div class="product-grid">
      <ProductCard 
        v-for="product in produkList" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-banner {
  background: linear-gradient(135deg, #ee4d2d, #ff7337);
  color: white;
  padding: 35px 25px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 10px 25px rgba(238, 77, 45, 0.25);
  text-align: center;
}

.welcome-banner h2 {
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 800;
}

.welcome-banner p {
  opacity: 0.95;
  font-size: 16px;
}

.section-header h3 {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 22px;
  font-weight: 700;
  border-left: 5px solid #ee4d2d;
  padding-left: 12px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
</style>