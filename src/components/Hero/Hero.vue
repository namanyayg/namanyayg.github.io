<template lang="pug">
.hero-container.scene
  .hero
    Masthead.masthead(back="dark")
    Bg
    .wrap
      h2.subtitle.intro Hi, I&rsquo;m <strong class="highlight underlined">Namanyay</strong> 👋
      h1.title
        span
          span I build&nbsp;
          span
            strong thoughtful apps
            span.highlight
          span &nbsp;that 
        br
        span
          span people&nbsp;
          span
            strong love to use
            span.highlight
      h2.subtitle Trusted by <strong class="highlight">60+ international clients</strong> with <strong class="highlight">12+ years</strong> experience of making complex businesses simple
      .social-cta
        a.x-button(href="https://x.com/NamanyayG" target="_blank" rel="noopener") 
          span Connect on
          svg.x-icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
            path(fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z")
          
    .wrap.hero__bottom
      Scroller.scroller(color="light")
</template>

<script>
import { mapGetters } from "vuex";
import { TweenLite, Power4 } from "gsap";
import HeroBg from "./HeroBg";
import Masthead from "../Masthead";
import Scroller from "./Scroller";

export default {
  name: "Hero",
  components: {
    Masthead,
    Scroller,
    Bg: HeroBg,
  },
  computed: {
    ...mapGetters(["viewType"]),

    expYears() {
      const d = new Date();
      return d.getFullYear() - 2012;
    },
  },
  methods: {
    beginAnimation() {
      this.$el.classList.remove("scene--set");

      const $ = (el) => this.$el.querySelector(el);
      const $$ = (el) => this.$el.querySelectorAll(el);

      [1, 2, 3].map((i) => {
        TweenLite.from($$(`.title > span`)[i - 1], 1, {
          y: 25,
          opacity: 0,
          ease: Power4.easeOut,
          rotationY: 10,
          delay: 0.25 * i,
        });
      });
      [1, 2].map((i) => {
        const $el = $$(".highlight")[i - 1];
        if ($el) {
          TweenLite.from($el, 2, {
            scaleX: 0,
            ease: Power4.easeOut,
            delay: 1 + 0.5 * (i - 1),
          });
        }
      });

      TweenLite.from($(".subtitle"), 2, {
        delay: 0.75,
        ease: Power4.easeOut,
        opacity: 0,
        y: 10,
      });

      TweenLite.from($(".hero__bottom"), 1, {
        delay: 1.5,
        y: 50,
        opacity: 0,
        ease: Power4.easeOut,
      });
    },
  },
  mounted() {
    this.$el.addEventListener("enliven", this.beginAnimation);
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables';

.scene--set {
  opacity: 0;
}

.row {
  align-items: center;
}

.wrap {
  position: relative;
  z-index: 5;
}

.masthead {
  margin: 0 0 2em;
}

.hero {
  background-color: $color--hero-bg--dark;
  background-position: left top;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25%, rgba(lighten($color--hero-bg, 5%), 0.8) 10%, rgba($color--hero-bg, 0));
    z-index: 3;
  }
}

.nightsky {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.hero__bottom {
  padding-bottom: 10em;
}

.title {
  margin: .5em 0;
  font-weight: 300;
  font-size: 4em;
  color: $color--hero-text;

  span {
    display: inline-block;
    position: relative;
    transform-origin: center left;
  }

  strong {
    font-weight: 700;
    color: $color--hero-title;
    text-shadow: 1px 1px 0 $color--hero-bg, -1px 1px 0 $color--hero-bg, 2px 2px 0 $color--hero-bg, -2px 2px 0 $color--hero-bg;
  }

  .highlight {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.375rem;
    height: 0.375rem;
    transform: perspective(10);
    background: linear-gradient(45deg, darken($color--highlight, 10%), $color--highlight, darken($color--highlight, 20%));
    z-index: -1;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 2em;
  color: $color--hero-subtitle;
  font-style: none;
  max-width: 30em;

  strong {
    font-weight: bold;
  }

  .highlight {
    color: $color--hero-text;
  }
}

.intro {
  font-size: 2.5em;
}

.amp {
  font-family: 'adobe-caslon-pro';
  line-height: 1;
  font-style: italic;
}

.hero-button {
  padding: 2em 5em;
  box-sizing: border-box;
}

@media (max-width: 82.5em) {
  .title {
    font-size: 3em;

    .highlight {
      height: 0.25rem;
    }
  }

  .subtitle {
    font-size: 1.5em;
  }
}

@media (max-width: 55em) {
  .masthead {
    margin: 0 0 6em;
  }

  .hero__bottom {
    padding-bottom: 9em;
  }

  .scroller {
    display: none;
  }
}

@media (max-width: 62.5em) {
  .title {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.25em;
  }
}

@media (max-width: 40em) {
  .title {
    font-size: 2em;
  }
}

@media (max-width: 32.5em) {
  .title {
    font-size: 1.625em;
  }

  .subtitle {
    font-size: 1.125em;
  }
}

@media (max-width: 27.5em) {
  .title {
    .highlight {
      height: 2px !important;
    }
  }
}

.social-cta
  .x-button
    margin-top: 1em
    display: inline-flex
    align-items: center
    gap: 0.75em
    padding: 0.75em 1.5em .825em
    font-size: 1.5em
    color: $color--hero-text
    text-decoration: none
    font-weight: bold
    border: 2px solid $color--hero-text
    border-radius: 8px
    transition: all 0.3s ease
    
    &:hover
      border-color: $color--highlight
    
  .x-icon
    width: 1.25em
    height: 1.25em
    margin-left: -0.5em
    color: $color--hero-text

@media (max-width: 55em)
  .social-cta .x-button
    font-size: 1em

@media (max-width: 32.5em)
  .social-cta .x-button
    font-size: 0.875em
</style>
