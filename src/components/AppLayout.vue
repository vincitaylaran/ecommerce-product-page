<template>
  <div id="app-layout">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'AppLayout',
  components: {
    NavBar,
  },
}
</script>

<style scoped lang="scss">
@import '../scss/breakpoints.scss';

#app-layout {
  padding: 28px 165px 132px;
  @media (max-width: $breakpoint) {
    padding: 0;
    padding-bottom: 88px;
  }
}
</style>
