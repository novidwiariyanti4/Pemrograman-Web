<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const tambahKeKeranjang = () => {
  cartStore.addToCart(props.product)
  alert(`Berhasil menambahkan ${props.product.name} ke keranjang!`)
}

const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(angka)
}
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h4 class="product-title">{{ product.name }}</h4>
      <p class="product-desc">{{ product.description }}</p>
      <div class="price-action">
        <span class="product-price">{{ formatRupiah(product.price) }}</span>
        <button @click="tambahKeKeranjang" class="btn-buy">+ Keranjang</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(238, 77, 45, 0.15);
  border-color: #ee4d2d;
}

.image-container {
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: #f9f9f9;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-title {
  font-size: 15px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
  line-height: 1.4;
}

.product-desc {
  font-size: 12.5px;
  color: #666;
  margin-bottom: 14px;
  flex-grow: 1;
  line-height: 1.4;
}

.price-action {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}

.product-price {
  font-size: 16px;
  font-weight: 800;
  color: #ee4d2d;
}

.btn-buy {
  background: #ee4d2d;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;
  font-size: 13px;
}

.btn-buy:hover {
  background: #d73211;
}
</style>