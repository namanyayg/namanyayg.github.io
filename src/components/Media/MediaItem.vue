<template lang="pug">
  .media-item
    .image-container(@click="downloadImage")
      img.media-image(:src="`/static/${data.filename}`" :alt="data.title")
      .overlay
        .download-btn
          .button Download
</template>

<script>
export default {
  name: 'MediaItem',
  props: ['data'],
  methods: {
    downloadImage() {
      const link = document.createElement('a')
      link.href = `/static/${this.data.filename}`
      link.download = `namanyay-goel-${this.data.id}.${this.data.filename.split('.').pop()}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.media-item
  position relative
  break-inside avoid
  margin-bottom 1.5em
  cursor pointer
  overflow hidden
  border-radius 4px
  transition transform 0.3s ease, box-shadow 0.3s ease

  &:hover
    transform translateY(-4px)
    box-shadow 0 12px 24px rgba(0,0,0,0.15)
    
    .overlay
      opacity 1

.image-container
  position relative
  width 100%
  overflow hidden
  background #f5f5f5

  img
    width 100%
    height auto
    display block
    transition transform 0.3s ease

  &:hover img
    transform scale(1.05)

.overlay
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0, 0, 0, 0.65)
  display flex
  align-items center
  justify-content center
  opacity 0
  transition opacity 0.3s ease

.download-btn
  .button
    display inline-block
    padding 1em 2em
    background linear-gradient(45deg, $color--work-title-underline--light, $color--work-title-underline--dark)
    color white
    text-decoration none
    font-weight bold
    font-size 1.125em
    border-radius 4px
    transition transform 0.2s ease, box-shadow 0.2s ease
    box-shadow 0 4px 12px rgba(0,0,0,0.2)
    pointer-events none

    &:hover
      transform translateY(-2px)
      box-shadow 0 6px 16px rgba(0,0,0,0.3)

@media (max-width 50em)
  .download-btn .button
    font-size 1em
    padding 0.875em 1.5em

@media (max-width 30em)
  .media-item
    margin-bottom 1em

  .download-btn .button
    font-size 0.9em
    padding 0.75em 1.25em
</style>

