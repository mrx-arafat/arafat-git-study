export const categories = [
  {
    id: 1,
    number: '01',
    title: 'Get Started',
    topics: [
      { slug: 'what-is-git', title: 'What is git?' },
      { slug: 'install', title: 'Install' },
      { slug: 'git-init', title: 'git init' },
      { slug: 'git-status', title: 'git status' },
      { slug: 'git-add', title: 'git add' },
      { slug: 'git-commit', title: 'git commit' },
      { slug: 'vs-code-tips', title: 'VS Code Tips' },
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Remote',
    topics: [
      { slug: 'git-remote', title: 'git remote' },
      { slug: 'git-push', title: 'git push' },
      { slug: 'git-merge', title: 'git merge' },
      { slug: 'git-pull', title: 'git pull' },
      { slug: 'git-clone', title: 'git clone' },
      { slug: 'github-codespaces', title: 'GitHub Codespaces' },
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Collaboration',
    topics: [
      { slug: 'git-branch', title: 'git branch' },
      { slug: 'git-checkout', title: 'git checkout' },
      { slug: 'merge-conflicts', title: 'Merge Conflicts' },
      { slug: 'fork', title: 'Fork' },
      { slug: 'pull-request', title: 'Pull Request' },
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Advanced',
    topics: [
      { slug: 'git-reset', title: 'git reset' },
      { slug: 'git-revert', title: 'git revert' },
      { slug: 'git-commit-amend', title: 'git commit --amend' },
      { slug: 'git-stash', title: 'git stash' },
      { slug: 'git-rebase', title: 'git rebase' },
      { slug: 'squash', title: 'Squash' },
      { slug: 'github-actions', title: 'GitHub Actions' },
      { slug: 'advanced-git-tips', title: 'Advanced Git Tips' },
    ],
  },
]

export const getAllTopics = () => {
  return categories.flatMap((cat) =>
    cat.topics.map((topic) => ({
      ...topic,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  )
}

export const getTopicBySlug = (slug) => {
  for (const cat of categories) {
    const topic = cat.topics.find((t) => t.slug === slug)
    if (topic) {
      return {
        ...topic,
        categoryId: cat.id,
        categoryTitle: cat.title,
      }
    }
  }
  return null
}

export const getCategoryById = (id) => {
  return categories.find((cat) => cat.id === id)
}
