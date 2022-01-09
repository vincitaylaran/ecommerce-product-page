<template>
  <div class="right-container">
    <UserCart
      :items="[
        {
          itemId: 1,
          thumbnail: 'image-product-1-thumbnail.jpg',
          name: 'Fall Limited Edition Sneakers',
          basePrice: 125.0,
          quantity: 3,
        },
      ]"
    />
    <img class="avatar" src="../../assets/image-avatar.png" alt="avatar" />
  </div>
</template>

<script>
import UserCart from './UserCart.vue'
export default {
  name: 'NavBarRightContainer',
  components: {
    UserCart,
  },
}
</script>

<style lang="scss" scoped>
@import './NavBarRightContainer.scss';
</style>
