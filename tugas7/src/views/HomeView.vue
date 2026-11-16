<script setup>
// Mengimpor fungsi ref dari Vue untuk membuat data reaktif
import { ref } from 'vue'
// Mengimpor komponen kartu produk untuk menampilkan daftar barang
import ProductCard from '../components/ProductCard.vue'

// 1. DATA REAKTIF PRODUK (Katalog Toko Novia Mart)
// Menyimpan daftar produk (jam tangan, sepatu, tumbler, sandal, tas, skincare)
// Lengkap dengan atribut 'benefit' untuk menampilkan manfaat produk
const products = ref([
  {
    id: 1,
    name: 'Jam Tangan Analog Kulit Minimalis Elegan Wanita',
    price: 95000,
    discount: 30,
    rating: '4.9',
    sold: '4,5RB',
    benefit: 'Menunjang penampilan harian agar terlihat lebih rapi & profesional.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80'
  },
  {
    id: 2,
    name: 'Sepatu Olaraga Nyaman untuk Jalan-jalan',
    price: 135000,
    discount: 25,
    rating: '4.8',
    sold: '7,1RB',
    benefit: 'Nyaman dipakai berjalan jauh tanpa bikin kaki cepat pegal.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80'
  },
  {
    id: 3,
    name: 'Botol Minum Tumbler Stainless Steel 1 Liter Tahan Panas',
    price: 45000,
    discount: 40,
    rating: '4.9',
    sold: '12RB+',
    benefit: 'Menjaga suhu air tetap dingin/hangat seharian penuh.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80'
  },
  {
    id: 4,
    name: 'Sepatu Sneakers Wanita ',
    price: 38000,
    discount: 50,
    rating: '4.7',
    sold: '9,3RB',
    benefit: 'Sangat ringan, dan nyaman dipakai.',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&q=80'
  },
  {
    id: 5,
    name: 'Tas Selempang Wanita Korean Style Kulit Sintetis',
    price: 68000,
    discount: 35,
    rating: '4.8',
    sold: '6,4RB',
    benefit: 'Memuat dompet & smartphone dengan model yang stylish ala Korea.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80'
  },
  {
    id: 6,
    name: 'Glad2Glow Pomegranate Niacinamide Brightening Moisturizer',
    price: 39000,
    discount: 20,
    rating: '4.9',
    sold: '15RB+',
    benefit: 'Mencerahkan kulit wajah kusam & mengunci kelembapan.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80'
  }
])
</script>

<template>
  <div class="home-view">
    
    <!-- 2. BANNER ELEGAN (Gaya Modern & Minimalis Tanpa Foto Background) -->
    <!-- Menggunakan gradasi warna oranye khas e-commerce yang bersih dan profesional -->
    <div class="elegan-banner">
      <span class="banner-badge">✨ SELAMAT DATANG DI NOVIA MART ✨</span>
      <h1>Pusat Belanja Online Terlengkap & Terpercaya</h1>
      <p>Nikmati pengalaman belanja mudah, aman, dan penuh promo menarik setiap hari!</p>
    </div>

    <!-- 3. JUDUL SECTION KATALOG PRODUK -->
    <div class="section-title">
      <h2>🔥 KATALOG PRODUK PILIHAN TERLARIS 🔥</h2>
    </div>

    <!-- 4. GRID PERULANGAN PRODUK (v-for) -->
    <!-- v-for memecah data array 'products' untuk ditampilkan ke komponen ProductCard -->
    <div class="product-grid">
      <ProductCard 
        v-for="item in products" 
        :key="item.id" 
        :product="item" 
      />
    </div>

  </div>
</template>

<style scoped>
/* Styling Banner Elegan (Clean & Modern Gradient) */
.elegan-banner {
  background: linear-gradient(135deg, #ee4d2d 0%, #ff7337 100%);
  color: white;
  border-radius: 8px;
  padding: 45px 30px;
  text-align: center;
  margin-bottom: 24px;
  box-shadow: 0 4px 15px rgba(238, 77, 45, 0.2);
}

.banner-badge {
  background-color: #ffe97a;
  color: #d0011b;
  font-size: 11px;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.elegan-banner h1 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
}

.elegan-banner p {
  font-size: 14px;
  opacity: 0.95;
}

.section-title {
  background: white;
  padding: 14px 20px;
  border-left: 5px solid #ee4d2d;
  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.section-title h2 {
  color: #333;
  font-size: 15px;
  letter-spacing: 0.5px;
}

/* Pengaturan tata letak Grid Produk agar tersusun rapi dan responsif */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 16px;
}
</style>