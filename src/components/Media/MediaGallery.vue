<template lang="pug">
#media.media-gallery
  .masthead-container
    Masthead(back="dark")
  .media-intro
    .wrap
      router-link.back-link(to="/press-kit")
        span
          span.arrow ←
          span.text Back to Press Kit
      header.header
        h1.title Media Kit
        .subtitle Namanyay&rsquo;s high-quality photographs for media usage
  .media-content
    .wrap
      .media-grid
        MediaItem(v-for="item in mediaItems" :key="item.id" :data="item")
</template>

<script>
import Masthead from '../Masthead'
import MediaItem from './MediaItem.vue'
import mediaData from './data.js'

export default {
  name: 'MediaGallery',
  components: {
    Masthead,
    MediaItem
  },
  data () {
    return {
      mediaItems: mediaData
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.media-gallery
  .header
    display flex
    width 100%
    justify-content space-between
    align-items center

  .title
    font-size 4em
    font-weight bold

  .subtitle
    font-style italic
    font-size 1.5em
    font-weight 300

.media-intro
  margin 0 0 3em
  background $color--hero-bg--dark
  color $color--hero-text
  padding 2em 0 3em

.media-intro .title
  color $color--hero-title

.media-intro .subtitle
  color $color--hero-text--light

.media-grid
  column-count 2
  column-gap 1.5em
  margin 0 0 4em

@media (max-width 67.5em)
  .media-gallery
    .header
      flex-direction column
      margin 0 0 2em
      align-items start !important

    .title
      margin 0

    .subtitle
      font-size 1.375em

@media (max-width 60em)
  .subtitle
    font-size 1.125em

  .media-gallery
    font-size 0.875em
    .wrap
      width 90%

@media (max-width 50em)
  .media-intro
    font-size 1.25em

  .title
    font-size 3em

  .subtitle
    font-size 1em

  .media-grid
    column-count 1
    column-gap 0

@media (max-width 32.5em)
  .media-gallery .title
    font-size 2.5em
    margin 1em 0 0
</style>
