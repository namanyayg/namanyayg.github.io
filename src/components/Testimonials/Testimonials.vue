<template lang="pug">
.testimonials.page.scene.about
  .about-intro
    .content
      .wrap
        header.header
          h1.title Testimonials
          .subtitle Feedback from worldwide clients
  .wrap
    .testimonial-container(
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      @touchstart="pauseAutoplay"
      @touchend="resumeAutoplay"
    )
      .testimonial(
        v-for="(testimonial, index) in testimonials" 
        :key="testimonial.by.name"
        :class="{ active: currentIndex === index }"
      )
        .testimonial-content
          p.quote(v-html="testimonial.content")
          .author
            .details
              .name {{ testimonial.by.name }}
              .position {{ testimonial.by.post }}
              .project 
                span.project-title {{ testimonial.project.title }}
                span.project-role {{ testimonial.project.role.join(' • ') }}
    
    .testimonial-nav
      .testimonial-nav-item(
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.by.name"
        :class="{ active: currentIndex === index }"
        @click="setTestimonial(index)"
      ) {{ testimonial.by.name }}
</template>

<script>
import { TweenLite, Power4 } from 'gsap'
import testimonials from './data'

export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials,
      currentIndex: 0,
      autoplayInterval: null
    }
  },
  methods: {
    beginAnimation() {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)

      TweenLite.from($('.header'), 0.75, {
        y: 40,
        opacity: 0,
        ease: Power4.easeOut
      })

      this.animateCurrentTestimonial()
    },
    
    setTestimonial(index) {
      // Reset autoplay timer when manually changing testimonial
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.startAutoplay()
      }
      
      // Animate out current testimonial
      const currentTestimonial = this.$el.querySelector('.testimonial.active')
      TweenLite.to(currentTestimonial, 0.5, {
        opacity: 0,
        x: -50,
        ease: Power4.easeOut
      })
      
      this.currentIndex = index
      
      // Animate in new testimonial
      this.$nextTick(() => {
        this.animateCurrentTestimonial()
      })
    },
    
    animateCurrentTestimonial() {
      const testimonial = this.$el.querySelector('.testimonial.active')
      TweenLite.fromTo(testimonial, 
        0.75,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, ease: Power4.easeOut }
      )
    },
    
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length
        this.setTestimonial(nextIndex)
      }, 5000) // Change testimonial every 5 seconds
    },
    
    pauseAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      }
    },
    
    resumeAutoplay() {
      if (!this.autoplayInterval) {
        this.startAutoplay()
      }
    }
  },
  mounted() {
    this.$el.addEventListener('enliven', this.beginAnimation)
    this.startAutoplay()
  },
  beforeDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.header
  display flex
  width 100%
  justify-content space-between
  align-items center

.title
  font-size 4em
  font-weight bold

.subtitle
  font-style italic
  font-size 1.5em
  font-weight 300

.scene--set
  opacity 0

.testimonials
  background white
  padding 0 0 6em
  color $color--body-text

.testimonial-container
  position relative
  max-width 70em
  margin -2em auto 0
  height 20em // Fixed height to prevent layout shifts
  cursor pointer
  
  &:hover
    .testimonial-content
      transform translateY(-2px)
      box-shadow 0 4px 12px rgba(0,0,0,0.1)
      
  .testimonial-content
    transition transform 0.3s ease, box-shadow 0.3s ease

.testimonial
  position absolute
  top 0
  left 0
  width 100%
  opacity 0
  visibility hidden
  transition visibility 0.5s

  &.active
    opacity 1
    visibility visible

.testimonial-content
  background rgba(0,0,0,0.02)
  border-radius 1em
  padding 2.5em
  position relative

.quote
  font-size 1.5em
  line-height 1.6
  margin 0 0 1.5em
  color $color--body-text

.author
  display flex
  align-items center
  gap 1em

.avatar
  width 3.5em
  height 3.5em
  border-radius 50%
  overflow hidden
  border 2px solid $color--highlight
  
  img
    width 100%
    height 100%
    object-fit cover

.details
  .name
    font-weight bold
    color $color--title-text
    margin-bottom 0.25em
    
  .position
    color $color--subtitle-text
    margin-bottom 0.25em
    
  .project
    color $color--subtitle-text
    
    .project-title
      font-weight bold
      
    .project-role
      &::before
        content '—'
        margin 0 0.5em

.testimonial-nav
  display flex
  justify-content center
  gap 1em
  margin-top 3em
  flex-wrap wrap

.testimonial-nav-item
  background none
  border none
  padding 0.5em 1em
  color $color--subtitle-text
  cursor pointer
  transition all 0.3s ease
  position relative
  
  &::after
    content ''
    position absolute
    bottom -2px
    left 50%
    width 0
    height 2px
    background $color--highlight
    transition all 0.3s ease
    transform translateX(-50%)
  
  &:hover
    color $color--title-text
    transform none
    
    &::after
      width 100%
  
  &.active
    color $color--title-text
    
    &::after
      width 100%

@media (max-width: 48em)
  .testimonials
    padding 0 0 4em

  .header
    flex-direction column
    align-items start

    .title
      font-size 3em
      margin-bottom 0

    .subtitle
      font-size 1.25em
      margin-bottom 3em

  .testimonial-container
    height 20em

  .testimonial-content
    padding 2em

  .quote
    font-size 1em

@media (max-width: 30em)
  .header
    .title
      font-size 2.5em
    .subtitle
      font-size 1.125em

  .testimonial-container
    height 30em

  .testimonial-nav-item
    font-size 0.875em
</style> 