<template lang="pug">
  canvas.nightsky
</template>

<script>
export default {
  name: 'HeroBg',
  data () {
    return {
      stars: [],
      dimensions: {}
    }
  },
  computed: {
    $canvas () {
      return this.$el
    },
    ctx () {
      return this.$canvas.getContext('2d')
    }
  },
  methods: {
    setDimensions () {
      const { $canvas } = this
      let { height, width } = document.querySelector('.hero').getBoundingClientRect()

      // Get a large dimension (hypotenuse) to extend
      // nightsky all over the screen and allow
      // rotation of the canvas
      let hyp = Math.floor(Math.sqrt(height ** 2 + width ** 2))
      let length = hyp * 2

      // For flexibility, build support for 2 dimensions
      // but we're using only 1
      this.dimensions = {
        height: length,
        width: length
      }

      // Set negative margins to position center (pole star)
      // with the text
      $canvas.style.marginTop = `${-(length / 2 - height / 2)}px`
      $canvas.style.marginLeft = `${-(length / 2 - width / 3)}px`

      // Finally, set the actual dimensions to the canvas
      $canvas.height = this.dimensions.height
      $canvas.width = this.dimensions.width
    },
    /**
     * Start filling the skies
     */
    init () {
      /**
       * Generates position for given star
       * @returns { x, y }
       */
      const _generatePosition = () => {
        const x = Math.floor(Math.random() * this.dimensions.width)
        const y = Math.floor(Math.random() * this.dimensions.height)
        return { x, y }
      }

      /**
       * Returns period, i.e., duration of
       * twinkling
       */
      const _generateDelta = () => {
        return 0.005 + ((Math.floor(Math.random() * 20)) / 1000)
      }

      /**
       * Returns brightness between 0 and 1
       */
      const _generateBrightness = () => {
        return Math.floor(Math.random() * 10) / 10
      }

      /**
       * Generates minimum level of brightness
       */
      const _generateMin = () => {
        return Math.floor(Math.random() * 3) / 10 + 0.1
      }

      /**
       * Return `type` for a star (integer)
       */
      const _generateType = () => {
        return Math.floor(Math.random() * 6)
      }

      /**
       * Returns maximum number of stars allowed on screen
       */
      const _GET_MAX_STARS = ({ width }) => {
        return width > 2000 ? 256 : 128
      }

      /**
       * Returns `n` number of newly created stars
       */
      const createStars = (n) => {
        return Array(n).fill(null).map((_, i) => {
          const { x, y } = _generatePosition()
          const delta = _generateDelta()
          const brightness = _generateBrightness()
          const type = _generateType()
          const min = _generateMin()

          return {
            x,
            y,
            delta,
            brightness,
            type,
            min
          }
        })
      }

      // Populate state with required number of stars
      this.stars = createStars(_GET_MAX_STARS(this.dimensions))
    },

    /**
     * Renders all stars from state on the nightsky
     */
    render () {
      const { ctx } = this

      const _renderStar = star => {
        const { x, y, brightness } = star
        const color = `rgba(255, 255, 255, ${brightness})`

        // Allow choice of different rendering schemes
        // with array-based renderers
        const renderers = [
          _ => { // Large Square
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.rect(x, y, 2, 2)
            ctx.closePath()
            ctx.fill()
          }
        ]
        renderers[0]()
      }

      // Call the render function for all stars in state
      this.stars.map(_renderStar)
    },

    /**
     * Update state of nightsky for next tick
     */
    update () {
      /**
       * Provide brightness of star in next tick,
       * allows 'twinkling'
       */
      const _updateBrightness = star => {
        const { brightness, delta, min } = star
        // `delta` can be positive or negative,
        // add it to the star's `brightness` first
        star.brightness = brightness + delta
        // If brightness exceeds 1 or is less than `min`,
        // reverse direction of brightness change
        if (star.brightness >= 1 || star.brightness <= min) star.delta *= -1
        // ...And place hard floor/ceiling on possible values
        if (star.brightness > 1) star.brightness = 1
        if (star.brightness < min) star.brightness = min
        return star
      }

      // Update all stars in state immutably
      this.stars = this.stars.map(star => {
        let newStar = star
        newStar = _updateBrightness(newStar)
        return newStar
      })
    },

    /**
     * Clear complete canvas
     */
    clear () {
      const { ctx, dimensions } = this
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    },

    draw () {
      // Clear, update, and then render
      // stars in state in the animation loop
      this.clear()
      this.update()
      this.render()
      requestAnimationFrame(this.draw)
    }
  },
  created () {
    // HACK: Use an initial setTimeout to ensure
    // that DOM is rendered
    setTimeout(() => {
      this.setDimensions()
      this.init()
      requestAnimationFrame(this.draw)
    }, 42)
  }
}
</script>

<style lang="stylus" scoped>
@keyframes time
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

.nightsky
  // Make the sky rotate, slowly
  animation time 256s linear infinite
  transform-origin center center
</style>
