<template lang="pug">
.hero-container.scene
  .hero
    Masthead.masthead(back="dark")
    Bg
    .hero__content
      .hero__text
        h1.title 
          span Hi, I'm 
          span.name-wrapper
            span Namanyay
            span.highlight
        h2.subtitle 
          .subtitle__xl Startup founder <span class="amp">&</span> writer. 
          div Unlocking the next generation of human creativity&nbsp;at&nbsp;
            a(href="https://gigamind.dev" target="_blank" rel="noopener noreferrer") Giga AI
      .hero__image
        .image-card
          img(src="/static/202507-namanyay-interview.jpeg" alt="Namanyay Goel")
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

      TweenLite.from($(".title"), 1, {
        y: 30,
        opacity: 0,
        ease: Power4.easeOut,
        delay: 0.25,
      });

      const $highlight = $(".highlight");
      if ($highlight) {
        TweenLite.from($highlight, 2, {
          scaleX: 0,
          ease: Power4.easeOut,
          delay: 1,
        });
      }

      TweenLite.from($(".subtitle"), 1, {
        delay: 0.5,
        ease: Power4.easeOut,
        opacity: 0,
        y: 20,
      });

      TweenLite.from($(".hero__role"), 1, {
        delay: 0.75,
        ease: Power4.easeOut,
        opacity: 0,
        y: 20,
      });

      TweenLite.from($(".hero__image"), 1.2, {
        delay: 0.5,
        ease: Power4.easeOut,
        opacity: 0,
        x: 50,
        scale: 0.9,
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
  margin: 0 0 4em;
}

.hero {
  background-color: $color--hero-bg--dark;
  background-position: left top;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

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

.hero__content {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3em;
  gap: 4em;
}

.hero__text {
  flex: 1;
  max-width: 600px;
}

.hero__image {
  flex: 1;
  max-width: 400px;
  animation: float 8s ease-in-out infinite;
  
  .image-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.15),
      0 16px 32px rgba(0, 0, 0, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    transform: perspective(1000px) rotateY(-1deg) rotateX(0.5deg);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
      z-index: 1;
      opacity: 0.5;
      transition: opacity 0.6s ease;
    }
    
    &:hover {
      transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-4px);
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.15),
        0 12px 24px rgba(0, 0, 0, 0.2),
        0 20px 40px rgba(0, 0, 0, 0.25),
        inset 0 0 0 1px rgba(255, 255, 255, 0.08);
      
      &:before {
        opacity: 0.4;
      }
      
      img {
        transform: scale(1.0);
      }
    }
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(1.3);
    transform-origin: 60% 35%;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-5px) translateX(2px);
  }
  50% {
    transform: translateY(-3px) translateX(-2px);
  }
  75% {
    transform: translateY(-7px) translateX(1px);
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
  padding-bottom: 6em;
}

.title {
  margin: 0 0 0.5em 0;
  font-weight: 300;
  font-size: 4em;
  color: $color--hero-text;
  line-height: 1.2;

  .name-wrapper {
    position: relative;
    display: inline-block;
    font-weight: 700;
  }

  .highlight {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.3rem;
    height: 0.375rem;
    background: linear-gradient(45deg, darken($color--highlight, 10%), $color--highlight, darken($color--highlight, 20%));
    z-index: -1;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 2em;
  color: $color--hero-subtitle;
  font-style: none;
  line-height: 1.5;
  margin: 1em 0 0;
  padding: 0;

  .amp {
    font-family: 'adobe-caslon-pro';
    line-height: 1;
    font-style: italic;
  }

  a {
    color: $color--hero-text;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
    text-decoration: none;

    &:hover {
      border-bottom-color: $color--highlight;
    }
  }

  .subtitle__xl {
    margin: 0 0 1em;
  }
}

@media (max-width: 82.5em) {
  .hero__content {
    padding: 0 2em;
    gap: 3em;
  }

  .title {
    font-size: 3em;

    .highlight {
      bottom: 0.25rem;
      height: 0.3rem;
    }
  }

  .subtitle {
    font-size: 1.25em;
  }

  .hero__role {
    font-size: 1.25em;
  }
}

@media (max-width: 62.5em) {
  .hero__content {
    flex-direction: column;
    padding: 4em 2em 2em;
    gap: 3em;
  }

  .hero__text {
    max-width: 100%;
    text-align: center;
  }

  .hero__image {
    max-width: 400px;
  }

  .title {
    font-size: 2.5em;

    .highlight {
      bottom: 0.2rem;
      height: 0.25rem;
    }
  }
}

@media (max-width: 55em) {
  .masthead {
    margin: 0 0 2em;
  }

  .hero__bottom {
    padding-bottom: 6em;
  }

  .scroller {
    display: none;
  }
}

@media (max-width: 40em) {
  .hero__content {
    padding: 3em 1.5em 2em;
    gap: 2em;
  }

  .title {
    font-size: 2em;

    .highlight {
      bottom: 0.15rem;
      height: 3px;
    }
  }

  .hero__image {
    max-width: 350px;
  }
}

@media (max-width: 32.5em) {
  .masthead {
    margin: 0 0 1.5em;
  }

  .hero__bottom {
    padding-bottom: 4em;
  }

  .hero__content {
    padding: 2em 1em 1.5em;
  }

  .title {
    .highlight {
      bottom: 0.1rem;
      height: 2px;
    }
  }

  .hero__image {
    max-width: 100%;
  }
}
</style>
