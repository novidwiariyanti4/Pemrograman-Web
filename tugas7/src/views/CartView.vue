<script setup>
import { useCartStore } from '../stores/cart'

// Memanggil store keranjang
const cartStore = useCartStore()

// Format angka ke Rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID').format(angka)
}

// Fungsi tombol checkout saat diklik
function handleCheckout() {
  if (cartStore.items.length === 0) return
  alert(`Checkout Berhasil! 🎉\nTerima kasih sudah berbelanja di Novia Mart.\nTotal Pembayaran: Rp${formatRupiah(cartStore.totalPrice)}`)
  cartStore.clearCart() // Mengosongkan keranjang setelah checkout
}
</script>

<template>
  <div class="cart-page">
    <h2 class="page-title">🛒 Keranjang Belanja Anda</h2>

    <!-- Tampilan jika keranjang kosong -->
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Wah, keranjang belanjaan kamu masih kosong nih.</p>
      <RouterLink to="/" class="back-shop-btn">Mulai Belanja Sekarang</RouterLink>
    </div>

    <!-- Tampilan jika ada produk di keranjang -->
    <div v-else class="cart-container">
      <div class="cart-items-list">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item-card">
          <img :src="item.image" :alt="item.name" class="cart-img" />
          
          <div class="cart-info">
            <h4>{{ item.name }}</h4>
            <p class="unit-price">Rp{{ formatRupiah(item.price) }}</p>
          </div>

          <!-- Kontrol jumlah kuantitas produk (+ / -) -->
          <div class="quantity-box">
            <button @click="cartStore.updateQuantity(item.id, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cartStore.updateQuantity(item.id, 1)">+</button>
          </div>

          <!-- Subtotal harga per item -->
          <div class="subtotal">
            Rp{{ formatRupiah(item.price * item.quantity) }}
          </div>

          <!-- Tombol Hapus item -->
          <button @click="cartStore.removeFromCart(item.id)" class="remove-btn">
            Hapus
          </button>
        </div>
      </div>

      <!-- BAR / KOTAK CHECKOUT DI BAGIAN BAWAH -->
      <div class="checkout-footer">
        <div class="total-info">
          <span>Total Harga ({{ cartStore.itemCount }} produk):</span>
          <span class="total-price-value">Rp{{ formatRupiah(cartStore.totalPrice) }}</span>
        </div>
        <button @click="handleCheckout" class="checkout-btn">
          Checkout Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  background: white;
  padding: 16px 20px;
  border-radius: 6px;
  font-size: 17px;
  color: #ee4d2d;
  margin-bottom: 16px;
}

.empty-cart {
  background: white;
  padding: 50px 20px;
  text-align: center;
  border-radius: 6px;
}

.empty-cart p {
  color: #666;
  margin-bottom: 16px;
}

.back-shop-btn {
  background-color: #ee4d2d;
  color: white;
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 4px;
  font-weight: 600;
}

.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.cart-item-card {
  background: white;
  padding: 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.cart-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eee;
}

.cart-info {
  flex: 1;
}

.cart-info h4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.unit-price {
  color: #777;
  font-size: 13px;
}

.quantity-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.quantity-box button {
  background: #f7f7f7;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
}

.quantity-box span {
  padding: 0 14px;
  font-size: 14px;
}

.subtotal {
  width: 130px;
  text-align: right;
  color: #ee4d2d;
  font-weight: 600;
  font-size: 15px;
}

.remove-btn {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 13px;
}

.remove-btn:hover {
  color: #ee4d2d;
}

/* Bagian Checkout Footer */
.checkout-footer {
  background: white;
  padding: 20px 24px;
  border-radius: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
}

.total-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #444;
}

.total-price-value {
  color: #ee4d2d;
  font-size: 24px;
  font-weight: 700;
}

.checkout-btn {
  background-color: #ee4d2d;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #d73211;
}
</style>