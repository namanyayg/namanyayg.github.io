<template lang="pug">
#press.press
  .masthead-container
    Masthead(back="dark")
  .press-intro
    .wrap
      router-link.back-link(to="/")
        span
          span.arrow ←
          span.text Back to Portfolio
      header.header
        h1.title In the press
        p.subtitle
          | My essays on AI and software have reached over four million readers and been discussed by
          | The New York Times, Inc., Futurism, The Register, Marketplace, and dozens of creators.
          | Here is the full record.
      .stats
        .stat(v-for="s in stats" :key="s.label")
          .stat__value {{ s.value }}
          .stat__label {{ s.label }}

  section.press-section.press-section--featured
    .wrap
      h2.section-title Featured
      .grid.grid--featured
        PressItem(v-for="item in featuredItems" :key="item.id" :data="item" :large="true")

  section.press-section.press-section--contact#press-contact
    .wrap
      .contact-card
        .contact-card__text
          h2 Writing a story? Recording an episode?
          p
            | I'm happy to talk about AI and the future of software engineering, what happens to junior
            | developers, vibe coding, building a company as a solo founder in Y Combinator, and how B2B
            | software changes when customers can build their own features.
          p.small I reply to press requests within one business day. Based in San Francisco, available on Pacific hours and happy to record remotely.
        .contact-card__actions
          a.button.button--primary(:href="pressMailto") Email me for press
          router-link.button.button--ghost(to="/press-kit") Press kit &amp; bio
          router-link.button.button--ghost(to="/media") Photos

  section.press-section
    .wrap
      h2.section-title All coverage
      .filters
        button.filter(v-for="f in filters" :key="f.key" :class="{ 'filter--active': activeFilter === f.key }" @click="activeFilter = f.key") {{ f.label }}
      .grid
        PressItem(v-for="item in filteredItems" :key="item.id" :data="item")

  section.press-section.press-section--videos
    .wrap
      h2.section-title Videos &amp; podcasts
      p.section-lede Creators with a combined audience of more than four million subscribers made videos about my writing. I've also been a guest on shows about AI and startups.
      .videos
        a.video(v-for="v in videos" :key="v.id" :href="v.url" target="_blank" rel="noopener")
          span.video__creator
            | {{ v.creator }}
            span.video__badge(v-if="v.guest") guest
            span.video__subs(v-else-if="v.subs") {{ v.subs }} subscribers
          span.video__title {{ v.title }}
          span.video__arrow →
</template>

<script>
import Masthead from '../Masthead'
import PressItem from './PressItem'
import items, { stats, featured, videos } from './data'

const FILTERS = [
  { key: 'all', label: 'Everything' },
  { key: 'article', label: 'Articles' },
  { key: 'podcast', label: 'Podcasts & radio' },
  { key: 'launch', label: 'Company' },
  { key: 'community', label: 'Community' }
]

