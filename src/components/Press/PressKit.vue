<template lang="pug">
#press-kit.press-kit
  .masthead-container
    Masthead(back="dark")
  .kit-intro
    .wrap
      router-link.back-link(to="/press")
        span
          span.arrow ←
          span.text Back to Press
      header.header
        h1.title Press kit
        p.subtitle Everything a journalist, producer, or awards committee needs about me, in one place. Copy freely.
      .quick-actions
        a.button.button--primary(:href="mailto") Email Namanyay
        router-link.button.button--ghost(to="/media") Download photos
        a.button.button--ghost(href="https://nmn.gl/blog" target="_blank" rel="noopener") Read the blog

  section.kit-section
    .wrap.two-col
      .col
        h2.section-title One line
        p.copy Namanyay Goel is the founder of Gigacatalyst (Y Combinator P26) and a writer on AI and software engineering whose essays reached more than four million readers in 2025.
        h2.section-title Short bio
        p.copy
          | Namanyay Goel is a San Francisco based founder and writer. He started programming at 13, took his
          | first professional job as a web developer at 14, and has spent the years since building products used
          | by millions of people, from India's most-visited independent COVID tracker to developer tools used by
          | engineering teams at fast-growing companies. Today he runs Gigacatalyst, a Y Combinator company that
          | lets software companies build the features their customers ask for in minutes, just by talking to an AI.
          | His writing on how AI is changing the craft of programming has been covered by The New York Times,
          | Inc., Futurism, The Register, and Marketplace.
      .col
        h2.section-title Long bio
        p.copy
          | Namanyay Goel (b. 1998, New Delhi) is a technology entrepreneur, engineer, and writer. He taught himself
          | design and web development at 12 and by 14 was the frontend developer for MakeUseOf, a technology
          | publication with millions of monthly readers, working remotely while finishing school. At 16 he was one of
          | 25 Google Code-in grand prize winners worldwide.
        p.copy
          | He spent eight years running a software agency in New Delhi, shipping products for clients in the US, UK,
          | and Dubai, and co-founded consumer and fintech products including Ayom and Metric Books. During the
          | pandemic he built IndiaSmile, an open-source COVID tracker that served more than five million visitors at
          | peaks of 600,000 a day.
        p.copy
          | In 2025 his essay “AI is Creating a Generation of Illiterate Programmers” became one of the most-discussed
          | pieces of writing in software that year, reaching more than a million readers and prompting coverage from
          | The New York Times' Hard Fork, Inc., Futurism, The Register, and creators with a combined audience above
          | four million. He followed it with “AI is Killing B2B SaaS” in 2026, which reached the Hacker News front page
          | and was debated on Startups For the Rest of Us.
        p.copy
          | He moved to San Francisco in 2025, was selected for On Deck Founders and the inaugural Solo Founders
          | Program, raised a pre-seed round, and was accepted into Y Combinator (P26 batch, spring 2026) with Gigacatalyst.
          | He holds a registered German utility model for a method of analysing and summarising software codebases,
          | serves on the editorial boards of two peer-reviewed journals, and has judged international hackathons.

  section.kit-section.kit-section--facts
    .wrap
      h2.section-title Fast facts
      .facts
        .fact(v-for="f in facts" :key="f.label")
          .fact__value {{ f.value }}
          .fact__label {{ f.label }}

  section.kit-section
    .wrap.two-col
      .col
        h2.section-title Ask me about
        ul.topics
          li(v-for="t in topics" :key="t") {{ t }}
      .col
        h2.section-title Milestones
        ul.timeline
          li(v-for="m in milestones" :key="m.year + m.text")
            span.year {{ m.year }}
            span.text {{ m.text }}

  section.kit-section.kit-section--coverage
    .wrap
      h2.section-title Selected coverage
      .coverage
        a.coverage__item(v-for="item in selected" :key="item.id" :href="item.url" target="_blank" rel="noopener")
          img(:src="`/static/press/${item.id}.jpg`" :alt="item.outlet" loading="lazy")
          .coverage__meta
            span.outlet {{ item.outlet }}
            span.date {{ item.date }}
          span.headline {{ item.title }}
      router-link.more(to="/press") See all coverage →

  section.kit-section
    .wrap
      h2.section-title Photos
      p.copy Hi-resolution, cleared for editorial use with credit “Courtesy Namanyay Goel”.
      .photos
        a.photo(v-for="p in photos" :key="p.id" :href="`/static/${p.filename}`" download)
          img(:src="`/static/${p.filename}`" :alt="p.title" loading="lazy")
          span {{ p.title }} · {{ p.date }}
      router-link.more(to="/media") All photos →

  section.kit-section.kit-section--contact
    .wrap
      .contact-card
        div
          h2 Contact
          p
            | Email
            | &nbsp;
            a(:href="mailto") hi@nmn.gl
            |  · X
            | &nbsp;
            a(href="https://x.com/NamanyayG" target="_blank" rel="noopener") @NamanyayG
            |  · LinkedIn
            | &nbsp;
            a(href="https://www.linkedin.com/in/namanyayg/" target="_blank" rel="noopener") /in/namanyayg
          p.small San Francisco, CA · Pacific time · remote recording is fine · I reply within one business day.
        a.button.button--primary(:href="mailto") Email Namanyay
