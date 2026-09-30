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
