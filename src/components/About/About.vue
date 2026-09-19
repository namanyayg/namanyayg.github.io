<template lang="pug">
#about.about.page
  .about-intro
    .content
      .wrap
        header.header
          h1.title About
  .about
    .wrap
      .about__intro(ref="about-intro")
        p I'm working on <a class="ai" href="https://gigacatalyst.com/">Gigacatalyst</a> in San Francisco. We're backed by Y Combinator and are growing fast.

        p I also <a href="https://nmn.gl/blog" class="ayom" style="text-decoration: underline">write about AI often</a>. My articles garnered over four million views in 2025 and I was featured in the New York Times, Futurism, Inc. Magazine, and many more.

        p I discovered my passion for programming at the young age of <strong class="dyeus">13 years old</strong>. With over 15 years experience in building, I have built apps used by millions of users.
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.page
  padding 3em 0 1em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color darken($color--hero-text, 10%)
  font-weight 300

.about
  .header
    display: flex
    width: 100%
    justify-content: space-between
    align-items: center
    margin 0 0 2em

  .title
    font-size: 4em
    font-weight: bold
    color: $color--hero-title
    margin: 0

  .subtitle
    font-style: italic
    font-size: 1.5em
    font-weight: 300
    color: $color--hero-subtitle

  .wrap
    display: flex
    justify-content: space-between

.about {
  .ayom {
    font-weight: 500;
    text-decoration: none;
    color: $color--highlight;
    border-bottom: 1px solid rgba($color--highlight, .4);
    transition: border-color .2s ease;
  }

  .dyeus {
    font-weight: 500;
    color: $color--highlight;
    border-bottom: 1px solid rgba($color--highlight, .4);
    transition: border-color .2s ease;
  }

  .ai {
    font-weight: 500;
    color: $color--highlight;
    border-bottom: 1px solid rgba($color--highlight, .4);
    transition: border-color .2s ease;
  }

  .ayom:hover, .dyeus:hover, .ai:hover {
    border-bottom-color: $color--highlight;
  }
}

.about__intro {
  p:first-child {
    margin-top: 0;
  }
  font-size: 1.5em;
  padding: 0 0 3em;
}

@media (max-width: 67.5em) {
  .about {
    .header {
      flex-direction: column;
      margin: 0 0 2em;
      align-items: start !important;
    }

    .title {
      margin: 0;
    }

    .subtitle {
      font-size: 1.375em;
    }
  }
}

@media (max-width: 60em) {
  .subtitle {
    font-size: 1.125em;
  }

  .about {
    font-size: 0.875em;
    .wrap {
      width: 90%
    }
  }
}

@media (max-width: 50em) {
  .about__history, .about__intro {
    font-size 1.25em
  }

  .title {
    font-size: 3em;
  }

  .subtitle {
    font-size: 1em;
  }
}

@media (max-width: 37.5em) {
  .about > .wrap {
    flex-direction column
  }
}

@media (max-width: 32.5em) {
  .about .title {
    font-size: 2.5em;
    margin: 1em 0 0;
  }
}
</style>
