<template lang="pug">
  .masthead.scene
    .wrap
      .logo
        Logo(:stroke="strokeColor")
      nav.menu
        a.menu--item(href="https://nmn.gl/blog")
          span Blog
        a.menu--item(href="https://nmn.gl/lab")
          span Lab
        a.menu--item(href="#contact" v-smooth-scroll)
          span Contact
</template>

<script>
import { TweenLite, Elastic } from 'gsap'
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import Logo from './Logo'

Vue.use(vueSmoothScroll)

// HACK: SUPPRESS WARNING FROM SMOOTH SCROLL
const SMOOTHSCROLL_HACK = {
  v: null,
  smooth: null,
  scroll: null
} // END HACK

export default {
  name: 'Masthead',
  data () {
    return {
      ...SMOOTHSCROLL_HACK
    }
  },
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

      ;[1, 2].map(i => {
        TweenLite.from($(`.menu--item:nth-child(${i}) span`), 1, {
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

.menu
  display flex

.menu--item
  display block
  color white
  font-weight 300
  text-transform lowercase
  letter-spacing 1px
  text-decoration none
  padding 2em 0
  margin-left 3em
  position relative
  top 0
  transition all .15s ease

  span
    display block

  &:hover
    top -.25em
    color $color--highlight
</style>
