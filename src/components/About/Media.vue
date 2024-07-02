<template lang="pug">
  .media(@mousemove="tiltMockup")
    .bg(:style="mediaBgStyle" )
    .item-container
      .wrap
        .item
          .video-container(:style="videoBgStyle")
            .shadow
            video(:poster="posterUrl" autoplay loop muted)
              source(:src="videoUrl" type="video/mp4")
</template>

<script>
import {TweenLite, Power4} from 'gsap'

export default {
  name: 'Media',
  props: ['data'],
  data () {
    return {
      mediaBgStyle: {
        backgroundImage: `url('/static/portfolio/backgrounds/${this.data.namespace}.jpg')`
      }
    }
  },
  computed: {
    videoUrl () { return `/static/portfolio/${this.data.media.video}.mp4` },
    posterUrl () { return `/static/portfolio/${this.data.media.video}.jpg` },
    videoBgStyle () {
      return {
        background: `linear-gradient(45deg, rgba(0,0,0,.3), rgba(0,0,0,.1)), url(${this.posterUrl})`
      }
    }
  },
  methods: {
    getXY (evt, element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
      const scrollLeft = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft
      const elementLeft = rect.left + scrollLeft
      const elementTop = rect.top + scrollTop

      const x = evt.pageX - elementLeft
      const y = evt.pageY - elementTop

      return { x, y }
    },

    tiltMockup (e) {
      const m = this.getXY(e, e.target) // Position of mouse relative to element
      const pos = { // Relative position with width & height of element
        w: m.x * 100 / e.target.offsetWidth,
        h: m.y * 100 / e.target.offsetHeight
      }
      const item = e.target.querySelector('.item')

      if (item) {
        TweenLite.to(item, 1, {
          rotationX: 25 - (0.15 * pos.h),
          rotationY: 15 + (0.15 * pos.w),
          ease: Power4.easeOut
        })
      }
    },

    setInitialMockupTilts () {
      TweenLite.set('.item', {
        rotationX: 25,
        rotationY: 15
      })
    }
  },
  mounted () {
    this.setInitialMockupTilts()
  }
}
</script>

<style lang="stylus" scoped>
.media
  position relative

.bg
  background #eeeeee
  background-size cover
  position absolute
  left 0
  right 0
  top 0
  bottom 0

  &:after
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background linear-gradient(bottom, white, rgba(white, 0) 40%)

.wrap
  position relative
  top -1em

.item-container
  perspective 100em

.item
  max-width 40em
  margin 0 auto
  position relative
  transform-style preserve-3d
  backface-visibility hidden
  z-index 5

.video-container
  display block
  max-width 100%
  background-size 0 cover

  .shadow
    position absolute
    top 1em
    left 1em
    right 1em
    bottom 1em
    background rgba(0, 0, 0, .5)
    box-shadow 0 0 3em 1em rgba(0,0,0,.6)
    transform translateZ(-2em) translateY(.5em)

  &:before,
  &:after
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background inherit
    transform-origin left center
    transform rotateY(90deg)
    width 1em

  &:after
    transform-origin bottom center
    transform rotateX(90deg)
    width 100%
    top auto
    bottom 0
    height 1em

  video
    display block
    width 100%
    object-fit cover

@media (max-width 40em)
  .video-container
    &:before
      width .5em
    &:after
      height .5em
</style>
