<template lang="pug">
main#press-kit.press-kit
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
        p.subtitle My background, writing and photos for editorial use.
      .quick-actions
        a.button.button--primary(:href="mailto") Email me
        router-link(to="/media") Download photos
        a(href="https://nmn.gl/blog" target="_blank" rel="noopener noreferrer") Read the blog

  section.kit-section
    .wrap.two-col
      .col
        h2.section-title One line
        p.copy I’m the founder of PumpGTM (Y Combinator). I write about AI and software, and my essays have reached more than four million readers.
        h2.section-title Short bio
        p.copy
          | I’m a founder and writer in San Francisco. I started programming at 13 and took my first developer job at 14.
          | Since then, I’ve built products used by millions of people, including IndiaSmile and tools for engineering teams.
          | I now run PumpGTM, a Y Combinator-backed company building an AI agent that finds buyers and runs outreach for founders.
          | I also write about what AI is doing to programming. My essays have been covered by The New York Times,
          | Inc., Futurism, The Register and Marketplace.
      .col
        h2.section-title Long bio
        p.copy
          | I grew up in New Delhi and taught myself design and web development at 12. By 14, I was working remotely
          | as a frontend developer for MakeUseOf, a technology publication with millions of monthly readers,
          | while finishing school. At 16, I was one of 25 Google Code-in grand prize winners worldwide.
        p.copy
          | I spent eight years running a software agency in New Delhi, building products for clients in the US, UK
          | and Dubai. I also co-founded Ayom and Metric Books. During the pandemic, my team and I built IndiaSmile,
          | an open-source COVID tracker that served more than five million visitors, with peaks of 600,000 a day.
        p.copy
          | In 2025, I wrote “AI is Creating a Generation of Illiterate Programmers”. It reached more than a million readers
          | and was covered by The New York Times’ Hard Fork, Inc., Futurism, The Register and creators with a combined
          | audience above four million. I followed it with “AI is Killing B2B SaaS” in 2026. That essay reached the Hacker News
          | front page and was discussed on Startups For the Rest of Us.
        p.copy
          | I moved to San Francisco in 2025 and joined On Deck Founders and the inaugural Solo Founders Program.
          | I got into Y Combinator in spring 2026 and now build PumpGTM.
          | I hold a registered German utility model for analysing and summarising software codebases.
          | I also serve on the editorial boards of two peer-reviewed journals and have judged international hackathons.

  section.kit-section.kit-section--facts
    .wrap
      h2.section-title Fast facts
      .facts
        component.fact(v-for="f in facts" :key="f.label" :is="f.url ? 'a' : 'div'" :href="f.url" :target="f.url ? '_blank' : null" :rel="f.url ? 'noopener noreferrer' : null" :class="{ 'fact--link': f.url }")
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
        a.coverage__item(v-for="item in selected" :key="item.id" :href="item.url" target="_blank" rel="noopener noreferrer")
          img(:src="`/static/press/${item.id}.jpg`" :alt="item.outlet" loading="lazy")
          .coverage__meta
            span.outlet {{ item.outlet }}
            span.date {{ item.date }}
          span.headline {{ item.title }}
      router-link.more(to="/press") See all coverage →

  section.kit-section
    .wrap
      h2.section-title Photos
      p.copy High-resolution, cleared for editorial use with credit “Courtesy Namanyay Goel”.
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
            a(href="https://x.com/NamanyayG" target="_blank" rel="noopener noreferrer") @NamanyayG
            |  · LinkedIn
            | &nbsp;
            a(href="https://www.linkedin.com/in/namanyayg/" target="_blank" rel="noopener noreferrer") /in/namanyayg
          p.small San Francisco, CA · Pacific time · Available for remote recording.
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
        { value: '4M+', label: 'readers of my essays in 2025' },
        { value: '13', label: 'age I started programming' },
        { value: '14', label: 'age of my first developer job' },
        { value: '5M+', label: 'visitors to IndiaSmile during COVID' },
        { value: 'YC P26', label: 'PumpGTM, Y Combinator', url: 'https://pumpgtm.com' },
        { value: '30+', label: 'outlets that covered my work' },
        { value: '2', label: 'journal editorial boards I serve on' },
        { value: '1', label: 'utility model I registered (DPMA, 2026)' }
      ],
      topics: [
        'How junior developers learn to program with AI',
        'Where vibe coding works and where it causes problems',
        'What AI means for SaaS companies when customers can build their own software',
        'My experience as a solo founder in Y Combinator',
        'How founders find their first customers with AI',
        'How I build AI tools that understand large codebases',
        'My first developer job at 14 in New Delhi',
        'My move from India to San Francisco to build a company'
      ],
      milestones: [
        { year: '2011', text: 'I started freelancing as a web designer and developer at 13.' },
        { year: '2013', text: 'I joined MakeUseOf as a frontend developer at 14. The site had 2–3M monthly readers.' },
        { year: '2013', text: 'I published Webstiles, the prototyping tool I used with clients.' },
        { year: '2014', text: 'I won a Google Code-in grand prize.' },
        { year: '2016', text: 'I published a mathematical solver for Bulls and Cows, which reached 5,500+ downloads.' },
        { year: '2017', text: 'I organised HackIndia and BharatHacks, two of India\'s largest student hackathons.' },
        { year: '2020', text: 'My team and I built IndiaSmile. Our COVID tracker reached 5M+ visitors, with 600k a day at peak.' },
        { year: '2025', text: 'My essay “AI is Creating a Generation of Illiterate Programmers” reached 1.3M readers, with coverage in NYT, Inc. and Futurism.' },
        { year: '2025', text: 'I moved to San Francisco and joined On Deck Founders, Recurse Center and the Solo Founders Program.' },
        { year: '2026', text: 'My essay “AI is Killing B2B SaaS” reached the Hacker News front page. I got into Y Combinator in spring, registered a German utility model and launched PumpGTM. I was also a guest on the Solo Founders Podcast.' }
      ]
    }
  },
  computed: {
    selected () {
      const ids = ['nyt-hardfork', 'inc-young-coders', 'futurism', 'register', 'marketplace-2026', 'inc42-autopilot', 'sftrou-823', 'itpro']
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
  font-weight 400
  font-size 1.0625em
  line-height 1.6

.kit-intro
  padding 2em 0 3em
  background-color $color--hero-bg
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
  gap 1em 2em
  align-items center
  flex-wrap wrap

  a
    color $color--hero-text

.button
  font-family $font--sans
  text-align center
  border-radius 0
  padding .9em 1.5em
  font-size .95em
  letter-spacing 0
  text-decoration none
  transition background-color .2s ease, color .2s ease

  &--primary
    background $color--highlight
    color $color--hero-bg--dark


.kit-section
  padding 3.5em 0

  & + &:not(.kit-section--facts)
    padding-top 0

.kit-section--facts + .kit-section
  padding-top 3.5em !important

.section-title
  font-size 1.75em
  font-weight bold
  color $color--title-text
  margin 0 0 .75em

  .copy + &
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
  padding 3em 0 !important

.facts
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

.fact
  border-top 1px solid rgba($color--title-text, .25)
  padding 1.25em 0
  display block
  text-decoration none
  transition border-color .25s ease

  &--link:hover
    border-color $color--highlight

  &__value
    font-size 1.5em
    font-weight 700
    color $color--title-text
    line-height 1

  &__label
    margin-top .5em
    font-size .95em
    color $color--body-text

.topics
  list-style none
  padding 0
  margin 0

  li
    font-size 1.125em
    line-height 1.5
    padding .75em 0
    position relative
    border-bottom 1px solid rgba($color--subtitle-text, 0.15)


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
  padding 3em 0 !important

.coverage
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

  &__item
    display block
    background white
    border-bottom 1px solid rgba($color--title-text, .25)
    text-decoration none
    color $color--body-text

    img
      display block
      width 100%
      aspect-ratio 16 / 10
      object-fit cover
      object-position top

  &__meta
    display flex
    flex-wrap wrap
    gap .25em 1em
    padding .9em 0 0
    font-size .75em
    letter-spacing 0

    .outlet
      font-weight 700
      color $color--title-text

    .date
      color $color--body-text

  .headline
    display block
    margin .4em 0 1em
    padding 0
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
    text-decoration underline

.photos
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 1.25em

.photo
  display block
  text-decoration none
  color $color--body-text
  font-size .85em

  img
    display block
    width 100%
    aspect-ratio 4 / 5
    object-fit cover
    border-radius 0
    margin 0 0 .5em

.kit-section--contact
  padding-bottom 4em !important

.contact-card
  display flex
  gap 2.5em
  align-items center
  justify-content space-between
  padding 2em 0
  border-top 1px solid rgba($color--title-text, .25)
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
    text-decoration none

    &:hover
      text-decoration underline

  .small
    font-size .95em
    color $color--body-text
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
    grid-template-columns repeat(2, minmax(0, 1fr))

  .coverage, .photos
    grid-template-columns 1fr

@media (hover: hover)
  .button
    &--primary:hover
      background darken($color--highlight, 8%)


  .coverage__item:hover
    text-decoration underline

  .photo:hover img
    opacity .9

.press-kit
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

  .kit-intro a:focus-visible
    outline-color $color--highlight

@media (max-width: 40em)
  .wrap
    width 88%

  .header
    margin-top 1.5em

  .quick-actions a
    padding-top .6em
    padding-bottom .6em
</style>
