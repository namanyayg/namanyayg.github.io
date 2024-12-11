<template lang="pug">
#lab.lab
  .masthead-container
    Masthead(back="dark")
  .lab-intro
    .content
      .wrap
        router-link.back-link(to="/")
          span
            span.arrow ←
            span.text Back to Portfolio
  Lab
</template>

<script>
import Masthead from '../Masthead'
import Lab from './Lab'

export default {
  name: 'LabPage',
  components: {
    Masthead,
    Lab
  }
}
</script>

<style lang="stylus">
@import '~@/styl/_variables'

.back-link {
  text-align: center;
  font-size: 1.5em;
  margin: 1em 0 -1em;
  display: block;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  > span {
    border-bottom: 3px solid $color--highlight;
  }

  &:hover {
    color: $color--highlight;
  }
}
</style> 