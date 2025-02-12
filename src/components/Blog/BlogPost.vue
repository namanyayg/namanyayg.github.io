<template lang="pug">
.blog-post
  .blog-post__content
    .blog-post__image(v-if="data.image")
      img(:src="data.image" :alt="data.title")
    .blog-post__text
      h2.blog-post__title
        a(:href="data.link" target="_blank") {{ data.title }}
      p.blog-post__excerpt {{ data.excerpt }}
      .blog-post__meta
        .blog-post__date {{ formatDate(data.date) }}
        .blog-post__metrics
          .metric(v-if="data.views")
            i.fas.fa-eye
            span {{ data.views }}
          .metric(v-if="data.redditVotes")
            i.fab.fa-reddit
            span {{ data.redditVotes }}
          .metric(v-if="data.hackernewsComments")
            i.fab.fa-hacker-news
            span {{ data.hackernewsComments }}
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
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.blog-post
  background rgba(255, 255, 255, 0.05)
  border 1px solid $color--hero-bg--border
  border-radius 8px
  overflow hidden
  transition transform 0.3s ease

  &:hover
    transform translateY(-4px)

  &__content
    padding 2em

  &__image
    margin -2em -2em 2em
    img
      width 100%
      height 300px
      object-fit cover

  &__title
    font-size 1.75em
    margin 0 0 0.5em
    a
      color $color--hero-title
      text-decoration none
      &:hover
        color $color--highlight

  &__excerpt
    color $color--hero-text
    margin 0 0 1.5em
    line-height 1.6

  &__meta
    display flex
    justify-content space-between
    align-items center
    font-size 0.875em

  &__date
    color $color--hero-text--light

  &__metrics
    display flex
    gap 1.5em

    .metric
      display flex
      align-items center
      gap 0.5em
      color $color--hero-text--light

      i
        font-size 1.2em

@media (max-width: 50em)
  .blog-post
    &__title
      font-size 1.5em

    &__image img
      height 200px
</style> 