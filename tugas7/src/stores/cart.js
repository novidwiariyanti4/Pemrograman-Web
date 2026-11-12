import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    updateQuantity(productId, amount) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        item.quantity += amount
        if (item.quantity <= 0) {
          this.removeFromCart(productId)
        }
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },
    clearCart() {
      this.cart = []
    }
  }
})