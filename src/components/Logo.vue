<template>
  <router-link to="/">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 406 405.47">
      <path class="cls-1" :stroke="stroke" d="M265 264.47v-122C265 74.91 210.27 20 142.71 20S20 74.77 20 142.32v243.15"/>
      <path class="cls-1" :stroke="stroke" d="M141 142.47v121c0 67.56 55.71 122 123.26 122S386 331.66 386 264.1V20.47"/>
    </svg>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    stroke: {
      type: String,
      default: '#333'
    }
  }
}
</script>

<style lang="stylus">
.cls-1
  fill none
  stroke-linecap round
  stroke-miterlimit 10
  stroke-width 40px
</style>
