<template lang="pug">
#about.about
  .about-intro
    .content
      .wrap
        header.header
          h1.title Portfolio
          .subtitle Selected business solutions built since 2014
  .works
    .wrap
      .about__works
        WorkItem(v-for="work in getWorks('featured')" :key="work.namespace" :data="work")

      //- .about__history(ref="about-history")
        ol
          p Take a peek into my life&rsquo;s journey by scrolling through some moments that&nbsp;define&nbsp;me:
          li <strong class="time">Age 6 <em>(2005)</em></strong>My mum gave me a white beige mouse and placed me before a beige screen and showed me how to point. She had no idea then, but she had sown a lasting love.

          li <strong class="time">Age 12 <em>(2010)</em></strong>Stumbled upon Newgrounds. Started learning how to create games & stick animations using Macromedia Flash and Actionscript.

          li <strong class="time">Age 12 <em>(2011)</em></strong>Joined guitar lessons with my trusty acoustic guitar, sparking my love for playing & creating music. I played only for 1.5 years, deciding to protect my wrist to be able to focus more on software.

          li <strong class="time">Age 13 <em>(2011)</em></strong>Began learning web design, graphic design, and web development. Began producing my own remixes on Audacity.

          li <strong class="time">Age 13 <em>(2011)</em></strong>Got invited to join my school’s top computer club, my dojo where I forged long friendships and honed my skills. Met Aditya and Tanay, my best friends and co-founders. We are still working together, {{ yearsFriends }} years later.

          li <strong class="time">Age 13 <em>(2012)</em></strong>Realized that I could use my <em>skills</em> to earn <em>money</em>. <a href="https://forums.digitalpoint.com/threads/quick-job-add-glow-to-a-logo-quick-5.2412839/#post-17379469" rel="nofollow">I earned $5 for my first digital job</a>. I still remember the thrill of getting paid for working with computers, which I&rsquo;d do for free anyway. I still feed proud.

          li <strong class="time">Age 13 <em>(2012)</em></strong>Throughout my journey, I kept writing my blog to structure my thoughts and teach others what I&rsquo;d learnt, like this <a href="https://nmn.gl/blog/how-to-learn-javascript-my-story">article on learning JavaScript</a> that I used to share with friends who wanted to learn web development.

          li <strong class="time">Age 14 <em>(2013)</em></strong>Applied to a remote job as a web developer on of the technology blogs I used to frequent, on Aditya&rsquo;s insistence. As luck would have it, <a href="https://archive.is/KzVZw">they all loved my portfolio website from back then</a>. And fortunately, they weren&rsquo;t a fan of video calls, so my age continued to remain secret. I aced all the interview rounds and joined MakeUseOf as a frontend web developer, where I worked for 1.5 years after reaching home from high school. Till date, this has been my only long-term official "job", I became a pure entrepreneur after this.

          li <strong class="time">Age 15 <em>(2014)</em></strong>Participated in Google Code-In, a global competition for high school students, which I discovered while randomly surfing online. Contributed to <a href="https://gci14.fossasia.org/">FOSSASIA</a> with 40+ open issues and tasks completed. My mentors, Mario Behling and Aruna Herath, <a href="https://opensource.googleblog.com/2015/04/google-code-in-2014-wrap-up-with.html">chose me as the grand prize winner</a>. One of the prizes was an all expenses paid trip to Google San Francisco with one parent. Using the money earned with my freelancing, I brought my other parent and sister along as well. I learnt a lot with Google, got a lot more goodies, and my whole family toured throughout SF, the Bay Area, Nevada, and more for a month.

          li <strong class="time">Age 16 <em>(2014)</em></strong>Got elected as the Vice President of the computer club Code Warriors.

          li <strong class="time">Age 16 <em>(2014)</em></strong>Chose and led a team of 12 peers and created a fictional orbital space settlement as part of <a href="https://en.wikipedia.org/wiki/International_Space_Settlement_Design_Competition">SSDC&rsquo;s initial round</a>. We won and moved to the Asian round, where we partnered with a team from China and secured rank #1 in all of Asia upon making a lunar settlement over a red bull driven all nighter.

          li <strong class="time">Age 17 <em>(2015)</em></strong>Got invited to the US for winning the Asian round of SSDC, to spend time at the Kennedy Space Center and work with Boeing employees to create a Martian space settlement. <a href="https://spaceset.org/who-we-are/">Jack Gafford</a> chose me to receive the Dick Edwards Award for Excellent Leadership during my time there.

          li <strong class="time">Age 17 <em>(2015)</em></strong>Got elected as the President of the computer club Code Warriors.

          li <strong class="time">Age 17 <em>(2016)</em></strong>In 11<sup>th</sup> grade, I realized that the computer science books were difficult to understand and could do with a major overhaul. I published a free e-book called <a href="https://leanpub.com/lessconfusingcpp">Less Confusing C++</a> to teach 11<sup>th</sup> grade programming around the time when I was finishing the year myself. It got to around 500+ readers quickly, and was praised by many of my juniors and teachers IRL.

          li <strong class="time">Age 17 <em>(2016)</em></strong>Joined University of Washington at Seattle. Chose it because of Microsoft, Amazon, and because, well, it&rsquo;s Seattle. Was invited to start in the Honors program.

          li <strong class="time">Age 18 <em>(2016)</em></strong>Created my first web product with Tanay called "Unexpend". It was a marketplace aggregator to find you the best prices for any product. We earned a little via affiliate links, before shutting it down.

          li <strong class="time">Age 18 <em>(2016)</em></strong>After my first quarter, scoring a 4.0 GPA and making the Dean's List, I decided to drop out. I felt that the pace of education was too slow and the costs too high. I decided to remain debt-free, come back home, and start my business with Tanay.

          li <strong class="time">Age 18 <em>(2016)</em></strong>Started and incorporated my startup "Nataco" with Tanay. Founded two e-commerce companies called "Flairlift" and "Untitle" selling t-shirts. Made beautiful websites, did our first photoshoots, and learnt about Facebook marketing, warehousing, and B2B sales. Our CPCs becmae too high and we quit after selling out our last batches in 2 years.

          li <strong class="time">Age 20 <em>(2018)</em></strong>Started <a class="dyeus" href="https://dyeus.co/">Dyeus</a>, a design and development agency, and worked on a <em>lot</em> of web and mobile app client projects with Tanay and a small team.

          li <strong class="time">Age 22 <em>(2020)</em></strong>After many on and offs since 2016, decided to get set up a home gym with some new and some second hand equipment and started a serious weightlifting journey following <a href="https://i.stack.imgur.com/OUcEY.png">Phrakture's Greyskull LP</a>.

          li <strong class="time">Age 24 <em>(2022)</em></strong>Reached my financial independence milestone.

          li <strong class="time">Age 24 <em>(2022)</em></strong>Took a sabbatical and spent a few months travelling throughout South East Asia and visited Japan, Thailand, Hong Kong, Dubai, and more.

          li <strong class="time">Age 25 <em>(2023)</em></strong>Tanay and Aditya gifted me an electric guitar, resuming my love of music. Also, after lifting for over 3 years, started learning Mixed Martial Arts to increase my speed and skill.

          li <strong class="time">Age 25 <em>(2023)</em></strong>Started working on AI generative projects with my two best friends and co-founders, with my cumilative experience of working professionally online for over 10 years.
</template>

<script>
import WorkItem from './WorkItem.vue'
import data from './data.js'

export default {
  name: "About",
  components: {
    WorkItem
  },
  computed: {
    yearsFriends() {
      const d = new Date();
      return d.getFullYear() - 2011
    }
  },
  methods: {
    getWorks (category) {
      const mapping = {
        featured: ['ayom', 'asa', 'autolo', 'asianfanfics', 'lownotes', 'cyankart']
      }
      const works = mapping[category].map(work => data[work])
      return works
    }
  },
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

@media (max-width: 32.5em) {
  .about .title {
    font-size: 2.5em;
    margin: 1em 0 0;
  }
}
</style>
