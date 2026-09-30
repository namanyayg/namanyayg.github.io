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
          | I write about what AI is doing to software: to the people who build it, and to the companies that sell it.
          | Three of my essays reached more than four million readers and were picked up by The New York Times,
          | Inc., Futurism, The Register, and Marketplace. This page has the essays, the coverage, quotes you can use,
          | and how to reach me.
      .stats
        component.stat(v-for="s in stats" :key="s.label" :is="s.url ? 'a' : 'div'" :href="s.url" :target="s.url ? '_blank' : null" :rel="s.url ? 'noopener noreferrer' : null" :class="{ 'stat--link': s.url }")
          .stat__value {{ s.value }}
          .stat__label {{ s.label }}

  section.press-section.press-section--featured
    .wrap
      h2.section-title Featured
      .grid.grid--featured
        PressItem(v-for="item in featuredItems" :key="item.id" :data="item" :large="true")

  section.press-section.press-section--essays
    .wrap
      h2.section-title The essays behind the coverage
      p.section-lede Most stories about my work trace back to one of these three pieces. Each links to the original so you can quote the source.
      .essays
        a.essay(v-for="e in essays" :key="e.id" :href="e.url" target="_blank" rel="noopener")
          .essay__meta
            span.essay__date {{ e.date }}
            span.essay__reach {{ e.reach }}
          h3.essay__title {{ e.title }}
          p.essay__summary {{ e.summary }}
          p.essay__coverage
            strong Covered by:
            |  {{ e.coverage }}
          span.essay__read Read the essay →

  section.press-section.press-section--contact#press-contact
    .wrap
      .contact-card
        .contact-card__text
          h2 Writing a story? Recording an episode?
          p
            | I'm happy to talk about what AI is doing to junior developers and the craft of programming, vibe coding and the bill it leaves behind, why B2B SaaS is under pressure, and what it's like to build a company as a solo founder in Y Combinator. I'm building PumpGTM, an AI agent that finds buyers and runs outreach for founders.
          p.small Based in San Francisco, available on Pacific hours and happy to record remotely.
        .contact-card__actions
          a.button.button--primary(:href="pressMailto") Email me for press
          router-link.button.button--ghost(to="/press-kit") Press kit &amp; bio
          router-link.button.button--ghost(to="/media") Photos

  section.press-section.press-section--quotes
    .wrap
      h2.section-title Quotable
      p.section-lede Cleared for use with attribution to Namanyay Goel. For longer conversations, email me.
      .quotes
        blockquote.quote(v-for="q in quotes" :key="q.text")
          p.quote__text “{{ q.text }}”
          footer.quote__context {{ q.context }}

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
import items, { stats, featured, videos, essays, quotes } from './data'

const FILTERS = [
  { key: 'all', label: 'Everything' },
  { key: 'article', label: 'Articles' },
  { key: 'podcast', label: 'Podcasts & radio' },
  { key: 'launch', label: 'Launches' },
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
      essays,
      quotes,
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
  font-weight 400
  font-size 1.0625em
  line-height 1.6

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
  text-decoration none
  color inherit
  transition border-color .25s ease, background-color .25s ease

  &--link:hover
    border-color $color--highlight
    background rgba(255, 255, 255, 0.06)

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
  grid-template-columns repeat(auto-fill, minmax(unquote("min(18em, 100%)"), 1fr))
  gap 1.5em

  &--featured
    grid-template-columns repeat(auto-fill, minmax(unquote("min(24em, 100%)"), 1fr))
    gap 2em

.essays
  display grid
  grid-template-columns repeat(auto-fit, minmax(unquote("min(20em, 100%)"), 1fr))
  gap 1.5em

.essay
  display flex
  flex-direction column
  padding 1.75em
  border 1px solid rgba($color--title-text, .1)
  border-radius 12px
  text-decoration none
  color inherit
  transition transform .3s ease, box-shadow .3s ease, border-color .3s ease

  &__meta
    font-family $font--sans
    font-size .8125em
    text-transform uppercase
    letter-spacing 1.5px
    color $color--body-text

  &__reach
    &::before
      content ' · '

  &__title
    font-family $font--serif
    font-size 1.375em
    font-weight 600
    color $color--title-text

  &__summary
    font-size 1em
    line-height 1.6
    color $color--body-text

  &__coverage
    font-size .95em
    line-height 1.5
    color $color--body-text

    strong
      font-family $font--sans
      font-size .8em
      letter-spacing 1px
      text-transform uppercase
      color $color--title-text

  &__read
    margin-top auto
    font-family $font--sans
    font-size .95em
    font-weight 700
    color $color--title-text

.quotes
  display grid
  grid-template-columns repeat(auto-fit, minmax(unquote("min(18em, 100%)"), 1fr))
  gap 1.5em

.quote
  margin 0
  padding 1.5em 1.75em
  border-left 3px solid $color--highlight
  background rgba($color--hero-bg, .03)

  &__text
    margin 0 0 .75em
    font-family $font--serif
    font-size 1.25em
    font-style italic
    line-height 1.45
    color $color--title-text

  &__context
    font-family $font--sans
    font-size .8125em
    text-transform uppercase
    letter-spacing 1.5px
    color $color--body-text

@media (hover: hover)
  .essay:hover
    transform translateY(-3px)
    box-shadow 0 8px 24px rgba($color--subtitle-text, .12)
    border-color $color--highlight

  .essay__read:hover
    color $color--highlight

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

  &--active, &--active:hover
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

  &--primary, &--primary:hover
    background $color--highlight
    color $color--hero-bg--dark

  &--ghost, &--ghost:hover
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
