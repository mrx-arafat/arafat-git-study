import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

const TerminalHeader = () => {
  return (
    <div className="bg-[#161b22] rounded-t-xl border border-[#30363d] overflow-hidden">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
        </div>
        <span className="ml-4 text-[#8b949e] text-sm font-mono">~/arafat-git-study</span>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono">
        <div className="flex items-center gap-2 text-[#8b949e] mb-2">
          <span className="text-[#10b981]">$</span>
          <span>git learn --interactive</span>
          <span className="cursor-blink text-[#10b981]">▋</span>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Arafat Git Mastery
          </h1>
          <p className="text-[#8b949e] text-lg md:text-xl">
            <span className="text-[#6ee7b7]">→</span> Everything you need to know to master{' '}
            <span className="text-[#10b981] font-semibold">Git</span> &{' '}
            <span className="text-[#6ee7b7] font-semibold">GitHub</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const CategoryCard = ({ category, index }) => {
  const gradients = [
    'from-[#10b981] to-[#059669]',
    'from-[#6ee7b7] to-[#10b981]',
    'from-[#34d399] to-[#059669]',
    'from-[#047857] to-[#10b981]',
  ]

  return (
    <div className="group bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden hover-lift terminal-glow">
      {/* Card header with gradient accent */}
      <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`}></div>

      <div className="p-6">
        {/* Number and title row */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center shadow-lg`}>
            <span className="text-[#0d1117] font-bold text-sm font-mono">{category.number}</span>
          </div>
          <h3 className="text-white text-xl font-bold tracking-tight">{category.title}</h3>
        </div>

        {/* Topics list */}
        <ul className="space-y-2 mb-5">
          {category.topics.map((topic, topicIndex) => (
            <li key={topic.slug}>
              <Link
                to={`/lesson/${topic.slug}`}
                className="flex items-center gap-3 text-[#8b949e] hover:text-[#6ee7b7] transition-all duration-200 group/item py-1"
              >
                <span className="text-[#30363d] group-hover/item:text-[#10b981] transition-colors font-mono text-xs">
                  {String(topicIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-sm">{topic.title}</span>
                <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-[#10b981]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Start button */}
        <Link
          to={`/lesson/${category.topics[0].slug}`}
          className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradients[index % gradients.length]} text-[#0d1117] font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-[#10b981]/20`}
        >
          <span className="font-mono">$</span>
          <span>Start Learning</span>
        </Link>
      </div>
    </div>
  )
}

const StatsBar = () => {
  const stats = [
    { label: 'Categories', value: '04', icon: '📂' },
    { label: 'Lessons', value: '26', icon: '📖' },
    { label: 'Commands', value: '20+', icon: '⌨️' },
    { label: 'Level', value: 'All', icon: '🎯' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center hover:border-[#10b981]/50 transition-colors"
        >
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-[#6ee7b7] font-mono">{stat.value}</div>
          <div className="text-[#8b949e] text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#30363d] pt-8 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Center - Credit */}
        <div className="flex items-center gap-2 text-[#8b949e] text-sm">
          <span>Built with</span>
          <span className="text-[#10b981]">&#9825;</span>
          <span>by</span>
          <a
            href="https://github.com/mrx-arafat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ee7b7] hover:text-[#10b981] transition-colors font-semibold"
          >
            Arafat
          </a>
        </div>

        {/* Right side - Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mrx-arafat/arafat-git-study"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8b949e] hover:text-[#6ee7b7] transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-6 text-center">
        <p className="text-[#8b949e] text-xs font-mono">
          <span className="text-[#10b981]">$</span> echo "Happy Learning!" <span className="text-[#6ee7b7]">| git commit -m "master git"</span>
        </p>
      </div>
    </footer>
  )
}

const HomePage = () => {
  return (
    <div className="min-h-screen py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Terminal-style Header */}
        <div className="mb-12">
          <TerminalHeader />
        </div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Section title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot"></div>
          <h2 className="text-[#e6edf3] text-xl font-semibold">Learning Paths</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#30363d] to-transparent"></div>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#8b949e] text-sm font-mono bg-[#161b22] px-4 py-2 rounded-lg border border-[#30363d]">
            <span className="text-[#10b981]">tip:</span>
            <span>Start with "Get Started" if you're new to Git</span>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
