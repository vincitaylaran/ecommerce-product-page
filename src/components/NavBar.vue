<template>
  <div id="nav-bar">
    <NavBarLeftContainer
      :links="links"
      :is-hidden="isHidden"
      @open-side-links="handleSideLinks"
    />

    <div class="right-container">
      <CartIcon />
      <img class="avatar" src="../../assets/image-avatar.png" alt="avatar" />
    </div>

    <NavBarSideLinks
      :is-hidden="isHidden"
      :links="links"
      @close-side-links="handleSideLinks"
    />
    <ShadedBackground :is-hidden="isHidden" />
  </div>
</template>

<script>
import ShadedBackground from './ShadedBackground.vue'
import CartIcon from './CartIcon.vue'
import NavBarLeftContainer from './NavBarLeftContainer.vue'
import NavBarSideLinks from './NavBarSideLinks.vue'

export default {
  name: 'NavBar',
  data() {
    return {
      isHidden: true,
      links: ['collections', 'men', 'women', 'about', 'contact'],
    }
  },
  methods: {
    handleSideLinks(value) {
      this.isHidden = value
    },
  },
  components: {
    ShadedBackground,
    CartIcon,
    NavBarLeftContainer,
    NavBarSideLinks,
  },
}
</script>

<style scoped lang="scss">
@import './NavBar.scss';
</style>
