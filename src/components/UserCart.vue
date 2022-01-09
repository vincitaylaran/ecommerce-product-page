<template>
  <div class="cart-icon-container">
    <!-- TODO: create icon for cart items count -->
    <svg
      @click="toggleCart"
      class="cart-icon"
      width="22"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="#69707D"
        fill-rule="nonzero"
      />
    </svg>

    <div class="basket" v-if="isHidden">
      <h4 class="basket__title">Cart</h4>
      <div class="basket__items" v-if="items.length > 0">
        <div class="item" v-for="item in items" :key="item.id">
          <img
            class="thumbnail"
            :src="`${require('../../assets/' + item.thumbnail)}`"
            alt="image product thumbnail"
          />

          <div class="info">
            <p class="name">{{ item.name }}</p>
            <span class="price-quantity"
              >${{ parseFloat(item.basePrice).toFixed(2) }} x
              {{ item.quantity }}</span
            >
            <span class="total"
              >${{
                parseFloat(item.basePrice * item.quantity).toFixed(2)
              }}</span
            >
          </div>

          <img
            class="remove-item"
            src="../../assets/icon-delete.svg"
            alt="remove icon"
            @click="removeItem"
          />
        </div>

        <button class="checkout">Checkout</button>
      </div>
      <div class="basket__empty" v-else>Your cart is empty.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCart',
  methods: {
    toggleCart() {
      this.isHidden = !this.isHidden
    },
    removeItem() {
      console.error('<UserCart /> --> this function has not been implemented')
    },
  },
  props: {
    items: Array,
  },
  data() {
    return {
      isHidden: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import './UserCart.scss';
</style>
