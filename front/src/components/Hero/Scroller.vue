<template lang="pug">
  .scroller(:class="color")
    .pill
      p.text Scroll
      .bead
</template>

<script>
export default {
  name: 'Scroller',
  props: ['color']
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scroller
  right 0
  position absolute
  opacity .5

  &.light
    bottom -1.5em

.pill
  border-radius 2em
  border 3px solid $color--hero-text--light
  height 3em
  width 1.75em
  display flex
  justify-content center
  overflow hidden

.text
  text-transform uppercase
  position absolute
  top -2.75em
  font-size .75em
  font-weight 700
  text-align center
  color $color--hero-text--light
  animation hover 1s infinite ease both

.bead
  transform translateY(-.5em)
  background $color--hero-text--light
  width .5em
  height .5em
  border-radius 1em
  animation scroll 1.5s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86)

@keyframes scroll
  0%
    transform translateY(-.5em)
  100%
    transform translateY(3em)

@keyframes hover
  0%
    transform translateY(.15em)
  50%
    transform translateY(-.15em)
  100%
    transform translateY(.15em)
</style>
