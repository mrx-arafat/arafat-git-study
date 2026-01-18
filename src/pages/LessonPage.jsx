import { useParams, Link } from 'react-router-dom'
import { getTopicBySlug, categories } from '../data/categories'
import { getLessonBySlug } from '../data/lessons'

const LessonPage = () => {
  const { slug } = useParams()
  const topic = getTopicBySlug(slug)
  const lesson = getLessonBySlug(slug)

  if (!topic || !lesson) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Lesson Not Found</h1>
          <Link to="/" className="text-[#f5a623] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // Find current category and get navigation info
  const category = categories.find((c) => c.id === topic.categoryId)
  const currentIndex = category.topics.findIndex((t) => t.slug === slug)
  const prevTopic = currentIndex > 0 ? category.topics[currentIndex - 1] : null
  const nextTopic =
    currentIndex < category.topics.length - 1 ? category.topics[currentIndex + 1] : null

  // Find next category's first topic if at end of current category
  const categoryIndex = categories.findIndex((c) => c.id === topic.categoryId)
  const nextCategory = categoryIndex < categories.length - 1 ? categories[categoryIndex + 1] : null
  const nextCategoryFirstTopic = nextCategory ? nextCategory.topics[0] : null

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="bg-[#2a2a2a] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-[#f5a623] hover:text-[#ff6f3c] transition-colors font-bold"
            >
              ← Back to Home
            </Link>
            <span className="text-gray-400 text-sm">
              {category.title} • {currentIndex + 1}/{category.topics.length}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Category badge */}
        <div className="mb-4">
          <span className="bg-[#e85a5a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {category.title}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{lesson.title}</h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8">{lesson.description}</p>

        {/* Lesson content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div
            className="text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(lesson.content),
            }}
          />
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevTopic ? (
              <Link
                to={`/lesson/${prevTopic.slug}`}
                className="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors rounded-lg p-4 group"
              >
                <span className="text-gray-400 text-sm">Previous</span>
                <div className="text-white font-bold group-hover:text-[#f5a623] transition-colors">
                  ← {prevTopic.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextTopic ? (
              <Link
                to={`/lesson/${nextTopic.slug}`}
                className="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors rounded-lg p-4 text-right group"
              >
                <span className="text-gray-400 text-sm">Next</span>
                <div className="text-white font-bold group-hover:text-[#f5a623] transition-colors">
                  {nextTopic.title} →
                </div>
              </Link>
            ) : nextCategoryFirstTopic ? (
              <Link
                to={`/lesson/${nextCategoryFirstTopic.slug}`}
                className="flex-1 bg-[#e85a5a] hover:bg-[#d04a4a] transition-colors rounded-lg p-4 text-right group"
              >
                <span className="text-white/70 text-sm">Next Section: {nextCategory.title}</span>
                <div className="text-white font-bold">
                  {nextCategoryFirstTopic.title} →
                </div>
              </Link>
            ) : (
              <Link
                to="/"
                className="flex-1 bg-[#f5a623] hover:bg-[#e09510] transition-colors rounded-lg p-4 text-right"
              >
                <span className="text-black/70 text-sm">Complete!</span>
                <div className="text-black font-bold">Back to Home →</div>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// Simple markdown formatter
function formatMarkdown(content) {
  let html = content
    // Escape HTML
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre class="bg-gray-800 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm text-green-400">${code.trim()}</code></pre>`
    })
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-700 px-2 py-1 rounded text-[#f5a623] text-sm">$1</code>')
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean)
      if (cells.every((c) => c.trim().match(/^-+$/))) {
        return ''
      }
      const cellTags = cells.map((c) => `<td class="border border-gray-600 px-4 py-2">${c.trim()}</td>`).join('')
      return `<tr>${cellTags}</tr>`
    })
    // Lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-300">$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="my-4">')

  // Wrap in paragraph
  html = `<p class="my-4">${html}</p>`

  // Wrap tables
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table class="border-collapse border border-gray-600 my-6 w-full">$&</table>')

  // Wrap lists
  html = html.replace(/(<li[\s\S]*?<\/li>)+/g, '<ul class="list-disc my-4">$&</ul>')

  return html
}

export default LessonPage
