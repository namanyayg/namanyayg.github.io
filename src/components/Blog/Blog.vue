<template lang="pug">
#blog.blog.page
  .blog-intro
    .content
      .wrap
        header.header
          h1.title Blog
          .subtitle Latest thoughts on AI, startups, and life
  .blog
    .wrap
      .blog__items(v-if="posts.length")
        BlogPost(
          v-for="post in posts"
          :key="post.id"
          :data="post"
        ).blog-item
      .blog__loading(v-else)
        p Loading latest posts...
</template>

<script>
import BlogPost from './BlogPost.vue'
import { fetchBlogPosts } from './blogService'

export default {
  name: 'Blog',
  components: {
    BlogPost
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async loadPosts () {
      try {
        this.posts = await fetchBlogPosts()
      } catch (error) {
        console.error('Error loading blog posts:', error)
        this.posts = []
      }
    }
  },
  mounted () {
    this.loadPosts()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.page
  padding 4em 0 2em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color darken($color--hero-text, 10%)
  font-weight 300

.blog
  .header
    display flex
    width 100%
    justify-content space-between
    align-items center
    margin 0 0 2em

  .title
    font-size 4em
    font-weight bold
    color $color--hero-title
    margin 0

  .subtitle
    font-style italic
    font-size 1.5em
    font-weight 300
    color $color--hero-subtitle

  &__items
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 2em

  &__loading
    text-align center
    font-size 1.2em
    color $color--hero-text--light

@media (max-width: 67.5em)
  .blog
    .header
      flex-direction column
      margin 0 0 2em
      align-items start !important

    .title
      margin 0

    .subtitle
      font-size 1.375em

@media (max-width: 60em)
  .subtitle
    font-size 1.125em

  .blog
    font-size 0.875em
    .wrap
      width 90%

@media (max-width: 50em)
  .blog__intro
    font-size 1.25em

  .title
    font-size 3em

  .subtitle
    font-size 1em

@media (max-width: 32.5em)
  .blog .title
    font-size 2.5em
    margin 1em 0 0
</style> 