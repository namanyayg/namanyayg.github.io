<template lang="pug">
  .page.scene#contact
    .contact
      .wrap
        .persp
          .title Contact
          .content
            p(v-if="isAccepting") Accepting select projects only (as of {{ currentQuarter }}).

            p Write to me at&nbsp;
              a(href="mailto:hi@nmn.gl") hi@nmn.gl
              |  if you wish to create something extraordinary.
</template>

<script>
import { TweenLite, Power4 } from 'gsap'

export default {
  name: 'Contact',
  data () {
    return {
      rfq: {
        name: null,
        from: null,
        message: null,
        budget: null
      },
      isAccepting: true
    }
  },
  computed: {
    currentQuarter () {
      const d = new Date()
      const q = Math.floor((d.getMonth() + 3) / 3)
      return `Q${q} ${d.getFullYear()}`
    }
  },
  methods: {
    submitRfq () {
      console.log(this.rfq)
      const { rfq } = this

      const $ = el => this.$el.querySelector(el)
      const $$ = el => this.$el.querySelectorAll(el)

      this.axios.post('/namaste', { rfq })
        .then(res => {
          // Make the existing form disappear
          ;[1, 2, 3, 4, 5].map(i => {
            TweenLite.to($$(`.control`)[i - 1], 0.5, {
              rotationY: -20,
              opacity: 0,
              ease: Power4.easeIn,
              delay: 0.125 * (i - 1)
            })
          })

          // Bring in the thanks
          $('.thank-you').style.zIndex = 2
          TweenLite.to($('.thank-you'), 1, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            ease: Power4.easeOut,
            delay: 1
          })
        })
    },

    beginAnimation () {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)

      TweenLite.from($('.title'), 1, {
        rotationX: 80,
        opacity: 0,
        ease: Power4.easeOut
      })

      ;[1, 2, 3].map(i => {
        TweenLite.from($(`.content p:nth-child(${i})`), 1, {
          y: 10,
          rotationX: -10,
          opacity: 0,
          ease: Power4.easeOut,
          delay: 0.25 * i
        })
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimation)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.page
  padding 8em 0 10em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color $color--hero-text--light

a
  font-weight 700
  color white

  &:hover
    color $color--highlight

.thank-you
  font-size 1.25em
  padding 1.5em 2em
  box-sizing border-box
  font-weight 300
  background $color--alt
  color rgba(white, .8)
  position absolute
  top 0
  left 15px
  right 15px
  z-index -1
  opacity 0
  transform translateY(3em)

  strong
    font-weight 400
    color white

  p
    margin 0

    + p
      margin-top .5em

.persp
  perspective 800
  position relative

  &:nth-child(1)
    perspective-origin top center

  &:nth-child(2)
    perspective-origin center right

.title
  font-size 4em
  font-weight 700
  margin 0 0 1em
  color $color--hero-title
  transform-origin center bottom

.content
  font-size 1.5em
  font-weight 300

.control .element
  background darken($color--hero-bg--dark, 25%)

.foci
  background lighten($color--hero-bg, 10%)

input, textarea, select
  color $color--hero-text--light

.button-container
  display flex
  justify-content flex-end
  width 100%

.control
  transform-origin center right

button
  background $color--highlight
  padding 1.25em 1.5em
  color #fff
  font-size .875em

@media (max-width 60em)
  .content
    font-size 1.25em

@media (max-width 48em)
  .title
    font-size 2.75em
    margin 0 0 .5em

  .page
    padding 6em 0 8em

  .thank-you
    margin 2em 0 0

@media (max-width 30em)
  .title
    font-size 2.5em
    line-height 1
    margin 0 0 2rem

  .content
    font-size 1em
</style>
