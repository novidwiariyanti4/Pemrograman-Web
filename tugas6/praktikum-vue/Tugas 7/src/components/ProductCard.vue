<script setup>
const props = defineProps({
  id: { type: Number, required: true },
  nama: { type: String, required: true },
  harga: { type: Number, required: true },
  stok: { type: Number, default: 0 }
})

const emit = defineEmits(["beli-produk"])

const handleBeli = () => {
  if (props.stok > 0) {
    emit("beli-produk", { id: props.id, nama: props.nama, harga: props.harga })
  }
}
</script>

<template>
  <div class="product-card">
    <h3>{{ nama }}</h3>
    <p class="price">Rp {{ harga.toLocaleString("id-ID") }}</p>
    <p :class="{ habis: stok === 0 }">Stok: {{ stok > 0 ? stok : "Habis" }}</p>
    <button @click="handleBeli" :disabled="stok === 0">
      {{ stok > 0 ? "+ Keranjang" : "Stok Kosong" }}
    </button>
  </div>
</template>

<style scoped>
.product-card { border: 1px solid #e2e8f0; padding: 1.2rem; border-radius: 8px; background: #fff; text-align: left; } 
.price { font-weight: bold; color: #10b981; font-size: 1.2rem; margin: 0.5rem 0; } 
.habis { color: #ef4444; font-weight: bold; }
button { background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
button:disabled { background: #cbd5e1; cursor: not-allowed; }
</style>