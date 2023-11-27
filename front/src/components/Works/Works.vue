<template lang="pug">
  .work#works
    .work-intro
      .content
        .wrap
          header.header
            h1.title Ventures
            .subtitle Executing multiple projects parallely to maximize output & productivity
    .ventures
      .wrap
        .ventures__content
          p Currently reinventing nutrition @ <a href="https://ayom.io/" class="ayom" rel="nofollow">Ayom</a>&nbsp;🥬
          //- p and leading web & blockchain development @ <a href="https://dyeus.co/" class="dyeus">Dyeus</a>&nbsp;🌟
          p &hellip;and working on a few more <em>exciting</em> products, currently in <span class="stealth">stealth mode</span>&nbsp;‍🚀
          p <em>while actively hiring: critical thinkers & achievers</em>&nbsp;🧠
    //- .works
      Work(v-for="work in getWorks('featured')" :key="work" :data="works[work]")
</template>

<script>
// import WorkItem from './WorkItem'
// import data from './data'

export default {
  name: 'Works',
  components: {
    // Work: WorkItem
  },
  data () {
    return {
      // works: data
    }
  },
  methods: {
    /* getWorks (category) {
      const mapping = {
        featured: ['asa', 'autolo', 'asianfanfics', 'lownotes', 'cyankart']
      }

      return mapping[category]
    } */
  }
}
</script>

<style lang="stylus">
.work
  .header
    display flex
    width 100%
    justify-content space-between
    align-items center

  .work-intro
    padding 3em 0

  .title
    font-size 4em
    font-weight bold

  .subtitle
    font-style italic
    font-size 1.5em
    font-weight 300

gradient-text($gradient, $bg = 'light')
  @supports(mix-blend-mode: lighten)
    display: inline-block;
    position: relative;

    &::before
      content: '';
      display: block;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;

      background: unquote($gradient);
      pointer-events: none;

    if ($bg == 'light')
      color: #000;
      background: #fff;
      mix-blend-mode: multiply;

      &::before
        mix-blend-mode: screen;
    else
      color: #fff;
      background: #000;
      mix-blend-mode: lighten;

      &::before
        mix-blend-mode: multiply;

.ventures__content
  font-size 2em
  margin 0 0 9rem
  line-height 2

  .ayom
    gradient-text('linear-gradient(to right, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1))', 'light')

  .dyeus
    gradient-text('linear-gradient(to left, rgba(246,191,13,1) 0%, rgb(255 104 104)  90%)', 'light')

  .stealth
    gradient-text('linear-gradient(to right,#7f9fa3, #aec4c7, #bedbdf, #7f9fa3, #b8d0d3)', 'light')

@media (max-width 82.5em)
  .work
    font-size .875em

  .ventures__content
    font-size 1.75em
    line-height 2.25

@media (max-width 67.5em)
  .work
    .header
      flex-direction column
      margin 0 0 2em
      align-items start !important

    .title
      margin 0

    .subtitle
      font-size 1.375em

  .ventures__content
    font-size 1.5em
    line-height 2.5

@media (max-width 60em)
  .subtitle
    font-size 1.125em

  .work
    font-size .75em

@media (max-width 50em)
  .title
    font-size 3em

  .subtitle
    font-size 1em

  .ventures__content
    margin 0 0 6em

@media (max-width 37.5em)
  .ventures__content
    line-height 1.5
    font-size 1.375em

  .work .work-intro
    padding-bottom 1em

@media (max-width 32.5em)
  .ventures__content
    font-size 1.25em
</style>
