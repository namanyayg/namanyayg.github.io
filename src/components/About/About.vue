<template lang="pug">
#about.about.page
  .about-intro
    .content
      .wrap
        header.header
          h1.title About
          .subtitle My origins & where I am now
  .about
    .wrap
      .about__intro(ref="about-intro")
        p Nothing excites me more than the <strong class="dyeus">act of creation</strong>, especially on the worldwide web.

        p I discovered my passion for programming at the young age of <strong>13 years old</strong>.

        p Since high school, I've loved to code until late hours of the night. I started my own agency and worked on <span class="ayom">60+ consulting projects</span> for international clients.

        p With <span class="ai">over 10 years experience</span> in leading my agency, I have built performant apps used by millions of users.
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.page
  padding 4em 0 2em
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

gradient-text($gradient, $bg = 'light') {
  @supports (mix-blend-mode: lighten) {
    display: inline-block;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: unquote($gradient);
      pointer-events: none;
    }

    if ($bg == 'light') {
      color: #000;
      background: #fff;
      mix-blend-mode: multiply;

      &::before {
        mix-blend-mode: screen;
      }
    } else {
      color: #fff;
      background: #000;
      mix-blend-mode: lighten;

      &::before {
        mix-blend-mode: multiply;
      }
    }
  }
}

.about {
  .ayom {
    gradient-text('linear-gradient(to right, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1))', 'dark');
  }

  .dyeus {
    gradient-text('linear-gradient(to left, rgba(246,191,13,1) 0%, rgb(255 104 104)  90%)', 'dark');
  }

  .ai {
    gradient-text('linear-gradient(to right, #177800, #82b000)', 'dark');
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
