<template>
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
</template>

<script>
export default {
  name: 'NavBarLeftContainer',
  props: {
    links: Array,
  },
  methods: {
    toggleLinks() {
      this.$emit('open-side-links')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'NavBarLeftContainer.scss';
</style>
