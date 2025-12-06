import worksData from '../Works/data'

// Extract testimonials from works data
const testimonials = Object.values(worksData)
  .filter(work => work.quote) // Only get works that have testimonials
  .map(work => ({
    content: work.quote.content,
    by: work.quote.by,
    project: {
      title: work.title,
      role: work.role
    }
  }))

export default testimonials 