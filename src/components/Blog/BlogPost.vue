<template lang="pug">
.blog-post
  .blog-post__content
    .blog-post__text
      h2.blog-post__title
        a(:href="data.link" target="_blank") {{ data.title }}
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
  background white
  border 1px solid rgba(0, 0, 0, 0.1)
  border-radius 8px
  overflow hidden
  transition transform 0.3s ease

  &:hover
    transform translateY(-4px)
    box-shadow 0 4px 12px rgba(0, 0, 0, 0.1)

  &__content
    padding 1.5em

  &__title
    font-size 1.5em
    margin 0 0 0.75em
    a
      color $color--body-text
      text-decoration none
      &:hover
        color $color--highlight

  &__meta
    display flex
    justify-content space-between
    align-items center
    font-size 0.875em

  &__date
    color $color--subtitle-text

  &__metrics
    display flex
    gap 1.5em

    .metric
      display flex
      align-items center
      gap 0.5em
      color $color--subtitle-text

      i
        font-size 1.2em

@media (max-width: 50em)
  .blog-post
    &__title
      font-size 1.25em
</style> 