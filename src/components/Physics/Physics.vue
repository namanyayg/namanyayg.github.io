<template lang="pug">
#physics.physics
  .masthead-container
    Masthead(back="dark")
  .physics-intro
    .content
      .wrap
        router-link.back-link(to="/")
          span
            span.arrow ←
            span.text Back to Portfolio
        header.header
          h1.title Physics Simulators
          .subtitle Interactive visualizations of physical phenomena
  .physics
    .wrap
      .physics__items
        LabItem.physics__item(v-for="item in simulators" :key="item.key" :data="item")
</template>

<script>
import Masthead from '../Masthead'
import LabItem from '../Lab/LabItem.vue'
import data from './data.js'

export default {
  name: 'Physics',
  components: {
    Masthead,
    LabItem
  },
  computed: {
    simulators() {
      return data.simulators
    }
  }
}
</script>

<style lang="stylus">
@import '~@/styl/_variables';

.physics {
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 4em;
    font-weight: bold;
  }

  .subtitle {
    font-style: italic;
    font-size: 1.5em;
    font-weight: 300;
  }

  &__item {
    margin: 0 0 4em;
  }
}

</style> 