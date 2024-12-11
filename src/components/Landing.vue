<template lang="pug">
.page
  Hero
  Testimonials
  About
  Works
  Lab(:showOnlyFeatured="true")
  Contact
  // ScrollAnimator
</template>

<script>
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";
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
    Testimonials,
    Lab,
    Works,
    About,
    Contact
    // ScrollAnimator
  },
};
</script>
