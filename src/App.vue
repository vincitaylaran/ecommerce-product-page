<template>
  <AppLayout>
    <LightboxGallery :product="product" />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './components/AppLayout.vue'
import LightboxGallery from './components/LightboxGallery.vue'
import { Product } from './interfaces'

let product: Product = require('./data.json')

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
    LightboxGallery,
  },
  data() {
    return {
      product,
    }
  },
})
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
  cursor: pointer;
}
</style>
