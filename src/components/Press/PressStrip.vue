<template lang="pug">
#press-strip.press-strip.page
  .wrap
    header.header
      h1.title Featured in
      .subtitle My writing on AI and software engineering gets picked up by the places developers and founders actually read.
    .logos
      router-link.logo-card(v-for="item in featuredItems" :key="item.id" to="/press" :title="item.title")
        .shot
          img(:src="`/static/press/${item.id}.jpg`" :alt="item.outlet" loading="lazy")
          .shade
          span.outlet {{ item.label || item.outlet }}
        p.headline {{ item.title }}
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
  grid-template-columns repeat(3, 1fr)
  gap 1.5em

.logo-card
  display flex
  flex-direction column
  text-decoration none
  color $color--title-text
  border-radius 10px
  overflow hidden
  background white
  border 1px solid rgba($color--subtitle-text, 0.18)
  transition transform .3s ease, box-shadow .3s ease

.shot
  position relative
  aspect-ratio 16 / 9
  overflow hidden
  background #eef1f7

  img
    position absolute
    inset 0
    width 100%
    height 100%
    object-fit cover
    object-position top
    transition transform .4s ease

  .shade
    position absolute
    inset 0
    background linear-gradient(to top, rgba(8, 15, 37, 0.85) 0%, rgba(8, 15, 37, 0.35) 45%, rgba(8, 15, 37, 0) 70%)

  .outlet
    position absolute
    left .9em
    right .9em
    bottom .8em
    color white
    font-size .8em
    font-family $font--sans
    font-weight 700
    letter-spacing .5px
    text-transform uppercase
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

.headline
  margin .8em .9em .95em
  padding 0
  font-size .85em
  line-height 1.4
  height 2.8em
  overflow hidden
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
  color $color--body-text

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
  font-family $font--sans
  transition background-color .25s ease, color .25s ease, border-color .25s ease, transform .25s ease, box-shadow .25s ease
  background white

.press-strip__link
  font-weight 700
  font-family $font--sans
  color $color--title-text
  text-decoration none

  &:hover
    color $color--highlight

@media (hover: hover)
  .logo-card:hover
    transform translateY(-4px)
    box-shadow 0 12px 24px rgba(8, 15, 37, 0.1)

    .shot img
      transform scale(1.04)

  .press-strip__button:hover
    background $color--highlight
    border-color $color--highlight
    color white
    transform translateY(-2px)
    box-shadow 0 4px 12px rgba($color--highlight, 0.3)

@media (max-width: 67.5em)
  .header
    flex-direction column
    align-items start !important

  .subtitle
    text-align left
    font-size 1.25em
    margin-top .5em

@media (max-width: 50em)
  .title
    font-size 3em

  .logos
    grid-template-columns repeat(2, 1fr)

@media (max-width: 32.5em)
  .title
    font-size 2.5em
</style>
