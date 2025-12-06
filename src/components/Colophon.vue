<template lang="pug">
  footer.colophon.page.scene
    .wrap
      .row
        .col-md-9.col-2
          .logo-container
            .logo-container__inner
              Logo(stroke="#ffffff").logo
        .col-md-3.col-10.list.self
          p
            strong With love by Namanyay ⚡
</template>

<script>
import { TweenLite, Power4 } from 'gsap'
import Logo from './Logo'

export default {
  name: 'Colophon',
  components: {
    Logo
  },
  methods: {
    beginAnimating () {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)

      TweenLite.from($('.logo-container'), 0.5, {
        y: 40,
        opacity: 0,
        ease: Power4.easeOut,
        delay: 0.25
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimating)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.row
  align-items center

.colophon
  padding 4em 0
  background-color $color--hero-bg
  color $color--hero-text

  a
    color $color--hero-text--light

    &:hover
      color $color--highlight

.self
  text-align right

p
  margin 0 0 .25em

.logo-container__inner
  display inline-block
  transition all .5s cubic-bezier(0.455, 0.03, 0.515, 0.955)

  &:hover
    transform rotate(360deg)

@media (max-width 36em)
  .colophon
    font-size .875em
  .logo
    height 1.75em
</style>
