<script setup>
import { useCartStore } from '../stores/cart'

// Menerima data produk dari halaman induk (HomeView) lewat props
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// Memanggil store keranjang (Pinia)
const cartStore = useCartStore()

// Fungsi untuk memformat angka menjadi format Rupiah (contoh: 39000 -> 39.000)
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID').format(angka)
}

// Fungsi ketika tombol "+ Keranjang" diklik
function handleAdd() {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <div class="product-card">
    <!-- Bagian Gambar dan Badge Diskon -->
    <div class="image-wrapper">
      <img :src="product.image" :alt="product.name" />
      <span v-if="product.discount" class="discount-tag">-{{ product.discount }}%</span>
    </div>

    <!-- Bagian Informasi Produk -->
    <div class="card-body">
      <h3 class="product-title">{{ product.name }}</h3>
      
      <!-- TAMBAHAN: Kotak Informasi Manfaat Produk -->
      <div class="product-benefit">
        <span>💡 <strong>Manfaat:</strong> {{ product.benefit }}</span>
      </div>

      <!-- Harga Produk -->
      <div class="price-row">
        <span class="currency">Rp</span>
        <span class="price">{{ formatRupiah(product.price) }}</span>
      </div>

      <!-- Rating dan Jumlah Terjual -->
      <div class="meta-row">
        <span class="rating">⭐ {{ product.rating }}</span>
        <span class="sold">{{ product.sold }} terjual</span>
      </div>

      <!-- Tombol Tambah ke Keranjang -->
      <button @click="handleAdd" class="add-cart-btn">
        + Keranjang
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Pengaturan tampilan kartu produk ala e-commerce */
.product-card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(238, 77, 45, 0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f9f9f9;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-tag {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffe97a;
  color: #ee4d2d;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 6px;
}

.card-body {
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  line-height: 1.3;
  height: 34px;
  overflow: hidden;
  margin-bottom: 6px;
}

/* Style untuk kotak manfaat produk */
.product-benefit {
  background-color: #fff8f6;
  border-left: 3px solid #ee4d2d;
  padding: 5px 8px;
  font-size: 11px;
  color: #555;
  margin-bottom: 8px;
  border-radius: 0 4px 4px 0;
}

.price-row {
  color: #ee4d2d;
  font-weight: 600;
  margin-bottom: 6px;
}

.currency {
  font-size: 11px;
}

.price {
  font-size: 15px;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #888;
  margin-bottom: 10px;
}

.add-cart-btn {
  margin-top: auto;
  width: 100%;
  background-color: #ffeee8;
  color: #ee4d2d;
  border: 1px solid #ee4d2d;
  padding: 7px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-cart-btn:hover {
  background-color: #ee4d2d;
  color: white;
}
</style>