<template>
  <div class="scroll-animator"></div>
</template>

<script>
export default {
  name: 'ScrollAnimator',
  data () {
    return {
      enliven: new Event('enliven')
    }
  },
  computed: {
    GAP () {
      // get viewport height https://stackoverflow.com/a/8876069
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      return Math.round(h * 0.5)
    },
    scenes () {
      return [...document.querySelectorAll('.scene')]
    }
  },
  methods: {
    /**
     * Initialize the animations by adding
     * `scene--set` class to every scene and
     * binding animation event trigger checker
     * to window's scroll
     */
    init () {
      // Initializes all scenes
      this.scenes.forEach(s => s.classList.add('scene--set'))

      // Bind animation check to scroll
      window.addEventListener('scroll', this.animateVisibleScenes)

      // And init once
      this.animateVisibleScenes()
    },
    /**
     * Trigger animations on scenes that are visible in viewport,
     * according to some criteria
     */
    animateVisibleScenes (e) {
      // https://stackoverflow.com/a/44422472
      const windowScrolledToBottom = _ => (window.innerHeight + Math.ceil(window.pageYOffset)) + 100 >= document.body.offsetHeight

      this.scenes
        /**
         *`scene--set` is only on scenes that haven't begun
         * animating, and animation to be done only to scenes
         * which are less than `this.GAP` distance from
         * top of viewport
         */
        .filter(s =>
          s.classList.contains('scene--set') &&
          (s.getBoundingClientRect().top < this.GAP ||
          windowScrolledToBottom()))
        // Event `this.enliven` prompts to trigger animations
        .forEach(s => s.dispatchEvent(this.enliven))
    }
  },
  mounted () {
    window.addEventListener('DOMContentLoaded', this.init)
  }
}
</script>
