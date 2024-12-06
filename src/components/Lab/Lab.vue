<template lang="pug">
#lab.lab
  .lab-intro
    .content
      .wrap
        header.header
          h1.title Lab
          .subtitle My personal open-source passion projects
  .lab
    .wrap
      .lab__items
        LabItem(v-for="item in getItems('featured')" :key="item.key" :data="item").lab-item
</template>

<script>
import LabItem from './LabItem.vue'
import data from './data.js'

export default {
  name: 'Lab',
  components: {
    LabItem
  },
  computed: {
    yearsFriends () {
      const d = new Date()
      return d.getFullYear() - 2011
    }
  },
  methods: {
    getItems (category) {
      return data.data
    }
  }
}
</script>

<style lang="stylus">
.lab {
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

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2em 3em;
  }

  &-item {
    width: 50%;
    padding: 0 2em;
    margin: 0 0 5em;
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

.lab {
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

.lab__intro {
  p:first-child {
    margin-top: 0;
  }
  font-size: 1.5em;
  padding: 0 0 3em;
}

@media (max-width: 67.5em) {
  .lab {
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

  .lab {
    font-size: 0.875em;
    .wrap {
      width: 90%
    }
  }
}

@media (max-width: 50em) {
  .lab__history, .lab__intro {
    font-size 1.25em
  }

  .title {
    font-size: 3em;
  }

  .subtitle {
    font-size: 1em;
  }

  .lab__items {
    flex-direction column
  }

  .lab-item {
    width 100%
  }
}

@media (max-width: 32.5em) {
  .lab .title {
    font-size: 2.5em;
    margin: 1em 0 0;
  }
}
</style>
