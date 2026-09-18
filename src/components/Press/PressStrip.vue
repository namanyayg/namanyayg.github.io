<template lang="pug">
#press-strip.press-strip.page
  .wrap
    header.header
      h1.title Featured in
      .subtitle My writing on AI and software engineering gets picked up by the places developers and founders actually read.
    .logos
      router-link.logo-card(v-for="item in featuredItems" :key="item.id" to="/press" :title="item.title")
        img(:src="`/static/press/${item.id}.jpg`" :alt="item.outlet" loading="lazy")
        span.outlet {{ item.outlet }}
    .actions
      router-link.press-strip__button(to="/press") all press coverage →
      a.press-strip__link(:href="pressMailto") Journalist or podcaster? Get in touch →
</template>

<script>
import items, { featured } from './data'

export default {
  name: 'PressStrip',
  computed: {
    featuredItems () {
      return featured.map(id => items.find(i => i.id === id)).filter(Boolean)
    },
    pressMailto () {
      return 'mailto:hi@nmn.gl?subject=' + encodeURIComponent('Press request: ')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.page
  padding 4em 0
  background #f6f8fc
  color $color--body-text
  font-weight 300

.header
  display flex
  width 100%
  justify-content space-between
  align-items center
  margin 0 0 2em

.title
  font-size 4em
  font-weight bold
  color $color--body-text
  margin 0

.subtitle
  font-style italic
  font-size 1.5em
  font-weight 300
  color $color--subtitle-text
  max-width 28em
  text-align right

.logos
  display grid
  grid-template-columns repeat(6, 1fr)
  gap 1.25em

.logo-card
  display block
  text-decoration none
  color $color--title-text
  border-radius 8px
  overflow hidden
  background white
  border 1px solid rgba($color--subtitle-text, 0.18)
  transition transform .3s ease, box-shadow .3s ease

  img
    display block
    width 100%
    aspect-ratio 16 / 10
    object-fit cover
    object-position top

  .outlet
    display block
    padding .75em .9em
    font-size .8em
    font-weight 700
    letter-spacing .5px
    text-transform uppercase

  &:hover
    transform translateY(-4px)
    box-shadow 0 12px 24px rgba(8, 15, 37, 0.1)

.actions
  display flex
  gap 2em
  align-items center
  justify-content center
  margin 3em 0 0
  flex-wrap wrap

.press-strip__button
  display inline-block
  padding 0.875em 2em
  font-size 1.125em
  font-weight 500
  color $color--body-text
  text-decoration none
  border 2px solid rgba($color--subtitle-text, 0.25)
  border-radius 8px
  transition all 0.3s ease
  background white

  &:hover
    background $color--highlight
    border-color $color--highlight
    color white
    transform translateY(-2px)
    box-shadow 0 4px 12px rgba($color--highlight, 0.3)

.press-strip__link
  font-weight 700
  color $color--title-text
  text-decoration none

  &:hover
    color $color--highlight

@media (max-width: 67.5em)
  .header
    flex-direction column
    align-items start !important

  .subtitle
    text-align left
    font-size 1.25em
    margin-top .5em

  .logos
    grid-template-columns repeat(3, 1fr)

@media (max-width: 50em)
  .title
    font-size 3em

  .logos
    grid-template-columns repeat(2, 1fr)

@media (max-width: 32.5em)
  .title
    font-size 2.5em
</style>
