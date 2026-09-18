<template lang="pug">
  a.press-item(:href="data.url" target="_blank" rel="noopener" :class="{ 'press-item--large': large }")
    .thumb
      img(:src="`/static/press/${data.id}.jpg`" :alt="`${data.outlet}: ${data.title}`" loading="lazy")
      span.type {{ typeLabel }}
    .body
      .meta
        span.outlet {{ data.outlet }}
        span.dot ·
        span.date {{ data.date }}
      h3.headline {{ data.title }}
      p.note(v-if="data.note && large") {{ data.note }}
      span.read Read →
</template>

<script>
const LABELS = {
  article: 'Article',
  podcast: 'Podcast',
  video: 'Video',
  radio: 'Radio',
  academic: 'Paper',
  community: 'Community',
  launch: 'Launch'
}

export default {
  name: 'PressItem',
  props: {
    data: { type: Object, required: true },
    large: { type: Boolean, default: false }
  },
  computed: {
    typeLabel () {
      return LABELS[this.data.type] || 'Article'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.press-item
  display flex
  flex-direction column
  background white
  border-radius 8px
  overflow hidden
  text-decoration none
  color $color--body-text
  border 1px solid rgba($color--subtitle-text, 0.18)
  transition transform .3s ease, box-shadow .3s ease, border-color .3s ease

  &:hover
    transform translateY(-4px)
    box-shadow 0 14px 28px rgba(8, 15, 37, 0.12)
    border-color rgba($color--highlight, 0.6)

    .thumb img
      transform scale(1.04)

    .read
      color $color--highlight

.thumb
  position relative
  aspect-ratio 16 / 10
  overflow hidden
  background #f3f5fa
  border-bottom 1px solid rgba($color--subtitle-text, 0.12)

  img
    width 100%
    height 100%
    object-fit cover
    object-position top
    display block
    transition transform .4s ease

  .type
    position absolute
    top .75em
    left .75em
    font-size .7em
    letter-spacing 1.5px
    text-transform uppercase
    font-weight 700
    padding .35em .7em
    border-radius 3px
    background rgba(8, 15, 37, 0.85)
    color white

.body
  padding 1.25em 1.25em 1.35em
  display flex
  flex-direction column
  flex 1

.meta
  font-size .8em
  letter-spacing .5px
  text-transform uppercase
  color $color--subtitle-text
  margin 0 0 .6em

  .outlet
    font-weight 700
    color $color--title-text

  .dot
    margin 0 .5em

.headline
  font-size 1.125em
  line-height 1.35
  font-weight 600
  color $color--title-text
  margin 0 0 .75em

.note
  font-size .95em
  line-height 1.5
  font-weight 300
  margin 0 0 1em
  color $color--body-text

.read
  margin-top auto
  font-weight 700
  font-size .875em
  color $color--title-text
  transition color .2s ease

.press-item--large
  .headline
    font-size 1.5em

  .body
    padding 1.5em

@media (max-width: 50em)
  .press-item--large .headline
    font-size 1.25em
</style>
