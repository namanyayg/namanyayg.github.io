<template>
  <div id="app">
    <router-view/>
    <Colophon/>
  </div>
</template>

<script>
/**
 * @TODO
 *
 * - Favicons
 * - UntitleClothing integration
 */
import { mapActions } from 'vuex'

import Colophon from './components/Colophon'

export default {
  name: 'App',
  components: {
    Colophon
  },
  methods: {
    ...mapActions(['fetchViewTypeFromRoute']),

    async fetchViewType () {
      const { $route } = this
      const viewHash = await this.fetchViewTypeFromRoute($route)
      // make sure to delete the viewHash when loaded
      this.$router.replace($route.fullPath.replace(viewHash, ''))
    }
  },
  created () {
    this.fetchViewType()
  }
}
</script>

<style lang="stylus">
@import '~@/styl/_variables'
@import '~@/styl/_base'
@import '~@/styl/_global'

.wrap
  width 90%
  max-width 87.5em
  margin 0 auto

body
  font-family Europa, monospace
  color $color--body-text
  user-select none
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

h1, h2, h3, h4, h5, h6
  color $color--title-text
</style>
