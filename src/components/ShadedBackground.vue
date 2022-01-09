<template>
  <div id="shaded-bg" />
</template>

<script>
export default {
  name: 'ShadedBackground',
  props: {
    isHidden: Boolean,
  },
}
</script>

<style scoped lang="scss">
#shaded-bg {
  min-height: 100vh;
  background: #000;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.75;
  z-index: 1;
}
</style>
