const RSS_URL = 'https://nmn.gl/blog/feed.xml'

// Stats for featured posts (only show stats for posts that have impressive metrics)
const POST_STATS = {
  'greatness': {
    // No stats - this is a personal story article
  },
  'ai-understand-senior-developer': {
    views: '500000',
    redditVotes: '3500',
    hackernewsComments: '100'
  },
  'ai-illiterate-programmers': {
    views: '1250000',
    redditVotes: '3500',
    hackernewsComments: '100'
  }
}

const getPostStats = (postId) => {
  // Extract slug from post ID (e.g., "https://nmn.gl/blog/vibe-coding-gambling" -> "vibe-coding-gambling")
  const slug = postId.split('/').pop()
  return POST_STATS[slug] || {}
}

const parseEntry = (entry) => {
  const mediaContent = entry.getElementsByTagName('media:content')[0]
  const imageUrl = mediaContent ? mediaContent.getAttribute('url') : null
  const postId = entry.getElementsByTagName('id')[0].textContent

  return {
    id: postId,
    title: entry.getElementsByTagName('title')[0].textContent,
    link: entry.getElementsByTagName('link')[0].getAttribute('href'),
    date: entry.getElementsByTagName('published')[0].textContent,
    excerpt: entry.getElementsByTagName('summary')[0].textContent,
    image: imageUrl,
    ...getPostStats(postId)
  }
}

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
    const entries = xml.getElementsByTagName('entry')
    
    const posts = Array.from(entries)
      .map(parseEntry)
      .filter(post => {
        // Only show posts that have stats defined
        const slug = post.id.split('/').pop()
        return POST_STATS[slug] !== undefined
      })
    
    // Custom ordering: ai-illiterate-programmers, greatness (center), ai-understand-senior-developer
    const desiredOrder = ['ai-illiterate-programmers', 'greatness', 'ai-understand-senior-developer']
    const orderedPosts = desiredOrder
      .map(slug => posts.find(post => post.id.includes(slug)))
      .filter(Boolean)
    
    return orderedPosts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}
