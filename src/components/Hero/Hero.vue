<template lang="pug">
.hero-container.scene
  .hero
    Masthead.masthead(back="dark")
    Bg
    .wrap
      h1.title
        span
          span Crafting&nbsp;
          span
            strong delightful experiences
            span.highlight
          span &nbsp;
        br
        span
          span used by&nbsp;
          span
            strong millions
            span.highlight
            span &nbsp;
          span of people,&nbsp;
          span worldwide.
      h2.subtitle Hey, I&rsquo;m <strong class="highlight">Namanyay Goel</strong>. Using over {{ expYears }} years of development experience; I work with my team to craft <em>exemplary</em> products for the <em>worldwide web</em>
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
  margin: 0 0 8em;
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
  padding-bottom: 14em;
}

.title {
  margin: 0;
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
    bottom: 0.25rem;
    height: 0.375rem;
    transform: perspective(10);
    background: linear-gradient(45deg, darken($color--highlight, 10%), $color--highlight, darken($color--highlight, 20%));
    z-index: -1;
  }
}

.subtitle {
  margin: 0;
  font-weight: 300;
  font-size: 2em;
  color: $color--hero-subtitle;
  font-style: none;
  margin: 2em 0 0;
  max-width: 30em;

  strong {
    font-weight: bold;
  }

  .highlight {
    color: $color--hero-text;
  }
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
    font-size: 1.675em;
  }

  .subtitle {
    font-size: 1em;
  }
}

@media (max-width: 27.5em) {
  .title {
    font-size: 1.375em;

    .highlight {
      height: 2px !important;
    }
  }
}
</style>
