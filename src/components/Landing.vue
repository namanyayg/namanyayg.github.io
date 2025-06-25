<template lang="pug">
.page
  Hero
  Blog
  About
  Contact
  // ScrollAnimator
</template>

<script>
import Hero from './Hero/Hero'
import Blog from './Blog/Blog'
import About from './About/About'
import Contact from './Contact/Contact'
// Scroll Animator handles all scroll functionality
// and animations used throughout the page
// import ScrollAnimator from './ScrollAnimator'

export default {
  name: 'Landing',
  components: {
    Hero,
    Blog,
    About,
    Contact
    // ScrollAnimator
  }
}
</script>
