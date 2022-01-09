<template>
  <AppLayout> </AppLayout>
</template>

<script>
import AppLayout from './components/AppLayout.vue'

export default {
  name: 'App',
  components: {
    AppLayout,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
@import './scss/colors.scss';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Kumbh Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-size: 1rem;
}

li {
  list-style: none;
}

ul {
  padding: 0;
}

button {
  border: none;
  background: $orange;
  font-weight: 700;
  color: $white;
  border-radius: 10px;
  font-size: 1rem;
}
</style>
