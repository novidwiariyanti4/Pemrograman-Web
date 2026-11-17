<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

// Data produk menggunakan link gambar online (Unsplash) agar langsung tampil tanpa ribet
const products = ref([
  {
    id: 1,
    name: "Jam Tangan Analog Kulit Minimalis Elegan Wanita",
    price: 95000,
    discount: 30,
    rating: '4.9',
    sold: '4,5RB',
    benefit: 'Menunjang penampilan harian agar terlihat lebih rapi & profesional.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80'
  },
  {
    id: 2,
    name: "Sepatu Olahraga Nyaman untuk Jalan-jalan",
    price: 150000,
    discount: 25,
    rating: '4.8',
    sold: '3,2RB',
    benefit: 'Empuk di kaki dan nyaman digunakan untuk aktivitas seharian.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80'
  },
  {
    id: 3,
    name: "Tumbler Estetik Anti Tumpah 500ml",
    price: 75000,
    discount: 20,
    rating: '4.9',
    sold: '5,1RB',
    benefit: 'Menjaga suhu air tetap hangat/dingin lebih lama dan ramah lingkungan.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80'
  }
])
</script>

<template>
  <main class="home-container">
    <header class="hero-section">
      <h1>Selamat Datang di Novia Mart</h1>
      <p>Temukan produk pilihan terbaik dengan kualitas dan harga menarik.</p>
    </header>

    <section class="catalog-section">
      <h2>Katalog Produk</h2>
      <div class="product-grid">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.hero-section {
  text-align: center;
  margin-bottom: 36px;
}

.hero-section h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 8px;
}

.hero-section p {
  color: #666;
  font-size: 1rem;
}

.catalog-section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>