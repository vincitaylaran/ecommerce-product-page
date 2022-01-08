<template>
  <div id="nav-bar">
    <div class="left-container">
      <!-- This image/svg is only visible when viewing on mobile devices -->
      <img
        v-on:click="toggleLinks"
        class="menu"
        src="../../assets/icon-menu.svg"
        alt="menu"
      />
      <img class="logo" src="../../assets/logo.svg" alt="logo" />
      <ul class="links">
        <li v-for="link in links" v-bind:key="link">
          <a href=""
            >{{ link }}
            <div class="underline" />
          </a>
        </li>
      </ul>
    </div>

    <div class="right-container">
      <img src="../../assets/icon-cart.svg" alt="cart" />
      <img class="avatar" src="../../assets/image-avatar.png" alt="avatar" />
    </div>

    <!-- This element is hidden when viewing from devices wider than mobile phones -->
    <div class="side-links" v-bind:class="{ hidden: !isHidden }">
      <img
        v-on:click="toggleLinks"
        src="../../assets/icon-close.svg"
        alt="close"
      />

      <ul class="side-links__list">
        <li v-for="link in links" v-bind:key="link">
          {{ link }}
        </li>
      </ul>
    </div>
    <ShadedBackground v-bind:is-hidden="!isHidden" />
  </div>
</template>

<script>
import ShadedBackground from './ShadedBackground.vue'

export default {
  name: 'NavBar',
  data: function () {
    return {
      isHidden: false,
      links: ['collections', 'men', 'women', 'about', 'contact'],
    }
  },
  methods: {
    toggleLinks: function () {
      this.isHidden = !this.isHidden
    },
  },
  components: {
    ShadedBackground,
  },
}
</script>

<style scoped lang="scss">
@import './NavBar.scss';
</style>
