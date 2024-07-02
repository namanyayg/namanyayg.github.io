<template lang="pug">
.page
  Hero
  About
  Contact
  ScrollAnimator
</template>

<script>
import Hero from "./Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
// Scroll Animator handles all scroll functionality
// and animations used throughout the page
// import ScrollAnimator from './ScrollAnimator'

export default {
  name: "Landing",
  components: {
    Hero,
    About,
    Contact,
    // ScrollAnimator
  },
};
</script>
