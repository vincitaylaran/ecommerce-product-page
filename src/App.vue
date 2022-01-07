<template>
  <TheLayout> </TheLayout>
</template>

<script>
import TheLayout from './components/TheLayout.vue'

export default {
  name: 'App',
  components: {
    TheLayout,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

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
</style>
