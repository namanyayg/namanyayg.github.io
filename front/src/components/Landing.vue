<template lang="pug">
.page
  Hero
  Works
  Contact
  ScrollAnimator
</template>

<script>
import Hero from './Hero/Hero'
// import Works from './Works/Works'
import Works from './Works/Works'
import Contact from './Contact/Contact'
// Scroll Animator handles all scroll functionality
// and animations used throughout the page
import ScrollAnimator from './ScrollAnimator'

export default {
  name: 'Landing',
  components: {
    Hero,
    Works,
    Contact,
    ScrollAnimator
  }
}
</script>
