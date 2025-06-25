<template lang="pug">
  .page.scene#contact
    .contact
      .wrap
        .persp
          .title
              a.icon(href="https://x.com/NamanyayG")
                TwitterIcon
              a.icon(href="https://www.linkedin.com/in/namanyayg/")
                LinkedinIcon
              a.icon(href="https://github.com/namanyayg/")
                GithubIcon
</template>

<script>
import LinkedinIcon from '../Icons/LinkedinIcon.vue'
import GithubIcon from '../Icons/GithubIcon.vue'
import TwitterIcon from '../Icons/TwitterIcon.vue'

export default {
  name: 'Contact',
  components: {
    LinkedinIcon,
    GithubIcon,
    TwitterIcon
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.page
  padding 4em
  background-color $color--work-bg
  background-image radial-gradient(circle at 25%, $color--work-bg 10%, lighten($color--work-bg, 5%))
  color $color--body-text

.title
  text-align center
  margin 0 !important

a
  font-weight 700
  color $color--title-text

  &:hover
    color $color--highlight

.icon
  color $color--title-text
  line-height 1
  svg
    transition all .3s ease
    width .875em
    margin-left 5vw
    transform translateY(.5rem)
    fill $color--title-text
  &:hover
    svg
      fill $color--highlight

.thank-you
  font-size 1.25em
  padding 1.5em 2em
  box-sizing border-box
  font-weight 300
  background lighten($color--body-text, 50%)
  color $color--body-text
  position absolute
  top 0
  left 15px
  right 15px
  z-index -1
  opacity 0
  transform translateY(3em)

  strong
    font-weight 400
    color $color--title-text

  p
    margin 0

    + p
      margin-top .5em

.persp
  perspective 800
  position relative

  &:nth-child(1)
    perspective-origin top center

  &:nth-child(2)
    perspective-origin center right

.title
  font-size 4em
  font-weight 700
  margin 0 0 1em
  color $color--title-text
  transform-origin center bottom

.content
  font-size 1.5em
  font-weight 300

.control .element
  background lighten($color--body-text, 70%)

.foci
  background lighten($color--work-bg, 5%)

input, textarea, select
  color $color--body-text

.button-container
  display flex
  justify-content flex-end
  width 100%

.control
  transform-origin center right

button
  background $color--highlight
  padding 1.25em 1.5em
  color #fff
  font-size .875em

@media (max-width 60em)
  .content
    font-size 1.25em

@media (max-width 48em)
  .title
    font-size 2.75em
    margin 0 0 .5em

  .page
    padding 6em 0 8em

  .thank-you
    margin 2em 0 0

@media (max-width 30em)
  .title
    font-size 2.5em
    line-height 1
    margin 0 0 2rem

  .content
    font-size 1em
</style>
