<template>
  <div id="nav-bar">
    <NavBarLeftContainer :links="links" @open-side-links="handleSideLinks" />
    <NavBarRightContainer />
    <NavBarSideLinks
      v-if="isSideLinksVisible"
      :links="links"
      @close-side-links="handleSideLinks"
    />
    <ShadedBackground v-if="isSideLinksVisible" />
  </div>
</template>

<script>
import ShadedBackground from './ShadedBackground.vue'
import NavBarLeftContainer from './NavBarLeftContainer.vue'
import NavBarRightContainer from './NavBarRightContainer.vue'
import NavBarSideLinks from './NavBarSideLinks.vue'

export default {
  name: 'NavBar',
  data() {
    return {
      isSideLinksVisible: false,
      links: ['collections', 'men', 'women', 'about', 'contact'],
    }
  },
  methods: {
    handleSideLinks() {
      this.isSideLinksVisible = !this.isSideLinksVisible
    },
  },
  components: {
    ShadedBackground,
    NavBarLeftContainer,
    NavBarSideLinks,
    NavBarRightContainer,
  },
}
</script>

<style scoped lang="scss">
@import './NavBar.scss';
</style>
