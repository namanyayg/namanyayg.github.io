<template lang="pug">
a.blog-post(:href="data.link" target="_blank") 
  .blog-post__image-wrapper(v-if="data.image")
    img.blog-post__image(:src="data.image" :alt="data.title")
    .blog-post__metrics(v-if="data.views || data.redditVotes || data.hackernewsComments")
      .metric(v-if="data.views")
        svg(width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2")
          path(d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z")
          circle(cx="12" cy="12" r="3")
        span {{ formatMetricWithPlus(data.views) }} views
      .metric(v-if="data.redditVotes")
        svg(width="16" height="16" viewBox="0 0 24 24" fill="currentColor")
          path(d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z")
        span {{ formatMetricWithPlus(data.redditVotes) }} votes
      .metric(v-if="data.hackernewsComments")
        svg(width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2")
          path(d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z")
        span {{ formatMetricWithPlus(data.hackernewsComments) }} comments
  .blog-post__content
    h2.blog-post__title {{ data.title }}
    p.blog-post__excerpt(v-if="data.excerpt") {{ truncateText(data.excerpt, 150) }}
    .blog-post__author
      .blog-post__author-avatar
        img(src="/static/namanyay_goel_2025.jpg" alt="Namanyay Goel")
      .blog-post__author-info
        .blog-post__author-name Namanyay Goel
        .blog-post__date {{ formatDate(data.date) }}
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    formatMetricWithPlus (value) {
      if (!value) return ''
      const num = parseInt(value)
      
      // 1,000,000+ -> 1M+
      if (num >= 1000000) {
        const millions = num / 1000000
        // If it's a clean million (1.0, 2.0, etc), show without decimal
        if (millions === Math.floor(millions)) {
          return Math.floor(millions) + 'M+'
        }
        // Otherwise show one decimal place (1.2M, 1.5M, etc)
        return millions.toFixed(1).replace(/\.0$/, '') + 'M+'
      }
      
      // 100,000 -> 100K+, 2,500 -> 2.5K+
      if (num >= 1000) {
        const thousands = num / 1000
        // If it's a clean thousand (1.0, 2.0, etc), show without decimal
        if (thousands === Math.floor(thousands)) {
          return Math.floor(thousands) + 'K+'
        }
        // Otherwise show one decimal place (2.5K, 3.7K, etc)
        return thousands.toFixed(1).replace(/\.0$/, '') + 'K+'
      }
      
      // Less than 1000, just add +
      return num + '+'
    },
    truncateText (text, maxLength) {
      if (!text) return ''
      const stripped = text.replace(/<[^>]*>/g, '')
      if (stripped.length <= maxLength) return stripped
      return stripped.substring(0, maxLength) + '...'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.blog-post
  background white
  border 1px solid rgba($color--subtitle-text, 0.15)
  border-radius 12px
  overflow hidden
  transition all 0.3s ease
  box-shadow 0 2px 8px rgba($color--subtitle-text, 0.08)
  color $color--body-text
  text-decoration none
  display flex
  flex-direction column

  &:hover
    transform translateY(-4px)
    box-shadow 0 8px 24px rgba($color--subtitle-text, 0.12)
    border-color rgba($color--subtitle-text, 0.25)

  &__image-wrapper
    position relative
    width 100%
    aspect-ratio 16 / 9
    overflow hidden
    background lighten($color--subtitle-text, 50%)

  &__image
    width 100%
    height 100%
    object-fit cover
    display block

  &__metrics
    position absolute
    bottom 0
    left 0
    right 0
    display flex
    gap 2em
    padding 1.25em 1.5em
    background linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 80%, transparent)
    color white
    font-size 0.9em
    font-weight 400

    .metric
      display flex
      align-items center
      gap 0.5em

      &:nth-child(1) svg
        stroke #4a9eff
        
      &:nth-child(2) svg
        fill #ff4500
        stroke none
        
      &:nth-child(3) svg
        stroke #ffa500

      svg
        flex-shrink 0

      span
        white-space nowrap
        font-weight 400
        letter-spacing 0.015em
        text-shadow 0 1px 2px rgba(0, 0, 0, 0.4)

  &__content
    padding 1.5em 1.5em 1.25em
    flex 1
    display flex
    flex-direction column

  &__title
    font-size 1.5em
    font-weight 700
    margin 0 0 0.5em
    color $color--title-text
    line-height 1.3

  &__excerpt
    margin 0 0 1.25em
    color darken($color--body-text, 8%)
    line-height 1.65
    flex 1
    font-weight 450
    font-size 0.95em

  &__author
    display flex
    align-items center
    gap 0.75em
    margin-top auto
    padding-top 1em
    border-top 1px solid rgba($color--subtitle-text, 0.1)

  &__author-avatar
    width 40px
    height 40px
    border-radius 50%
    overflow hidden
    flex-shrink 0
    
    img
      width 100%
      height 100%
      object-fit cover
      display block

  &__author-info
    flex 1

  &__author-name
    font-weight 600
    color $color--title-text
    margin-bottom 0.125em
    font-size 0.95em

  &__date
    font-size 0.875em
    color $color--subtitle-text
    font-weight 400

@media (max-width: 50em)
  .blog-post
    &__title
      font-size 1.25em

    &__metrics
      font-size 0.8em
      gap 1.5em
      padding 1.125em 1.25em

    &__content
      padding 1.25em

@media (max-width: 32.5em)
  .blog-post
    &__title
      font-size 1.125em

    &__metrics
      font-size 0.75em
      gap 1.25em
      padding 1em 1.125em
      
      .metric
        gap 0.4em
        
        svg
          width 14px
          height 14px
</style>