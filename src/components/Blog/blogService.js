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
  const title = entry.getElementsByTagName('title')[0].textContent
  const categoryElement = entry.getElementsByTagName('category')[0]
  const isFeatured = categoryElement &&
    categoryElement.getAttribute('term') === 'featured' &&
    categoryElement.getAttribute('scheme') === 'http://namanyayg.com/post-types'
  console.log(title, isFeatured, entry)
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

export async function fetchBlogPosts () {
  try {
    let allPosts = []
    let page = 1
    const maxPages = 10 // Safety limit to prevent infinite loops
    
    while (allPosts.length < 3 && page <= maxPages) {
      const pageUrl = page === 1 ? RSS_URL : `${RSS_URL}?page=${page}`
      const response = await fetch(pageUrl)
      
      if (!response.ok) {
        console.warn(`Failed to fetch page ${page}`)
        break
      }
  
      const text = await response.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(text, 'text/xml')
      const entries = xml.getElementsByTagName('entry')
      
      if (entries.length === 0) {
        // No more entries available
        break
      }
      
      const pagePosts = Array.from(entries)
        .map(parseEntry)
        .filter(post => post !== null)
      
      allPosts = allPosts.concat(pagePosts)
      page++
    }
    
    return allPosts.slice(0, 3)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}
