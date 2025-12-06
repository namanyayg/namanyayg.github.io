<template lang="pug">
#blog.blog.page
  .container(v-show="posts.length")
  .blog-intro
    .content
      .wrap
        header.header
          h1.title Blog
          .subtitle Latest thoughts on AI, startups, and life
  .blog
    .wrap
      .blog__items
        BlogPost(
          v-for="post in posts"
          :key="post.id"
          :data="post"
        ).blog-item
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
        console.log(this.posts)
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
  padding 4em 0
  background white
  color $color--body-text
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
    color $color--body-text
    margin 0

  .subtitle
    font-style italic
    font-size 1.5em
    font-weight 300
    color $color--subtitle-text

  &__items
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 2em

  &__loading
    text-align center
    font-size 1.2em
    color $color--subtitle-text

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