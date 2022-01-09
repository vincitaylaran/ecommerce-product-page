<template>
  <!-- This element is hidden when viewing from devices wider than mobile phones -->
  <div class="side-links" v-bind:class="{ hidden: isHidden }">
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
</template>

<script>
export default {
  name: 'NavBarSideLinks',
  props: {
    isHidden: Boolean,
    links: Array,
  },
  methods: {
    toggleLinks() {
      this.$emit('close-side-links')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'NavBarSideLinks.scss';
</style>
