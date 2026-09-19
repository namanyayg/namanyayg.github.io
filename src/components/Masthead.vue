<template lang="pug">
  .masthead.scene
    .wrap
      .logo
        Logo(:stroke="strokeColor")
      nav.menu
        a.menu--item(href="https://nmn.gl/blog")
          span Blog
        router-link.menu--item(to="/press")
          span Press
        a.menu--item(href="https://gigacatalyst.com")
          span Gigacatalyst
        router-link.menu--item(to="/#contact")
          span Contact
</template>

<script>
import { TweenLite, Elastic } from 'gsap'
import Logo from './Logo'

export default {
  name: 'Masthead',
  components: {
    Logo
  },
  props: {
    back: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    strokeColor () {
      return this.back === 'dark' ? '#fff' : '#222'
    }
  },
  methods: {
    beginAnimate () {
      // Remove initial transparency, begin scene!
      this.$el.classList.remove('scene--set')

      // Shortcut binding
      const $ = el => this.$el.querySelector(el)

      TweenLite.from($('.logo'), 1, {
        y: -60,
        ease: Elastic.easeOut.config(1.25, 0.9),
        delay: 0.75
      })

      ;[1, 2, 3, 4].map(i => {
        TweenLite.from($('.menu--item:nth-child(' + i + ') span'), 1, {
          y: -60,
          ease: Elastic.easeOut.config(1, 0.9),
          delay: 0.25 * i + 0.75
        })
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimate)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.masthead
  border-bottom thin solid $color--hero-bg--border
  z-index 10
  position relative

  > .wrap
    display flex
    align-items center
    justify-content space-between

.logo
  display flex
  align-items center
  flex-shrink 0

.menu
  display flex
  flex-wrap wrap
  justify-content flex-end
  column-gap 2.5em

.menu--item
  display block
  color white
  font-family $font--sans
  font-size .875em
  font-weight 300
  text-transform lowercase
  letter-spacing 1px
  text-decoration none
  padding 1.75em 0
  position relative
  transition color .2s ease

  span
    display block

  &::after
    content ''
    position absolute
    left 0
    right 0
    bottom 1.35em
    height 1px
    background $color--highlight
    transform scaleX(0)
    transform-origin left
    transition transform .2s ease

  &:hover
    color $color--highlight
    &::after
      transform scaleX(1)

@media (max-width: 40em)
  .menu
    column-gap 1.25em

  .menu--item
    font-size .75em
    padding 1.25em 0

  .masthead > .wrap
    width 92%
</style>
