<template>
  <ArchiveFrame>
    <main v-if="record" id="archive-content" class="archive-article">
      <nav class="archive-breadcrumb" aria-label="Breadcrumb"><router-link to="/lab/">The Lab</router-link><span aria-hidden="true">/</span><router-link :to="'/lab/#year-' + record.year">{{ record.year }}</router-link></nav>
      <header class="archive-article-heading"><h1>{{ record.title }}</h1><p class="archive-date">{{ record.dateLabel }} · {{ categoryName }}</p><p class="archive-deck">{{ record.summary }}</p><nav v-if="(record.links && record.links.length) || record.interactive" class="archive-project-links" aria-label="Explore this project"><a v-for="link in record.links" :key="link[1]" :href="link[1]" :target="link[1].startsWith('#') ? null : '_blank'" rel="noopener noreferrer">{{ link[0] }} <span v-if="!link[1].startsWith('#')" aria-hidden="true">↗</span></a><a v-if="record.interactive" href="#try-project">Try the list</a></nav><p v-if="record.restoreNote" class="archive-restore-note">{{ record.restoreNote }}</p></header>
      <figure v-if="!record.textOnly" class="archive-hero-figure" :class="{ 'archive-portrait': record.imagePortrait }"><a :href="record.image" :aria-label="'View full image: ' + record.title"><img :src="record.image" :alt="record.imageCaption || record.title + ' archive preview'"/></a><figcaption>{{ record.imageCaption || record.title + ' preview' }} <a :href="record.image">Open full size ↗</a></figcaption></figure>
      <figure v-if="record.video" class="archive-film"><video controls playsinline preload="none" :poster="record.image" :aria-label="record.title + ' original animation'"><source :src="'/static/archive/' + record.video" :type="record.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'"/><a :href="'/static/archive/' + record.video">Download the video</a></video><figcaption>{{ record.videoCaption }}</figcaption></figure>
      <section v-if="record.gallery && record.gallery.length" id="screenshots" class="archive-gallery" aria-label="Project screenshots and artwork"><h2>Screens &amp; details</h2><nav v-if="record.gallery.length > 1" class="archive-gallery-index" aria-label="Jump to an image"><a v-for="(figure, index) in record.gallery" :key="figure[0]" :href="'#image-' + index" :aria-label="figure[1]"><img :src="'/static/archive/' + figure[0]" alt="" loading="lazy"/></a></nav><figure v-for="(figure, index) in record.gallery" :key="figure[0]" :id="'image-' + index" :class="{ 'archive-portrait': figure[2] === 'portrait' }"><a :href="'/static/archive/' + figure[0]"><img :src="'/static/archive/' + figure[0]" :alt="figure[1]" loading="lazy" decoding="async"/></a><figcaption>{{ figure[1] }} <a :href="'/static/archive/' + figure[0]">Open full size ↗</a></figcaption></figure></section>
      <div class="archive-article-columns">
        <aside class="archive-source"><h2>Dates &amp; sources</h2><p>{{ record.dateNote }}</p></aside>
        <div class="archive-prose"><p v-for="paragraph in record.paragraphs" :key="paragraph">{{ paragraph }}</p><blockquote v-if="record.excerpt">{{ record.excerpt }}<cite>From the original homepage</cite></blockquote>
          <div v-if="record.interactive === 'karya'" id="try-project" class="archive-karya"><h2>Three things for today</h2><p class="archive-caption">Choose three priorities. Your list is saved in this browser.</p><div v-for="(task, index) in tasks" :key="index" class="archive-task"><input :id="'task-done-' + index" type="checkbox" v-model="task.done" :aria-label="'Complete priority ' + (index + 1)" @change="saveTasks"/><input type="text" v-model="task.text" :aria-label="'Priority ' + (index + 1)" :class="{ 'is-done': task.done }" placeholder="Add a priority" maxlength="200" @input="saveTasks"/></div><p v-if="storageError" role="status" class="archive-caption">Browser storage is unavailable. Your list works here until you leave the page.</p></div>
        </div>
      </div>
      <section v-if="record.reading" class="archive-readings"><h2>The original notebook</h2><p>Tutorials as written in 2014–2015. The instructions may be out of date.</p><details v-for="entry in readings" :key="entry.title"><summary>{{ entry.title }}</summary><div class="archive-transcript" v-html="entry.html"/></details></section>
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
