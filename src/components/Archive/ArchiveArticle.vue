<template>
  <ArchiveFrame>
    <main v-if="record" id="archive-content" class="archive-article">
      <nav class="archive-breadcrumb" aria-label="Breadcrumb"><router-link to="/lab/">The Lab</router-link><span aria-hidden="true">/</span><router-link :to="'/lab/#year-' + record.year">{{ record.year }}</router-link></nav>
      <header class="archive-article-heading"><p class="archive-date">{{ record.dateLabel }} · {{ categoryName }}</p><h1>{{ record.title }}</h1><p class="archive-deck">{{ record.summary }}</p></header>
      <figure v-if="!record.textOnly" class="archive-hero-figure"><a :href="record.image" :aria-label="'View full image: ' + record.title"><img :src="record.image" :alt="record.title + ' archive preview'" width="1440" height="1000"/></a></figure>
      <div class="archive-article-columns">
        <aside class="archive-source"><h2>From the archive</h2><p>{{ record.dateNote }}</p><a v-for="link in record.links" :key="link[1]" :href="link[1]" target="_blank" rel="noopener noreferrer">{{ link[0] }} <span aria-hidden="true">↗</span></a></aside>
        <div class="archive-prose"><p v-for="paragraph in record.paragraphs" :key="paragraph">{{ paragraph }}</p><blockquote v-if="record.excerpt">{{ record.excerpt }}<cite>From the original homepage</cite></blockquote>
          <div v-if="record.interactive === 'karya'" class="archive-karya"><h2>Three things for today</h2><p class="archive-caption">A new local version of the original idea. Your list stays in this browser.</p><div v-for="(task, index) in tasks" :key="index" class="archive-task"><input :id="'task-done-' + index" type="checkbox" v-model="task.done" :aria-label="'Complete priority ' + (index + 1)" @change="saveTasks"/><input type="text" v-model="task.text" :aria-label="'Priority ' + (index + 1)" :class="{ 'is-done': task.done }" placeholder="Something worth doing…" maxlength="200" @input="saveTasks"/></div><p v-if="storageError" role="status" class="archive-caption">Browser storage is unavailable. Your list works here until you leave the page.</p></div>
        </div>
      </div>
      <figure v-if="record.video" class="archive-film"><video controls playsinline preload="none" :poster="record.image" :aria-label="record.title + ' original animation'"><source :src="'/static/archive/' + record.video" :type="record.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'"/><a :href="'/static/archive/' + record.video">Download the video</a></video><figcaption>{{ record.videoCaption }}</figcaption></figure>
      <section v-if="record.gallery" class="archive-gallery" aria-label="Original designs"><figure v-for="figure in record.gallery" :key="figure[0]"><a :href="'/static/archive/' + figure[0]"><img :src="'/static/archive/' + figure[0]" :alt="figure[1]" loading="lazy" decoding="async"/></a><figcaption>{{ figure[1] }}</figcaption></figure></section>
      <section v-if="record.reading" class="archive-readings"><h2>The original notebook</h2><p>Writing from the 2014–2015 collection, preserved as historical tutorials.</p><details v-for="entry in readings" :key="entry.title"><summary>{{ entry.title }}</summary><div class="archive-transcript" v-html="entry.html"/></details></section>
      <nav v-if="record.slug.indexOf('portfolio-') === 0" class="archive-editions" aria-label="Portfolio editions"><h2>Other editions</h2><router-link v-if="record.slug !== 'portfolio-2013'" to="/lab/portfolio-2013/">2013–2014: The freelance years begin</router-link><router-link v-if="record.slug !== 'portfolio-2018'" to="/lab/portfolio-2018/">2018 &amp; 2023: A portfolio in motion</router-link><router-link to="/">The current site</router-link></nav>
      <nav class="archive-pagination" aria-label="More from the timeline"><router-link v-if="previous" :to="'/lab/' + previous.slug + '/'">← {{ previous.title }}</router-link><router-link v-if="next" :to="'/lab/' + next.slug + '/'">{{ next.title }} →</router-link></nav>
    </main>
    <main v-else id="archive-content" class="archive-article"><h1>That page isn’t in the archive.</h1><router-link to="/lab/">Return to the timeline</router-link></main>
  </ArchiveFrame>
</template>
<script>
import ArchiveFrame from './ArchiveFrame'
import records from './records.json'
import readings from './readings.json'
import legacy from '../Lab/data'
export default {
  name: 'ArchiveArticle', components: { ArchiveFrame },
  data () { return { readings, tasks: Array.from({ length: 3 }, () => ({ text: '', done: false })), storageError: false } },
  computed: {
    index () { return records.findIndex(item => item.slug === this.$route.params.slug) },
    record () { return records[this.index] }, previous () { return records[this.index - 1] }, next () { return records[this.index + 1] },
    categoryName () { return this.record ? legacy.categories.find(item => item.key === this.record.category).name : '' }
  },
  mounted () { try { const saved = JSON.parse(localStorage.getItem('nmn-karya-priorities')); if (Array.isArray(saved) && saved.length === 3) this.tasks = saved.map(item => ({ text: typeof item.text === 'string' ? item.text.slice(0, 200) : '', done: item.done === true })) } catch (e) {} },
  methods: { saveTasks () { try { localStorage.setItem('nmn-karya-priorities', JSON.stringify(this.tasks)) } catch (e) { this.storageError = true } } }
}
</script>
