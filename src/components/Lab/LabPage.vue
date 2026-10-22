<template>
  <ArchiveFrame>
    <main id="archive-content">
      <header class="archive-masthead">
        <h1>The Lab</h1>
        <div class="archive-dateline"><span>Namanyay Goel’s collected work</span><span>2012–2025</span><span>Design, code &amp; a little curiosity</span></div>
      </header>
      <section class="archive-opening" aria-label="From the archive">
        <article class="archive-lead">
          <router-link to="/lab/portfolio-2018/" class="archive-image-link"><img src="/static/archive/portfolio-2018.webp" alt="Namanyay’s recovered 2018 portfolio homepage" width="1440" height="1000" fetchpriority="high"/></router-link>
          <p class="archive-date">2013–2023 · The portfolio editions</p>
          <h2><router-link to="/lab/portfolio-2018/">Growing up on the web.</router-link></h2>
          <p>From a teenage freelance portfolio to a site filled with client work, the old editions trace a decade of learning to make things for the screen.</p>
          <router-link class="archive-read" to="/lab/portfolio-2018/">Browse the old portfolios <span aria-hidden="true">↗</span></router-link>
        </article>
        <article class="archive-secondary">
          <router-link to="/lab/nataco/" class="archive-image-link"><img src="/static/archive/nataco.webp" alt="The original Nataco studio homepage" width="1440" height="1000"/></router-link>
          <p class="archive-date">2020–2021 · Design &amp; development</p>
          <h2><router-link to="/lab/nataco/">A world called Nataco.</router-link></h2>
          <p>The studio’s illustrated world survives, right down to its original 3D hero animation.</p>
          <router-link class="archive-read" to="/lab/nataco/">Revisit the studio <span aria-hidden="true">↗</span></router-link>
        </article>
      </section>
      <section class="archive-index" aria-labelledby="timeline-title">
        <div class="archive-index-heading"><h2 id="timeline-title">A life in the making</h2><p>{{ records.length }} creations, in the order they happened.</p></div>
        <nav class="archive-categories" aria-label="Filter projects by subject">
          <button :aria-pressed="category === 'all'" @click="selectCategory('all')">Everything</button>
          <button v-for="item in categories" :key="item.key" :aria-pressed="category === item.key" @click="selectCategory(item.key)">{{ item.name }}</button>
        </nav>
        <nav class="archive-years" aria-label="Jump to year"><a v-for="group in groups" :key="group.year" :href="'#year-' + group.year">{{ group.year }}</a></nav>
        <div :id="'lab-' + category" class="archive-timeline" aria-live="polite">
          <section v-for="group in groups" :key="group.year" :id="'year-' + group.year" class="archive-year" :aria-labelledby="'heading-' + group.year">
            <header class="archive-year-heading"><h2 :id="'heading-' + group.year">{{ group.year }}</h2><span>{{ yearNotes[group.year] || '' }}</span></header>
            <div class="archive-year-stories">
              <article v-for="item in group.items" :key="item.slug" class="archive-story" :data-project="item.slug">
                <router-link v-if="!item.textOnly" :to="'/lab/' + item.slug + '/'" class="archive-image-link"><img :src="item.image" :alt="item.title + ' archive preview'" width="1440" height="1000" loading="lazy" decoding="async"/></router-link>
                <router-link v-else :to="'/lab/' + item.slug + '/'" class="archive-type-preview"><span>“Hello, I’m<br/>Namanyay Goel.”</span><small>From the 2013–2014 homepage</small></router-link>
                <p class="archive-date">{{ item.dateLabel }} · {{ categoryName(item.category) }}</p>
                <h3><router-link :to="'/lab/' + item.slug + '/'">{{ item.title }}</router-link></h3>
                <p>{{ item.summary }}</p>
                <router-link class="archive-read" :to="'/lab/' + item.slug + '/'">Read the story <span aria-hidden="true">↗</span></router-link>
              </article>
            </div>
          </section>
        </div>
        <p class="archive-date-note">Dates follow project history and the surviving editions. “c.” marks an approximate date; each story includes its source.</p>
      </section>
    </main>
  </ArchiveFrame>
</template>
<script>
import ArchiveFrame from '../Archive/ArchiveFrame'
import records from '../Archive/records.json'
import legacy from './data'
export default {
  name: 'LabPage', components: { ArchiveFrame },
  data () { return { records, categories: legacy.categories, category: 'all', yearNotes: { 2012: 'At fourteen', 2013: 'Finding a visual language', 2014: 'School, teams & open source', 2015: 'Ideas become applications', 2016: 'A wider world', 2017: 'Writing it down', 2018: 'Designing for clients', 2020: 'Building through lockdown', 2021: 'The studio years', 2024: 'New tools, old curiosity', 2025: 'Working with AI' } } },
  computed: {
    groups () { const filtered = this.records.filter(item => this.category === 'all' || item.category === this.category); return [...new Set(filtered.map(item => item.year))].sort().map(year => ({ year, items: filtered.filter(item => item.year === year) })) }
  },
  watch: { '$route.hash': { immediate: true, handler (hash) { const key = (hash || '').replace('#lab-', ''); if (this.categories.some(item => item.key === key)) this.category = key; else if (key === 'all') this.category = 'all' } } },
  methods: {
    categoryName (key) { return this.categories.find(item => item.key === key).name },
    selectCategory (key) { this.category = key; if (this.$route.hash !== '#lab-' + key) this.$router.replace({ hash: '#lab-' + key }) }
  }
}
</script>
