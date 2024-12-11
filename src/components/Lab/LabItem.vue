<template lang="pug">
  section.scene.lab-item(:class="`lab-item--${data.key}`")
    a.media(:href="data.href" target="_blank")
      LabMedia(:data="data")
    .content
        header.header
          .main
            h1.item__title
              span {{ data.name }}
            // .created-at
              span.marker Created
              span {{ createdAt }}
              span.age(v-if="showAge") (Age {{ calculatedAge }})
        .description(v-if="data.shortDescription" v-html="data.shortDescription")
        .description(v-if="!data.shortDescription" v-html="data.description")
        .actions
          a.button.view-project(:href="data.href" target="_blank" :style="{ backgroundColor: data.color }") 
            | Visit Project →
          a.github-link(v-if="!data.isClosedSource" target="_blank" :href="`https://github.com/namanyayg/${data.key}`")
            | Source on Github
</template>

<script>
import { TweenLite, Power4 } from 'gsap'
import LabMedia from './LabMedia'

export default {
  name: 'LabItem',
  props: ['data'],
  components: {
    LabMedia
  },
  methods: {
    beginAnimate (e) {
      // Scene is beginning!
      this.$el.classList.remove('scene--set')

      // Quick bind for this scenes elements
      const $ = el => this.$el.querySelector(el)

      TweenLite.from($('.media .bg'), 0.75, {
        opacity: 0,
        x: 20,
        ease: Power4.easeOut
      })
      TweenLite.from($('.media .item-container'), 1, {
        opacity: 0,
        scale: 1.1,
        ease: Power4.easeInOut
      })
      TweenLite.from($('.item__title'), 0.75, {
        opacity: 0,
        x: -40,
        ease: Power4.easeOut,
        delay: 0.5
      })
      TweenLite.from($('.subtitle'), 0.75, {
        opacity: 0,
        x: 40,
        ease: Power4.easeOut,
        delay: 0.625
      })
      TweenLite.from($('.role'), 0.75, {
        opacity: 0,
        y: 20,
        ease: Power4.easeOut,
        delay: 0.75
      })
      TweenLite.from($('.quote p'), 0.75, {
        opacity: 0,
        y: 10,
        rotationX: -10,
        ease: Power4.easeOut,
        delay: 0.825
      })
      TweenLite.from($('.quote .foot'), 0.75, {
        opacity: 0,
        x: 20,
        ease: Power4.easeOut,
        delay: 1
      })
    }
  },
  mounted () {
    // Fire initial animation as soon as `enliven` is dispatched
    this.$el.addEventListener('enliven', this.beginAnimate)
  },
  computed: {
    calculatedAge() {
      const birthDate = new Date(1998, 6) // July is 6 (0-based)
      const projectDate = new Date(this.data.createdAt)
      const age = Math.floor((projectDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000))
      return age
    },
    showAge() {
      return this.calculatedAge < 18
    },
    createdAt() {
      return new Date(this.data.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

// Unitialized scene is set to hidden
.scene--set
  opacity 0

.lab-item
  display flex
  align-items center

  .media
    flex 1
    padding 0 1.5em 0 0

  .content
    flex 1

.work
  margin 0 0 12em
  background $color--work-bg

.header
  display flex
  width 100%
  margin 0 0 1em

.item__title
  font-weight bold
  margin -1em 0 0
  letter-spacing -.5px

  span
    z-index 5
    position relative
    text-shadow 3px 3px $color--work-bg, -3px 3px $color--work-bg

    &:after
      content ''
      height .125em
      background linear-gradient(45deg, $color--work-title-underline--light, $color--work-title-underline--dark)
      position absolute
      left 0
      right 0
      bottom 0
      overflow hidden
      z-index -1

  .main
    width 40%

.type
  font-size 1.125em
  .marker
    margin-right .25em

    &:after
      content ':'
      margin 0 0 0 .25em
      display inline-block
      transform translateY(-2px)
      font-weight 400

.created-at
  font-size 1.125em
  margin-top 0.5em
  .marker
    margin-right .25em

.subhead
  display flex
  flex-direction column
  justify-content space-between
  margin 3.5em 0 .5em 5em
  text-align right
  flex 1

.m-subtitle
  display none

.subtitle
  font-size 1.5em
  margin 0 0 1rem
  font-style italic
  color $color--subtitle-text
  font-weight 300

.description
  font-size 1.25em
  p
    padding 0
    line-height 1.5

.quote
  font-size 1.375em
  margin 3rem 0 0
  position relative
  letter-spacing -.3px
  font-weight 400
  z-index 5
  perspective 1200

  p
    margin 0 0 1em
    transform-origin center bottom

    &:before,
    &:after
      content '“'
      font-family georgia
      position absolute
      font-size 2em
      font-weight bold
      z-index -1
      margin -.25em 0 0 -.625em
      color $color--mark

    &:after
      content '”'
      margin -.25em 0 0 .125em

  .foot
    display flex
    align-items center
    justify-content flex-end

    .cite
      font-style normal
      font-size 1rem
      display flex

    .avatar
      margin .5em .75em 0 0
      img
        display block
        max-height 2.5em
        max-width 2.5em
        width auto
        border-radius 100%

    .name
      font-size 1.125em
      font-weight 700

.m-view-case
  font-size .875rem
  display none

@media (max-width 60em)
  .title
    font-size 4em
  .subtitle
    font-size 1em
  .quote
    font-size 1.25em

@media (max-width 50em)
  .lab-item
    flex-direction column

  .media
    width 100%
    padding 0 !important
    max-width 40em

  .content
    width 100%

  .item__title
    font-size 1.5em
    text-align left
    margin 1em 0 .5rem
  
  .actions
    margin-top .75rem !important
    font-size .875em

  .work
    margin 0 0 9em

  .header
    display block
    text-align center
    margin-bottom 0

  .m-subtitle
    display block
    margin .75em 0
    font-size 1.125em

  .m-view-case
    display block

  .role
    color $color--subtitle-text

  .subhead,
  .marker
    display none

@media (max-width 30em)
  .work
    margin 0 0 7.5em

  .title
    font-size 2.75em
    margin .75em 0 0

  .m-subtitle
    font-size 1em


.age
  margin-left 0.5em
  vertical-align middle
  font-weight normal
  color $color--highlight
  font-weight bold

.actions
  margin-top 2em
  display flex
  gap 1em
  align-items center

  .button
    display inline-block
    padding 0.8em 1.5em
    border-radius 4px
    color white
    text-decoration none
    font-weight bold
    transition transform 0.2s ease
    
    &:hover
      transform translateY(-2px)

  .github-link
    color inherit
    text-decoration none
    border-bottom 1px solid currentColor
    
    &:hover
      opacity 0.8

@media (max-width: 50em)
  .actions
    flex-direction column
    align-items flex-start
</style>
