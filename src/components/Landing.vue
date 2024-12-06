<template lang="pug">
.page
  Hero
  Lab
  About
  Works
  Contact
  // ScrollAnimator
</template>

<script>
import Hero from "./Hero/Hero";
import Lab from "./Lab/Lab";
import Works from "./Works/Works";
import About from "./About/About";
import Contact from "./Contact/Contact";
// Scroll Animator handles all scroll functionality
// and animations used throughout the page
// import ScrollAnimator from './ScrollAnimator'

export default {
  name: "Landing",
  components: {
    Hero,
    Lab,
    Works,
    About,
    Contact
    // ScrollAnimator
  },
};
</script>
