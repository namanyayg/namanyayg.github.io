<template lang="pug">
a.blog-post(:href="data.link" target="_blank") 
  .blog-post__content
    .blog-post__text
      h2.blog-post__title {{ data.title }}
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
  border 1px solid rgba($color--subtitle-text, 0.2)
  border-radius 8px
  overflow hidden
  transition all 0.5s ease-in-out
  box-shadow 0 0 2px rgba($color--subtitle-text, 0)
  color $color--body-text
  text-decoration none
  display block

  &:hover
    transform translateY(-4px)
    box-shadow 0 8px 10px rgba($color--subtitle-text, 0.15)
    color $color--highlight

  &__content
    padding 1.5em

  &__title
    font-size 1.5em
    margin 0
    color inherit

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