export default {
  name: 'PressPage',
  components: { Masthead, PressItem },
  data () {
    return {
      items,
      stats,
      videos,
      filters: FILTERS,
      activeFilter: 'all'
    }
  },
  computed: {
    featuredItems () {
      return featured.map(id => this.items.find(i => i.id === id)).filter(Boolean)
    },
    filteredItems () {
      if (this.activeFilter === 'all') return this.items
      if (this.activeFilter === 'podcast') return this.items.filter(i => i.type === 'podcast' || i.type === 'radio' || i.type === 'video')
      return this.items.filter(i => i.type === this.activeFilter)
    },
    pressMailto () {
      const subject = encodeURIComponent('Press request: ')
      const body = encodeURIComponent('Hi Namanyay,\n\nI am writing for / producing …\nTopic: …\nDeadline: …\nFormat (written Q&A, call, recording): …\n\nThanks,\n')
      return `mailto:hi@nmn.gl?subject=${subject}&body=${body}`
    }
  },
  mounted () {
    document.title = 'Press — Namanyay Goel'
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.press
  background white
  color $color--body-text
  font-weight 300

.press-intro
  padding 2em 0 3em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color $color--hero-subtitle

  .header
    max-width 46em
    margin 2.5em 0 3em

  .title
    font-size 4em
    font-weight bold
    color $color--hero-title
    margin 0 0 .5em
    letter-spacing -1px

  .subtitle
    font-size 1.375em
    line-height 1.5
    margin 0

.stats
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.5em

.stat
  padding 1.25em 1.5em
  border 1px solid $color--hero-bg--border
  border-radius 8px
  background rgba(255, 255, 255, 0.03)

  &__value
    font-size 2.25em
    font-weight 700
    color $color--highlight
    line-height 1

  &__label
    margin-top .5em
    font-family $font--sans
    font-size .95em
    color $color--hero-text--light

.press-section
  padding 4em 0

  & + &
    padding-top 0

.section-title
  font-size 2.25em
  font-weight bold
  color $color--title-text
  margin 0 0 1.25em

.section-lede
  font-size 1.125em
  max-width 44em
  margin -0.5em 0 1.75em

.grid
  display grid
  grid-template-columns repeat(auto-fill, minmax(min(18em, 100%), 1fr))
  gap 1.5em

  &--featured
    grid-template-columns repeat(auto-fill, minmax(min(24em, 100%), 1fr))
    gap 2em

.filters
  display flex
  flex-wrap wrap
  gap .5em
  margin 0 0 1.5em

.filter
  font-family $font--sans
  background white
  color $color--body-text
  border 1px solid rgba($color--subtitle-text, 0.3)
  border-radius 999px
  padding .5em 1.1em
  font-size .875em
  font-weight 500
  letter-spacing 0
  text-transform none
  cursor pointer

  &:hover
    transform none
    border-color $color--highlight
    color $color--title-text

  &--active
    background $color--title-text
    border-color $color--title-text
    color white

.press-section--contact
  padding 0 0 4em

.contact-card
  display flex
  gap 2.5em
  align-items center
  justify-content space-between
  padding 2.5em
  border-radius 12px
  background-color $color--hero-bg
  background-image radial-gradient(circle at 20%, $color--hero-bg 10%, $color--hero-bg--dark)
  border 1px solid $color--hero-bg--border
  color $color--hero-subtitle

  h2
    font-size 1.875em
    font-weight bold
    color $color--hero-title
    margin 0 0 .5em

  p
    font-size 1.125em
    line-height 1.55
    margin 0 0 .75em
    max-width 40em
    color $color--hero-subtitle

  a
    color $color--hero-title
    font-weight 700
    text-decoration none

    &:hover
      color $color--highlight

  .small
    font-size .95em
    color $color--hero-text--light
    margin 0

  &__actions
    display flex
    flex-direction column
    gap .75em
    min-width 15em

  &__actions
    display flex
    flex-direction column
    gap .75em
    min-width 15em

.button
  font-family $font--sans
  text-align center
  border-radius 8px
  padding .9em 1.5em
  font-size .95em
  letter-spacing 1px
  text-decoration none
  transition background-color .25s ease, color .25s ease, border-color .25s ease, transform .25s ease, box-shadow .25s ease

  &--primary
    background $color--highlight
    color white

  &--ghost
    background rgba(255,255,255,0.06)
    color $color--hero-text
    border 2px solid rgba(255,255,255,0.18)

.videos
  display grid
  grid-template-columns repeat(2, 1fr)
  gap .75em 1.5em

.video
  display grid
  grid-template-columns 1fr auto
  grid-template-rows auto auto
  column-gap 1em
  padding 1em 1.25em
  border 1px solid rgba($color--subtitle-text, 0.18)
  border-radius 8px
  text-decoration none
  color $color--body-text
  font-family $font--sans
  transition border-color .25s ease, transform .25s ease, color .25s ease

  &__creator
    font-size .8em
    font-family $font--sans
    letter-spacing .5px
    text-transform uppercase
    font-weight 700
    color $color--title-text

  &__subs, &__badge
    margin-left .75em
    font-weight 400
    text-transform none
    letter-spacing 0
    color $color--subtitle-text
    font-family $font--sans

  &__badge
    background $color--highlight
    color white
    font-weight 700
    padding .1em .5em
    border-radius 3px
    text-transform uppercase
    font-size .85em

  &__title
    grid-column 1
    font-size 1.05em
    color $color--body-text
    margin-top .25em

  &__arrow
    grid-column 2
    grid-row 1 / span 2
    align-self center
    font-weight 700
    font-size 1.25em
    color $color--title-text

@media (hover: hover)
  .button
    &--primary:hover
      transform translateY(-2px)
      box-shadow 0 6px 16px rgba($color--highlight, 0.35)

    &--ghost:hover
      transform translateY(-2px)
      border-color $color--highlight

  .video:hover
    border-color $color--highlight
    transform translateY(-2px)

    .video__arrow
      color $color--highlight

@media (max-width: 60em)
  .stats
    grid-template-columns repeat(2, 1fr)

  .contact-card
    flex-direction column
    align-items stretch

  .videos
    grid-template-columns 1fr

@media (max-width: 40em)
  .press-intro .title
    font-size 2.75em

  .press-intro .subtitle
    font-size 1.125em

  .stats
    grid-template-columns 1fr

  .grid, .grid--featured
    grid-template-columns 1fr

  .section-title
    font-size 1.75em
</style>
