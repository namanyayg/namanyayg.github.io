import Vue from 'vue'
import VueCompositionApi, { ref } from '@vue/composition-api'

Vue.use(VueCompositionApi)

export function useBlogPosts () {
  const posts = ref([])
  const RSS_URL = 'https://nmn.gl/blog/feed.xml'

  const parseMetrics = (entry) => {
    const metrics = entry.getElementsByTagName('social:metrics')[0]
    if (!metrics) return {}

    const viewsElement = metrics.getElementsByTagName('social:views')[0]
    const redditElement = metrics.getElementsByTagName('social:reddit')[0]
    const hackernewsElement = metrics.getElementsByTagName('social:hackernews')[0]

    return {
      views: viewsElement && viewsElement.textContent,
      redditVotes: redditElement && redditElement.textContent,
      hackernewsComments: hackernewsElement && hackernewsElement.textContent
    }
  }

  const parseEntry = (entry) => {
    const isFeatured = entry.getAttribute('meta:is_featured') === 'true'
    if (!isFeatured) return null

    const mediaContent = entry.getElementsByTagName('media:content')[0]
    const imageUrl = mediaContent ? mediaContent.getAttribute('url') : null

    return {
      id: entry.getElementsByTagName('id')[0].textContent,
      title: entry.getElementsByTagName('title')[0].textContent,
      link: entry.getElementsByTagName('link')[0].getAttribute('href'),
      date: entry.getElementsByTagName('published')[0].textContent,
      excerpt: entry.getElementsByTagName('summary')[0].textContent,
      image: imageUrl,
      ...parseMetrics(entry)
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(RSS_URL)
      const text = await response.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')
      const entries = xml.getElementsByTagName('entry')

      const parsedPosts = Array.from(entries)
        .map(parseEntry)
        .filter(post => post !== null)
        .slice(0, 3)

      posts.value = parsedPosts
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      posts.value = []
    }
  }

  return {
    posts,
    fetchPosts
  }
} 