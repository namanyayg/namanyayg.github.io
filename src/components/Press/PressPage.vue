<template lang="pug">
main#press.press
  .masthead-container
    Masthead(back="dark")
  .press-intro
    .wrap
      router-link.back-link(to="/")
        span
          span.arrow ←
          span.text Back to Portfolio
      header.header
        h1.title My work in the press
        p.subtitle
          | My writing on AI and software has reached more than four million readers, with coverage in The New York Times, Inc., Futurism, The Register and Marketplace.
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
      h2.section-title My essays
      .essays
        a.essay(v-for="e in essays" :key="e.id" :href="e.url" target="_blank" rel="noopener noreferrer")
          h3.essay__title {{ e.title }}
          .essay__meta
            span.essay__date {{ e.date }}
            span.essay__reach {{ e.reach }}
          p.essay__summary {{ e.summary }}
          p.essay__coverage
            strong Covered by:
            |  {{ e.coverage }}
          span.essay__read Read the essay →

  section.press-section.press-section--contact#press-contact
    .wrap
      .contact-card
        .contact-card__text
          h2 Press enquiries
          p
            | I’m available for interviews on AI, programming and building a company as a solo founder. I’m building PumpGTM, an AI agent that finds buyers and runs outreach for founders.
          p.small San Francisco · Pacific time · Available for remote recording
        .contact-card__actions
          a.button.button--primary(:href="pressMailto") Email me for press
          router-link(to="/press-kit") Press kit &amp; bio
          router-link(to="/media") Download photos

  section.press-section.press-section--quotes
    .wrap
      h2.section-title In my words
      p.section-lede Cleared for use with attribution to Namanyay Goel.
      .quotes
        blockquote.quote(v-for="q in quotes" :key="q.text")
          p.quote__text “{{ q.text }}”
          footer.quote__context {{ q.context }}

  section.press-section
    .wrap
      h2.section-title All coverage
      .filters(role="group" aria-label="Filter coverage")
        button.filter(v-for="f in filters" :key="f.key" :class="{ 'filter--active': activeFilter === f.key }" :aria-pressed="activeFilter === f.key" @click="activeFilter = f.key") {{ f.label }}
      .grid(aria-live="polite")
        PressItem(v-for="item in filteredItems" :key="item.id" :data="item")

  section.press-section.press-section--videos
    .wrap
      h2.section-title Videos &amp; podcasts
      p.section-lede Interviews and responses to my writing from creators with more than four million subscribers combined.
      .videos
        a.video(v-for="v in videos" :key="v.id" :href="v.url" target="_blank" rel="noopener noreferrer")
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
  color $color--hero-subtitle

  .header
    max-width 46em
    margin 2.5em 0 3em

  .title
    font-size 4em
    line-height 1.15
    text-wrap balance
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
  padding 1em 0 0
  border-top 1px solid rgba(255, 255, 255, .25)
  text-decoration none
  color inherit
  transition border-color .25s ease, background-color .25s ease

  &--link:hover
    border-color $color--highlight
    background rgba(255, 255, 255, 0.06)

  &__value
    font-size 1.5em
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
  grid-template-columns repeat(2, minmax(0, 1fr))
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
  padding 1.25em 0
  border-top 1px solid rgba($color--title-text, .25)
  text-decoration none
  color inherit

  &__meta
    font-family $font--sans
    font-size .8125em
    color $color--body-text

  &__reach
    &::before
      content ' · '

  &__title
    margin 0 0 .6em
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
      letter-spacing 0
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
  padding 1.25em 0
  border-top 1px solid rgba($color--title-text, .25)

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
    color $color--body-text

@media (hover: hover)
  .essay:hover
    border-color $color--highlight

  .essay:hover .essay__read
    text-decoration underline

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
  border-radius 0
  padding .65em 1.1em
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
  padding 2em 0
  border-top 1px solid rgba($color--title-text, .25)
  border-bottom 1px solid rgba($color--title-text, .25)
  color $color--body-text

  h2
    font-size 1.875em
    font-weight bold
    color $color--title-text
    margin 0 0 .5em

  p
    font-size 1.125em
    line-height 1.55
    margin 0 0 .75em
    max-width 40em
    color $color--body-text

  a
    color $color--title-text
    font-weight 700
    text-decoration underline

    &:hover
      text-decoration underline

  .small
    font-size .95em
    color $color--body-text
    margin 0

  &__actions
    display flex
    flex-direction column
    gap .75em
    min-width 15em

.button
  font-family $font--sans
  text-align center
  border-radius 0
  padding .9em 1.5em
  font-size .95em
  letter-spacing 0
  text-decoration none
  transition background-color .2s ease, color .2s ease

  &--primary, &--primary:hover
    background $color--highlight
    color $color--hero-bg--dark


.videos
  display grid
  grid-template-columns repeat(2, 1fr)
  gap .75em 1.5em

.video
  display grid
  grid-template-columns 1fr auto
  grid-template-rows auto auto
  column-gap 1em
  padding 1.25em 0
  border-top 1px solid rgba($color--title-text, .25)
  border-radius 0
  text-decoration none
  color $color--body-text
  font-family $font--sans
  transition border-color .2s ease

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
    color $color--body-text
    font-family $font--sans

  &__badge
    color $color--body-text
    font-weight 400
    font-size 1em

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
      background darken($color--highlight, 8%)


  .video:hover
    border-color $color--highlight

    .video__arrow
      text-decoration underline

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
    grid-template-columns repeat(2, minmax(0, 1fr))

  .grid, .grid--featured
    grid-template-columns 1fr

  .section-title
    font-size 1.75em

.press
  a, button
    text-underline-offset .2em

    &:focus-visible
      outline 2px solid #a55c00
      outline-offset 5px

  ::selection
    background #ffe1ad
    color $color--title-text

  .button--primary
    color $color--hero-bg--dark
    text-decoration none

  .press-intro a:focus-visible
    outline-color $color--highlight

@media (max-width: 40em)
  .wrap
    width 88%

  .header
    margin-top 1.5em

  .contact-card__actions a
    padding-top .6em
    padding-bottom .6em
</style>
