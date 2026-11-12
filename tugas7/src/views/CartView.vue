<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

// Format mata uang Rupiah
const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(angka)
}

const handleCheckout = () => {
  if (cartStore.cart.length === 0) {
    alert('Keranjang belanja masih kosong!')
    return
  }
  alert(`Checkout berhasil! Total belanja ${formatRupiah(cartStore.totalPrice)} akan segera diproses. Terima kasih sudah berbelanja di Novia Mart!`)
  cartStore.clearCart() // Kosongkan keranjang setelah checkout
}
</script>

<template>
  <div class="cart-container">
    <h2>🛒 Keranjang Belanja Novia Mart</h2>

    <!-- Kondisi kalau keranjang kosong -->
    <div v-if="cartStore.cart.length === 0" class="empty-cart">
      <p>Wah, keranjang belanjaanmu masih kosong nih.</p>
      <router-link to="/" class="btn-shopping">Mulai Belanja Sekarang</router-link>
    </div>

    <!-- Kondisi kalau ada produk di keranjang -->
    <div v-else class="cart-content">
      <div class="cart-items-list">
        <div v-for="item in cartStore.cart" :key="item.id" class="cart-item-card">
          <img :src="item.image" :alt="item.name" class="item-img" />
          <div class="item-detail">
            <h4>{{ item.name }}</h4>
            <p class="item-price">{{ formatRupiah(item.price) }}</p>
          </div>
          <div class="item-action">
            <span class="item-qty">Jumlah: 1</span>
            <button @click="cartStore.removeFromCart(item.id)" class="btn-remove">Hapus</button>
          </div>
        </div>
      </div>

      <!-- Kotak Ringkasan Pembayaran / Checkout ala Shopee -->
      <div class="checkout-summary">
        <h3>Ringkasan Belanja</h3>
        <div class="summary-row">
          <span>Total Item:</span>
          <span>{{ cartStore.cart.length }} Produk</span>
        </div>
        <div class="summary-row total">
          <span>Total Harga:</span>
          <span class="total-price">{{ formatRupiah(cartStore.totalPrice) }}</span>
        </div>
        <button @click="handleCheckout" class="btn-checkout">Checkout Sekarang</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.cart-container h2 {
  font-size: 24px;
  color: #222;
  margin-bottom: 20px;
  font-weight: 700;
  border-left: 5px solid #ee4d2d;
  padding-left: 12px;
}

.empty-cart {
  text-align: center;
  padding: 50px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.empty-cart p {
  color: #666;
  margin-bottom: 20px;
  font-size: 16px;
}

.btn-shopping {
  background: #ee4d2d;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-item-card {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  gap: 15px;
}

.item-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  background: #f9f9f9;
}

.item-detail {
  flex-grow: 1;
}

.item-detail h4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;
}

.item-price {
  font-size: 14px;
  color: #ee4d2d;
  font-weight: 700;
}

.item-action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.item-qty {
  font-size: 12px;
  color: #666;
}

.btn-remove {
  background: transparent;
  color: #ff4d4f;
  border: none;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
}

.btn-remove:hover {
  text-decoration: underline;
}

.checkout-summary {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  border: 1px solid #eee;
  height: fit-content;
}

.checkout-summary h3 {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #555;
}

.summary-row.total {
  font-size: 16px;
  font-weight: 700;
  color: #222;
  border-top: 1px dashed #eee;
  padding-top: 12px;
  margin-top: 10px;
}

.total-price {
  color: #ee4d2d;
  font-size: 18px;
}

.btn-checkout {
  background: #ee4d2d;
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 15px;
  font-size: 14px;
  transition: background 0.2s;
}

.btn-checkout:hover {
  background: #d73211;
}
</style>