</template>

<script>
import Masthead from '../Masthead'
import items from './data'
import mediaData from '../Media/data'

export default {
  name: 'PressKit',
  components: { Masthead },
  data () {
    return {
      photos: mediaData,
      facts: [
        { value: '4M+', label: 'readers in 2025' },
        { value: '13', label: 'age I started programming' },
        { value: '14', label: 'age of my first developer job' },
        { value: '5M+', label: 'visitors to IndiaSmile during COVID' },
        { value: 'YC P26', label: 'Gigacatalyst, Y Combinator' },
        { value: '30+', label: 'outlets that covered my work' },
        { value: '2', label: 'journal editorial boards' },
        { value: '1', label: 'registered utility model (DPMA, 2026)' }
      ],
      topics: [
        'What AI is doing to junior developers, and what “illiterate programmers” means in practice',
        'Vibe coding: where it works, where it quietly breaks, and the security bill that arrives later',
        'Why AI is killing B2B SaaS that refuses to evolve, and what customers build for themselves now',
        'Running a company as a solo founder inside Y Combinator',
        'Building developer tools that keep AI honest about large codebases',
        'Starting a career at 14 and what early access to the internet did for a kid in New Delhi',
        'India to San Francisco: the O-1 visa, immigration as a founder, and building in the US'
      ],
      milestones: [
        { year: '2011', text: 'Start freelancing as a web designer and developer at 13.' },
        { year: '2013', text: 'Frontend developer at MakeUseOf (2–3M monthly readers), age 14.' },
        { year: '2014', text: 'Google Code-in grand prize winner; publish Webstiles, an open-source prototyping tool.' },
        { year: '2016', text: 'Publish a mathematical solver for Bulls and Cows; 5,500+ downloads.' },
        { year: '2017', text: 'Organise HackIndia and BharatHacks, two of India\'s largest student hackathons.' },
        { year: '2020', text: 'Build IndiaSmile, an open-source COVID tracker: 5M+ visitors, 600k a day at peak.' },
        { year: '2025', text: '“AI is Creating a Generation of Illiterate Programmers” reaches 1.3M readers; NYT, Inc., Futurism coverage.' },
        { year: '2025', text: 'Move to San Francisco. On Deck Founders, Recurse Center, Solo Founders Program. Raise a pre-seed round. O-1A visa approved.' },
        { year: '2026', text: '“AI is Killing B2B SaaS” hits the Hacker News front page. Accepted into Y Combinator (P26) with Gigacatalyst. German utility model registered.' }
      ]
    }
  },
  computed: {
    selected () {
      const ids = ['nyt-hardfork', 'inc-young-coders', 'futurism', 'register', 'marketplace-2026', 'inc42-autopilot', 'sftrou-823', 'yc-x']
      return ids.map(id => items.find(i => i.id === id)).filter(Boolean)
    },
    mailto () {
      return 'mailto:hi@nmn.gl?subject=' + encodeURIComponent('Press request: ')
    }
  },
  mounted () {
    document.title = 'Press Kit — Namanyay Goel'
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.press-kit
  background white
  color $color--body-text
  font-weight 300

.kit-intro
  padding 2em 0 3em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color $color--hero-subtitle

  .header
    max-width 44em
    margin 2.5em 0 2em

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

.quick-actions
  display flex
  gap .75em
  flex-wrap wrap

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
    border 2px solid $color--hero-bg--border

.kit-section
  padding 3.5em 0

  & + &
    padding-top 0

.section-title
  font-size 1.75em
  font-weight bold
  color $color--title-text
  margin 0 0 .75em

  & + .section-title
    margin-top 1.5em

.copy
  font-size 1.125em
  line-height 1.65
  margin 0 0 1em

.two-col
  display grid
  grid-template-columns 1fr 1fr
  gap 3em

.kit-section--facts
  background #f6f8fc
  padding 3em 0 !important

.facts
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

.fact
  background white
  border 1px solid rgba($color--subtitle-text, 0.18)
  border-radius 8px
  padding 1.25em 1.5em

  &__value
    font-size 2em
    font-weight 700
    color $color--title-text
    line-height 1

  &__label
    margin-top .5em
    font-size .95em
    color $color--subtitle-text

.topics
  list-style none
  padding 0
  margin 0

  li
    font-size 1.125em
    line-height 1.5
    padding .75em 0 .75em 1.5em
    position relative
    border-bottom 1px solid rgba($color--subtitle-text, 0.15)

    &:before
      content ''
      position absolute
      left 0
      top 1.35em
      width .6em
      height .6em
      border-radius 50%
      background $color--highlight

.timeline
  list-style none
  padding 0
  margin 0

  li
    display grid
    grid-template-columns 4em 1fr
    gap 1em
    padding .6em 0
    font-size 1.05em
    line-height 1.5
    border-bottom 1px solid rgba($color--subtitle-text, 0.15)

  .year
    font-weight 700
    color $color--title-text

.kit-section--coverage
  background #f6f8fc
  padding 3em 0 !important

.coverage
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

  &__item
    display block
    background white
    border 1px solid rgba($color--subtitle-text, 0.18)
    border-radius 8px
    overflow hidden
    text-decoration none
    color $color--body-text
    transition transform .3s ease, box-shadow .3s ease

    img
      display block
      width 100%
      aspect-ratio 16 / 10
      object-fit cover
      object-position top

  &__meta
    display flex
    justify-content space-between
    padding .9em .9em 0
    font-size .75em
    letter-spacing .5px
    text-transform uppercase

    .outlet
      font-weight 700
      color $color--title-text

    .date
      color $color--subtitle-text

  .headline
    display block
    margin .4em .9em 1em
    padding 0
    height 2.8em
    overflow hidden
    font-size .95em
    line-height 1.4
    color $color--title-text

.more
  display inline-block
  margin 1.5em 0 0
  font-weight 700
  color $color--title-text
  text-decoration none

  &:hover
    color $color--highlight

.photos
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

.photo
  display block
  text-decoration none
  color $color--subtitle-text
  font-size .85em

  img
    display block
    width 100%
    aspect-ratio 4 / 5
    object-fit cover
    border-radius 8px
    margin 0 0 .5em
    transition transform .3s ease

.kit-section--contact
  padding-bottom 4em !important

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


@media (max-width: 60em)
  .two-col
    grid-template-columns 1fr
    gap 1.5em

  .facts, .coverage, .photos
    grid-template-columns repeat(2, 1fr)

  .contact-card
    flex-direction column
    align-items stretch

@media (max-width: 40em)
  .kit-intro .title
    font-size 2.75em

  .kit-intro .subtitle
    font-size 1.125em

  .facts
    grid-template-columns 1fr

  .coverage, .photos
    grid-template-columns 1fr

@media (hover: hover)
  .button
    &--primary:hover
      transform translateY(-2px)
      box-shadow 0 6px 16px rgba($color--highlight, 0.35)

    &--ghost:hover
      transform translateY(-2px)
      border-color $color--highlight

  .coverage__item:hover
    transform translateY(-4px)
    box-shadow 0 12px 24px rgba(8, 15, 37, 0.1)

  .photo:hover img
    transform translateY(-4px)
</style>
