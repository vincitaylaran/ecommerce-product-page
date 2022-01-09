<template>
  <div id="nav-bar">
    <NavBarLeftContainer :links="links" @open-side-links="handleSideLinks" />
    <NavBarRightContainer />
    <NavBarSideLinks
      v-if="areSideLinksHidden"
      :links="links"
      @close-side-links="handleSideLinks"
    />
    <ShadedBackground v-if="areSideLinksHidden" />
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
      areSideLinksHidden: true,
      links: ['collections', 'men', 'women', 'about', 'contact'],
    }
  },
  methods: {
    handleSideLinks() {
      this.areSideLinksHidden = !this.areSideLinksHidden
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
