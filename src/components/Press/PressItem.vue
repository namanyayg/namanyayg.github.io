<template lang="pug">
  a.press-item(:href="data.url" target="_blank" rel="noopener noreferrer" :class="{ 'press-item--large': large }")
    .thumb
      img(:src="`/static/press/${data.id}.jpg`" alt="" loading="lazy")
    .body
      h3.headline {{ data.title }}
      .meta
        span.outlet {{ data.outlet }}
        span.dot ·
        span.date {{ data.date }}
        span.dot ·
        span.type {{ typeLabel }}
      p.note(v-if="data.note && large") {{ data.note }}
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
  display grid
  grid-template-columns 6em minmax(0, 1fr)
  align-content start
  gap 1.25em
  padding 1.25em 0
  border-top 1px solid rgba($color--title-text, .25)
  text-decoration none
  color $color--body-text

  &:focus-visible
    outline 2px solid #a55c00
    outline-offset 5px

  &:hover .headline
    text-decoration underline
    text-underline-offset .18em

.thumb
  aspect-ratio 16 / 10
  overflow hidden
  background #f3f5fa

  img
    width 100%
    height 100%
    object-fit cover
    object-position top
    display block

.body
  min-width 0

.meta
  font-size .8em
  font-family $font--sans
  color $color--body-text
  line-height 1.6

  .outlet
    font-weight 700
    color $color--title-text

  .dot
    margin 0 .5em

.headline
  font-size 1.125em
  line-height 1.4
  font-weight 600
  color $color--title-text
  margin 0 0 .5em

.note
  font-size 1em
  line-height 1.6
  margin .75em 0 0

.press-item--large
  display flex
  flex-direction column
  gap 1.25em
  padding 0 0 1.5em
  border-top 0
  border-bottom 1px solid rgba($color--title-text, .25)

  .thumb
    width 100%
    aspect-ratio 16 / 9

  .headline
    font-size 1.5em

@media (max-width: 40em)
  .press-item
    grid-template-columns 4.5em minmax(0, 1fr)
    gap 1em

  .press-item--large .headline
    font-size 1.25em
</style>
