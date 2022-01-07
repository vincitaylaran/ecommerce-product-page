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

:root {
  --orange: hsl(26, 100%, 55%);
  --pale-orange: hsl(25, 100%, 94%);
  --very-dark-blue: hsl(220, 13%, 13%);
  --dark-grayish-blue: hsl(219, 9%, 45%);
  --grayish-blue: hsl(220, 14%, 75%);
  --light-grayish-blue: hsl(223, 64%, 98%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
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
