const defaults = {
  title: 'Namanyay Goel - Technology Product Entrepreneur, Founder, and Writer',
  description: 'Founder and writer with over 12 years of experience. Featured in New York Times, Futurism, Inc. Magazine, and many more. Writing about AI & building the future of software development.',
  image: '/static/202507-namanyay-interview.jpeg'
}
export function setPageMeta (title, description, path, image) {
  document.title = title || defaults.title
  const url = 'https://nmn.gl' + (path || '/')
  const values = { 'name:title': document.title, 'name:description': description || defaults.description, 'property:og:title': document.title, 'property:og:description': description || defaults.description, 'property:og:url': url, 'property:og:image': 'https://nmn.gl' + (image || defaults.image), 'name:twitter:title': document.title, 'name:twitter:description': description || defaults.description, 'name:twitter:url': url, 'name:twitter:image': 'https://nmn.gl' + (image || defaults.image) }
  Object.keys(values).forEach(key => { const attr = key.split(':')[0]; const actualName = key.slice(attr.length + 1); let element = document.head.querySelector('meta[' + attr + '="' + actualName + '"]'); if (!element) { element = document.createElement('meta'); element.setAttribute(attr, actualName); document.head.appendChild(element) } element.content = values[key] })
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
  canonical.href = url
}
