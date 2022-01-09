<template>
  <div class="right-container">
    <UserCart />
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
