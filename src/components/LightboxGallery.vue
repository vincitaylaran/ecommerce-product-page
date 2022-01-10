<template lang="">
  <h1>yo</h1>
  <img :src="fetchImage(product.images[0])" alt="" />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../interfaces'
import helper from '../helper-functions'

export default defineComponent({
  name: 'LightboxGallery',
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
  methods: {
    fetchImage() {
      return helper.fetchImage(this.product.images[0])
    },
  },
})
</script>
<style lang="scss"></style>
