const RSS_URL = 'https://nmn.gl/blog/feed.xml'

// Featured posts in display order
const FEATURED_POSTS = [
  {
    slug: 'ai-illiterate-programmers',
    image: null, // Will be fetched from RSS
    stats: {
      views: '1250000',
      redditVotes: '3500',
      hackernewsComments: '100'
    }
  },
  {
    slug: 'greatness',
    image: null, // Will be fetched from RSS
    stats: null // No stats for this post
  },
  {
    slug: 'ai-senior-developer',
    image: 'https://nmn.gl/blog/assets/ai-understand-senior-developer.png',
    stats: {
      hackernewsComments: '500'
    }
  }
]

export async function fetchBlogPosts () {
  try {
    const response = await fetch(RSS_URL)
    
    if (!response.ok) {
      console.warn('Failed to fetch blog posts')
      return []
    }

    const text = await response.text()
    const parser = new DOMParser()
    const xml = parser.parseFromString(text, 'text/xml')
    const entries = Array.from(xml.getElementsByTagName('entry'))
    
    return FEATURED_POSTS.map(featured => {
      const entry = entries.find(e => 
        e.getElementsByTagName('id')[0].textContent.includes(featured.slug)
      )
      
      if (!entry) return null
      
      const mediaContent = entry.getElementsByTagName('media:content')[0]
      const rssImage = mediaContent ? mediaContent.getAttribute('url') : null
      
      return {
        id: entry.getElementsByTagName('id')[0].textContent,
        title: entry.getElementsByTagName('title')[0].textContent,
        link: entry.getElementsByTagName('link')[0].getAttribute('href'),
        date: entry.getElementsByTagName('published')[0].textContent,
        excerpt: entry.getElementsByTagName('summary')[0].textContent,
        image: featured.image || rssImage,
        ...(featured.stats || {})
      }
    }).filter(Boolean)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}
