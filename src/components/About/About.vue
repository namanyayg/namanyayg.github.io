<template lang="pug">
#about.about
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

        p I discovered my passion for programming at the young age of <strong>14 years old</strong>.

        p Since high school, I've loved to code until late hours of the night. I started my own agency and worked on 60+ consulting projects for international clients.

        p With over 10 years experience in leading my agency, I have built performant apps used by millions of users.
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="stylus" scoped>
.about {
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 4em;
    font-weight: bold;
  }

  .subtitle {
    font-style: italic;
    font-size: 1.5em;
    font-weight: 300;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
  }
}

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
    gradient-text('linear-gradient(to right, rgba(24,138,141,1) 11.2%, rgba(96,221,142,1))', 'light');
  }

  .dyeus {
    gradient-text('linear-gradient(to left, rgba(246,191,13,1) 0%, rgb(255 104 104)  90%)', 'light');
  }

  .ai {
    gradient-text('linear-gradient(to right, #177800, #82b000)', 'light');
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
