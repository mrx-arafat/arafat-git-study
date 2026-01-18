export const lessons = {
  // Get Started
  'what-is-git': {
    title: 'What is Git?',
    description: 'Understanding version control and why Git matters',
    content: `
# What is Git?

Git is a **distributed version control system** that tracks changes in your code over time. It was created by Linus Torvalds in 2005 for Linux kernel development.

## Why Use Git?

- **Track Changes**: Every modification is recorded with who made it and when
- **Collaboration**: Multiple developers can work on the same project
- **Backup**: Your code history is preserved and recoverable
- **Branching**: Work on features without affecting the main code

## Key Concepts

### Repository (Repo)
A folder that Git is tracking. Contains all your project files and the complete history of changes.

### Commit
A snapshot of your code at a specific point in time. Like a save point in a video game.

### Branch
A parallel version of your code. Allows you to work on features independently.

## Git vs GitHub

| Git | GitHub |
|-----|--------|
| Version control software | Hosting service for Git repos |
| Runs locally on your computer | Cloud-based platform |
| Free and open source | Free and paid plans |
| Command line tool | Web interface + features |

\`\`\`bash
# Check if Git is installed
git --version
\`\`\`

Git is the foundation of modern software development. Master it, and you'll be a better developer.
    `,
  },
  'install': {
    title: 'Installing Git',
    description: 'How to install Git on your system',
    content: `
# Installing Git

Get Git running on your machine in minutes.

## Windows

### Option 1: Git for Windows (Recommended)
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer
3. Use default settings (or customize as needed)
4. Open Git Bash to verify

### Option 2: Using winget
\`\`\`powershell
winget install Git.Git
\`\`\`

## macOS

### Option 1: Xcode Command Line Tools
\`\`\`bash
xcode-select --install
\`\`\`

### Option 2: Homebrew
\`\`\`bash
brew install git
\`\`\`

## Linux

### Ubuntu/Debian
\`\`\`bash
sudo apt update
sudo apt install git
\`\`\`

### Fedora
\`\`\`bash
sudo dnf install git
\`\`\`

### Arch Linux
\`\`\`bash
sudo pacman -S git
\`\`\`

## Verify Installation

\`\`\`bash
git --version
# Should output: git version 2.x.x
\`\`\`

## Initial Configuration

Set your identity (required for commits):

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

Check your configuration:
\`\`\`bash
git config --list
\`\`\`

You're now ready to start using Git!
    `,
  },
  'git-init': {
    title: 'git init',
    description: 'Initialize a new Git repository',
    content: `
# git init

The \`git init\` command creates a new Git repository.

## Basic Usage

\`\`\`bash
# Navigate to your project folder
cd my-project

# Initialize Git
git init
\`\`\`

This creates a hidden \`.git\` folder containing all Git tracking data.

## What Happens

When you run \`git init\`:
1. A \`.git\` directory is created
2. Git starts tracking the folder
3. You're on the default branch (usually \`main\` or \`master\`)

## Initialize with a Specific Branch Name

\`\`\`bash
git init -b main
# or
git init --initial-branch=main
\`\`\`

## Check Status After Init

\`\`\`bash
git status
# On branch main
# No commits yet
# nothing to commit
\`\`\`

## Initialize in a New Directory

\`\`\`bash
git init my-new-project
cd my-new-project
\`\`\`

## The .git Folder

The \`.git\` folder contains:
- \`HEAD\` - Points to current branch
- \`config\` - Repository configuration
- \`objects/\` - All versioned content
- \`refs/\` - Pointers to commits (branches, tags)

**Warning**: Never manually edit the \`.git\` folder unless you know what you're doing!

## Remove Git from a Project

\`\`\`bash
rm -rf .git
\`\`\`

This removes all Git history. The files remain, but Git tracking is gone.
    `,
  },
  'git-status': {
    title: 'git status',
    description: 'Check the status of your repository',
    content: `
# git status

The \`git status\` command shows the state of your working directory and staging area.

## Basic Usage

\`\`\`bash
git status
\`\`\`

## Understanding the Output

### Clean Working Directory
\`\`\`
On branch main
nothing to commit, working tree clean
\`\`\`

### Untracked Files
\`\`\`
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        newfile.txt
\`\`\`

### Staged Changes
\`\`\`
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   newfile.txt
\`\`\`

### Modified Files
\`\`\`
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   existingfile.txt
\`\`\`

## Short Status

For a compact view:

\`\`\`bash
git status -s
# or
git status --short
\`\`\`

Output:
\`\`\`
 M modified-file.txt      # Modified, not staged
M  staged-file.txt        # Modified, staged
A  new-file.txt           # New file, staged
?? untracked-file.txt     # Untracked
\`\`\`

## Show Branch Info

\`\`\`bash
git status -sb
\`\`\`

Output:
\`\`\`
## main...origin/main
 M file.txt
\`\`\`

## Pro Tips

- Run \`git status\` frequently - it's your compass
- Use it before and after each Git command
- The output tells you exactly what to do next
    `,
  },
  'git-add': {
    title: 'git add',
    description: 'Stage changes for commit',
    content: `
# git add

The \`git add\` command stages changes for the next commit.

## Basic Usage

\`\`\`bash
# Stage a specific file
git add filename.txt

# Stage multiple files
git add file1.txt file2.txt

# Stage all changes in current directory
git add .

# Stage all changes in the entire repo
git add -A
# or
git add --all
\`\`\`

## The Staging Area

Think of it as a "loading dock" for your next commit:

\`\`\`
Working Directory → Staging Area → Repository
     (edit)           (git add)     (git commit)
\`\`\`

## Stage by Pattern

\`\`\`bash
# All .js files
git add *.js

# All files in a folder
git add src/

# All .css files in any subfolder
git add **/*.css
\`\`\`

## Interactive Staging

\`\`\`bash
git add -p
# or
git add --patch
\`\`\`

This lets you stage parts of a file. Options:
- \`y\` - stage this hunk
- \`n\` - don't stage this hunk
- \`s\` - split into smaller hunks
- \`q\` - quit

## Unstage a File

\`\`\`bash
git restore --staged filename.txt
# or (older syntax)
git reset HEAD filename.txt
\`\`\`

## Stage Deleted Files

\`\`\`bash
git add -u
# Stages modifications and deletions (not new files)
\`\`\`

## Check What's Staged

\`\`\`bash
git diff --staged
\`\`\`

## Pro Tips

- Stage related changes together for clean commits
- Use \`git add -p\` for precise control
- Review staged changes before committing
    `,
  },
  'git-commit': {
    title: 'git commit',
    description: 'Save your staged changes',
    content: `
# git commit

The \`git commit\` command saves your staged changes to the repository history.

## Basic Usage

\`\`\`bash
# Commit with a message
git commit -m "Add new feature"

# Open editor for longer message
git commit
\`\`\`

## Commit Message Guidelines

Good commit messages:
\`\`\`
feat: add user authentication
fix: resolve login timeout issue
docs: update API documentation
refactor: simplify database queries
\`\`\`

Bad commit messages:
\`\`\`
fixed stuff
update
asdfasdf
\`\`\`

## Skip Staging (Direct Commit)

\`\`\`bash
git commit -am "Message"
# Stages all tracked files AND commits
# Does NOT include new untracked files
\`\`\`

## Multi-line Commit Messages

\`\`\`bash
git commit -m "Title" -m "Body paragraph" -m "Footer"
\`\`\`

Or use your editor:
\`\`\`bash
git commit
\`\`\`

## View Commit History

\`\`\`bash
# Basic log
git log

# One line per commit
git log --oneline

# With graph
git log --oneline --graph

# Last 5 commits
git log -5
\`\`\`

## Empty Commits

\`\`\`bash
git commit --allow-empty -m "Trigger CI build"
\`\`\`

## Commit Best Practices

1. **Commit often** - Small, focused commits
2. **Write clear messages** - Future you will thank you
3. **One logical change per commit** - Easy to review and revert
4. **Test before committing** - Don't commit broken code

## Conventional Commits

A popular format:
\`\`\`
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
\`\`\`

Types: \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`
    `,
  },
  'vs-code-tips': {
    title: 'VS Code Tips',
    description: 'Git integration in Visual Studio Code',
    content: `
# VS Code Git Tips

Visual Studio Code has excellent built-in Git support.

## Source Control Panel

- Click the branch icon in the sidebar (or \`Ctrl+Shift+G\`)
- See all changed files at a glance
- Stage/unstage with one click

## Key Features

### Stage Changes
- Click \`+\` next to a file to stage
- Click \`+\` at the top to stage all
- Click \`-\` to unstage

### View Diffs
- Click any changed file to see the diff
- Inline diff view shows additions/deletions

### Commit
1. Write message in the text box
2. Click checkmark or \`Ctrl+Enter\`

## Useful Extensions

### GitLens (Essential)
- See who changed each line (blame)
- Rich commit history
- Compare branches

### Git Graph
- Visual branch graph
- Easy branch management
- Interactive rebase

### Git History
- View file history
- Compare commits
- Search commits

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Source Control | \`Ctrl+Shift+G\` |
| Stage selected | \`Ctrl+Enter\` (in diff) |
| Open Terminal | \`Ctrl+\`\` |

## Settings to Enable

\`\`\`json
{
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "editor.formatOnSave": true
}
\`\`\`

## Terminal Integration

- Integrated terminal: \`Ctrl+\`\`
- Run Git commands directly
- Best of both worlds!

## Pro Tips

1. Use the Command Palette (\`Ctrl+Shift+P\`) and type "Git"
2. Right-click files for Git actions
3. Use the Timeline view for file history
    `,
  },
  // Remote
  'git-remote': {
    title: 'git remote',
    description: 'Manage remote repository connections',
    content: `
# git remote

The \`git remote\` command manages connections to remote repositories.

## View Remotes

\`\`\`bash
# List remote names
git remote

# List with URLs
git remote -v
\`\`\`

Example output:
\`\`\`
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)
\`\`\`

## Add a Remote

\`\`\`bash
git remote add origin https://github.com/user/repo.git
\`\`\`

Common remote names:
- \`origin\` - Your fork or main repo
- \`upstream\` - Original repo (if you forked)

## Remove a Remote

\`\`\`bash
git remote remove origin
# or
git remote rm origin
\`\`\`

## Rename a Remote

\`\`\`bash
git remote rename old-name new-name
\`\`\`

## Change Remote URL

\`\`\`bash
git remote set-url origin https://github.com/user/new-repo.git
\`\`\`

## View Remote Details

\`\`\`bash
git remote show origin
\`\`\`

Shows:
- Fetch/push URLs
- Remote branches
- Local branch tracking

## HTTPS vs SSH

**HTTPS:**
\`\`\`bash
git remote add origin https://github.com/user/repo.git
\`\`\`

**SSH (recommended):**
\`\`\`bash
git remote add origin git@github.com:user/repo.git
\`\`\`

## Multiple Remotes

\`\`\`bash
# Add upstream for a fork
git remote add upstream https://github.com/original/repo.git

# Fetch from upstream
git fetch upstream

# Merge upstream changes
git merge upstream/main
\`\`\`

## Pro Tips

- Use SSH for password-free pushing
- Keep origin for your repo, upstream for the original
- \`git remote -v\` is your friend for debugging
    `,
  },
  'git-push': {
    title: 'git push',
    description: 'Upload local commits to a remote repository',
    content: `
# git push

The \`git push\` command uploads your local commits to a remote repository.

## Basic Usage

\`\`\`bash
# Push to origin (default remote)
git push

# Push to specific remote and branch
git push origin main
\`\`\`

## First Push (Set Upstream)

\`\`\`bash
git push -u origin main
# or
git push --set-upstream origin main
\`\`\`

After this, you can just use \`git push\`.

## Push a New Branch

\`\`\`bash
git push -u origin feature-branch
\`\`\`

## Force Push (Use Carefully!)

\`\`\`bash
# Overwrite remote history
git push --force
# or
git push -f

# Safer force push
git push --force-with-lease
\`\`\`

**Warning**: Force push can destroy others' work!

## Push All Branches

\`\`\`bash
git push --all origin
\`\`\`

## Push Tags

\`\`\`bash
# Push a specific tag
git push origin v1.0.0

# Push all tags
git push --tags
\`\`\`

## Delete Remote Branch

\`\`\`bash
git push origin --delete branch-name
# or
git push origin :branch-name
\`\`\`

## Common Errors

### "Updates were rejected"
\`\`\`bash
# Pull first, then push
git pull origin main
git push origin main
\`\`\`

### "No upstream branch"
\`\`\`bash
git push -u origin branch-name
\`\`\`

## Push Workflow

\`\`\`
1. Make changes
2. git add .
3. git commit -m "message"
4. git push
\`\`\`

## Pro Tips

- Always pull before push to avoid conflicts
- Use \`--force-with-lease\` instead of \`--force\`
- Set up SSH for smooth pushing
    `,
  },
  'git-merge': {
    title: 'git merge',
    description: 'Combine branches together',
    content: `
# git merge

The \`git merge\` command combines the history of two branches.

## Basic Usage

\`\`\`bash
# Switch to the target branch
git checkout main

# Merge the feature branch
git merge feature-branch
\`\`\`

## Merge Types

### Fast-Forward Merge
When main hasn't changed since you branched:
\`\`\`bash
git merge feature-branch
# Updating abc123..def456
# Fast-forward
\`\`\`

### Three-Way Merge
When both branches have new commits:
\`\`\`bash
git merge feature-branch
# Creates a merge commit
\`\`\`

### No Fast-Forward

\`\`\`bash
git merge --no-ff feature-branch
# Always creates a merge commit
\`\`\`

## Merge with Message

\`\`\`bash
git merge feature-branch -m "Merge feature X into main"
\`\`\`

## Abort a Merge

\`\`\`bash
git merge --abort
\`\`\`

## Squash Merge

Combine all commits into one:
\`\`\`bash
git merge --squash feature-branch
git commit -m "Add feature X"
\`\`\`

## Handling Merge Conflicts

When Git can't auto-merge:

1. Open conflicted files
2. Look for conflict markers:
\`\`\`
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> feature-branch
\`\`\`
3. Edit to resolve
4. Stage and commit:
\`\`\`bash
git add .
git commit -m "Resolve merge conflicts"
\`\`\`

## View Merge Status

\`\`\`bash
# See branches merged into current
git branch --merged

# See unmerged branches
git branch --no-merged
\`\`\`

## Pro Tips

- Merge frequently to avoid big conflicts
- Use \`--no-ff\` to preserve branch history
- Always test after merging
    `,
  },
  'git-pull': {
    title: 'git pull',
    description: 'Fetch and merge changes from remote',
    content: `
# git pull

The \`git pull\` command fetches and merges changes from a remote repository.

## Basic Usage

\`\`\`bash
# Pull from tracked remote
git pull

# Pull from specific remote and branch
git pull origin main
\`\`\`

## What git pull Does

\`\`\`
git pull = git fetch + git merge
\`\`\`

1. **Fetch**: Download commits from remote
2. **Merge**: Integrate them into your branch

## Pull with Rebase

Instead of merging, rebase your commits:

\`\`\`bash
git pull --rebase
# or
git pull -r
\`\`\`

This creates a cleaner, linear history.

## Set Rebase as Default

\`\`\`bash
git config --global pull.rebase true
\`\`\`

## Pull Strategies

\`\`\`bash
# Merge (default)
git pull --no-rebase

# Rebase
git pull --rebase

# Fast-forward only
git pull --ff-only
\`\`\`

## Handling Conflicts

If pull causes conflicts:

\`\`\`bash
# Fix conflicts in files
# Then:
git add .
git commit -m "Resolve conflicts"

# Or with rebase:
git add .
git rebase --continue
\`\`\`

## Abort a Pull

\`\`\`bash
# If merge:
git merge --abort

# If rebase:
git rebase --abort
\`\`\`

## Fetch vs Pull

| Command | Action |
|---------|--------|
| \`git fetch\` | Download only, don't merge |
| \`git pull\` | Download and merge |

\`\`\`bash
# Safe way: fetch first, review, then merge
git fetch origin
git log origin/main
git merge origin/main
\`\`\`

## Pro Tips

- Pull before starting new work
- Use \`--rebase\` for cleaner history
- Fetch first if you want to review changes
    `,
  },
  'git-clone': {
    title: 'git clone',
    description: 'Copy a remote repository locally',
    content: `
# git clone

The \`git clone\` command creates a local copy of a remote repository.

## Basic Usage

\`\`\`bash
git clone https://github.com/user/repo.git
\`\`\`

## Clone to Specific Folder

\`\`\`bash
git clone https://github.com/user/repo.git my-folder
\`\`\`

## Clone with SSH

\`\`\`bash
git clone git@github.com:user/repo.git
\`\`\`

## Shallow Clone

Clone only recent history (faster):

\`\`\`bash
# Last commit only
git clone --depth 1 https://github.com/user/repo.git

# Last 10 commits
git clone --depth 10 https://github.com/user/repo.git
\`\`\`

## Clone Specific Branch

\`\`\`bash
git clone -b develop https://github.com/user/repo.git
\`\`\`

## Clone Without Checkout

\`\`\`bash
git clone --no-checkout https://github.com/user/repo.git
\`\`\`

## What Clone Creates

\`\`\`
my-repo/
├── .git/          # Git database
├── README.md      # Project files
├── src/
└── ...
\`\`\`

## Clone Sets Up Remote

After cloning:
\`\`\`bash
git remote -v
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)
\`\`\`

## Clone a Fork Workflow

\`\`\`bash
# 1. Fork on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USER/repo.git

# 3. Add upstream
git remote add upstream https://github.com/ORIGINAL/repo.git
\`\`\`

## Mirror Clone

Create an exact copy:
\`\`\`bash
git clone --mirror https://github.com/user/repo.git
\`\`\`

## Pro Tips

- Use SSH for repositories you'll push to
- Use \`--depth 1\` for large repos you just need the code from
- Clone creates the directory - no need to \`mkdir\` first
    `,
  },
  'github-codespaces': {
    title: 'GitHub Codespaces',
    description: 'Cloud development environments',
    content: `
# GitHub Codespaces

Codespaces provides instant, cloud-hosted development environments.

## What is Codespaces?

- Full VS Code in your browser
- Pre-configured development environment
- Your code runs in the cloud
- Access from any device

## Creating a Codespace

### From GitHub
1. Go to any repository
2. Click green "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"

### From VS Code
1. Install GitHub Codespaces extension
2. Command Palette: "Codespaces: Create New Codespace"

## Configuration

Create \`.devcontainer/devcontainer.json\`:

\`\`\`json
{
  "name": "My Project",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "features": {
    "ghcr.io/devcontainers/features/git:1": {}
  },
  "postCreateCommand": "npm install",
  "forwardPorts": [3000],
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
\`\`\`

## Key Features

### Port Forwarding
- Automatic for common ports
- Make ports public or private
- Share running apps with teammates

### Dotfiles
- Sync your personal dotfiles
- Consistent environment everywhere
- Settings → Codespaces → Dotfiles

### Secrets
- Store environment variables securely
- Available in all your codespaces
- Settings → Codespaces → Secrets

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Command Palette | \`Ctrl+Shift+P\` |
| Terminal | \`Ctrl+\`\` |
| File Search | \`Ctrl+P\` |

## Pricing

- Free tier: 60 hours/month
- Included with GitHub Pro
- Billed per hour for overage

## Pro Tips

- Use prebuilds for faster startup
- Configure devcontainer for your project
- Codespace stops after 30min idle
    `,
  },
  // Collaboration
  'git-branch': {
    title: 'git branch',
    description: 'Create and manage branches',
    content: `
# git branch

The \`git branch\` command creates, lists, and manages branches.

## List Branches

\`\`\`bash
# Local branches
git branch

# Remote branches
git branch -r

# All branches
git branch -a
\`\`\`

## Create a Branch

\`\`\`bash
git branch feature-name
\`\`\`

## Create and Switch

\`\`\`bash
git checkout -b feature-name
# or (modern)
git switch -c feature-name
\`\`\`

## Delete a Branch

\`\`\`bash
# Delete local branch (safe)
git branch -d feature-name

# Force delete
git branch -D feature-name

# Delete remote branch
git push origin --delete feature-name
\`\`\`

## Rename a Branch

\`\`\`bash
# Rename current branch
git branch -m new-name

# Rename specific branch
git branch -m old-name new-name
\`\`\`

## View Branch Info

\`\`\`bash
# Last commit on each branch
git branch -v

# Branches merged into current
git branch --merged

# Branches not merged
git branch --no-merged
\`\`\`

## Track Remote Branch

\`\`\`bash
git branch --set-upstream-to=origin/main main
# or
git branch -u origin/main
\`\`\`

## Branching Strategies

### Feature Branches
\`\`\`
main
  └── feature/user-auth
  └── feature/payment
  └── bugfix/login-error
\`\`\`

### Git Flow
\`\`\`
main
  └── develop
        └── feature/x
        └── release/1.0
  └── hotfix/urgent
\`\`\`

## Branch Naming Conventions

\`\`\`
feature/add-login
bugfix/fix-header
hotfix/security-patch
release/v1.2.0
\`\`\`

## Pro Tips

- Keep branches focused and short-lived
- Delete merged branches
- Use descriptive names
    `,
  },
  'git-checkout': {
    title: 'git checkout',
    description: 'Switch branches and restore files',
    content: `
# git checkout

The \`git checkout\` command switches branches and restores files.

## Switch Branches

\`\`\`bash
git checkout branch-name
\`\`\`

## Create and Switch

\`\`\`bash
git checkout -b new-branch
\`\`\`

## Modern Alternative: git switch

\`\`\`bash
# Switch
git switch branch-name

# Create and switch
git switch -c new-branch
\`\`\`

## Restore a File

\`\`\`bash
# Discard changes in working directory
git checkout -- filename.txt

# Modern alternative
git restore filename.txt
\`\`\`

## Checkout Specific Commit

\`\`\`bash
git checkout abc1234
# You're now in "detached HEAD" state
\`\`\`

## Checkout File from Another Branch

\`\`\`bash
git checkout other-branch -- filename.txt
\`\`\`

## Checkout Remote Branch

\`\`\`bash
# Creates local tracking branch
git checkout -b local-name origin/remote-branch
# or
git checkout --track origin/remote-branch
\`\`\`

## Checkout Previous Branch

\`\`\`bash
git checkout -
# Switches to the last branch you were on
\`\`\`

## Detached HEAD

When you checkout a commit (not a branch):
\`\`\`bash
git checkout abc1234
# HEAD detached at abc1234
\`\`\`

To save work from detached HEAD:
\`\`\`bash
git checkout -b save-my-work
\`\`\`

## checkout vs switch vs restore

| Command | Purpose |
|---------|---------|
| \`git checkout\` | Does everything (legacy) |
| \`git switch\` | Switch branches only |
| \`git restore\` | Restore files only |

## Pro Tips

- Use \`git switch\` and \`git restore\` for clarity
- \`checkout -\` is great for toggling between branches
- Be careful with \`checkout --\` - it discards changes!
    `,
  },
  'merge-conflicts': {
    title: 'Merge Conflicts',
    description: 'Resolve conflicts when merging branches',
    content: `
# Merge Conflicts

Conflicts occur when Git can't automatically merge changes.

## Why Conflicts Happen

- Same lines changed in both branches
- File deleted in one branch, modified in another
- Incompatible changes to the same code

## Conflict Markers

\`\`\`
<<<<<<< HEAD
Your changes (current branch)
=======
Their changes (incoming branch)
>>>>>>> feature-branch
\`\`\`

## Resolving Conflicts

### Step 1: Find Conflicted Files
\`\`\`bash
git status
# Both modified: filename.txt
\`\`\`

### Step 2: Open and Edit
Choose what to keep:
- Keep your changes
- Keep their changes
- Keep both
- Write something new

### Step 3: Remove Markers
Delete \`<<<<<<<\`, \`=======\`, and \`>>>>>>>\` lines.

### Step 4: Stage and Commit
\`\`\`bash
git add filename.txt
git commit -m "Resolve merge conflict"
\`\`\`

## Abort Merge

\`\`\`bash
git merge --abort
\`\`\`

## Using VS Code

1. Conflicted files marked in Source Control
2. Click file to see conflict
3. Use buttons: "Accept Current", "Accept Incoming", "Accept Both"
4. Stage and commit

## Using Command Line

\`\`\`bash
# Choose ours (current branch)
git checkout --ours filename.txt

# Choose theirs (incoming branch)
git checkout --theirs filename.txt
\`\`\`

## Conflict Prevention

1. Pull frequently
2. Keep branches short-lived
3. Communicate with team
4. Break up large files

## Merge Tools

\`\`\`bash
# Use configured merge tool
git mergetool

# Configure a tool
git config --global merge.tool vscode
\`\`\`

## Pro Tips

- Don't panic - conflicts are normal
- Read both versions carefully
- Test after resolving
- Commit with a descriptive message
    `,
  },
  'fork': {
    title: 'Fork',
    description: 'Create your own copy of a repository',
    content: `
# Fork

A fork is your personal copy of someone else's repository.

## Why Fork?

- Contribute to open source
- Experiment without affecting original
- Create your own version
- Propose changes via Pull Request

## How to Fork

### On GitHub
1. Go to the repository
2. Click "Fork" button (top right)
3. Choose your account
4. Wait for copy to complete

## Clone Your Fork

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/repo.git
cd repo
\`\`\`

## Add Upstream Remote

\`\`\`bash
git remote add upstream https://github.com/ORIGINAL-OWNER/repo.git
git remote -v
# origin    https://github.com/YOUR-USERNAME/repo.git
# upstream  https://github.com/ORIGINAL-OWNER/repo.git
\`\`\`

## Keep Fork Updated

\`\`\`bash
# Fetch upstream changes
git fetch upstream

# Switch to main
git checkout main

# Merge upstream
git merge upstream/main

# Push to your fork
git push origin main
\`\`\`

## Fork Workflow

\`\`\`
1. Fork the repo
2. Clone your fork
3. Create a branch
4. Make changes
5. Push to your fork
6. Open Pull Request
\`\`\`

## Fork vs Clone

| Fork | Clone |
|------|-------|
| Copy on GitHub | Copy on your computer |
| Linked to original | Independent |
| Can submit PRs | Can't submit PRs directly |

## Sync Fork (GitHub UI)

1. Go to your fork on GitHub
2. Click "Sync fork"
3. Click "Update branch"

## Delete a Fork

1. Go to fork Settings
2. Scroll to Danger Zone
3. Click "Delete this repository"

## Pro Tips

- Always work on branches, not main
- Keep your fork synced regularly
- Reference issues in commits: "Fixes #123"
    `,
  },
  'pull-request': {
    title: 'Pull Request',
    description: 'Propose changes to a repository',
    content: `
# Pull Request

A Pull Request (PR) proposes changes and requests review.

## Creating a PR

### On GitHub
1. Push your branch to GitHub
2. Go to the repository
3. Click "Compare & pull request"
4. Fill in title and description
5. Click "Create pull request"

### Using GitHub CLI
\`\`\`bash
gh pr create --title "Add feature" --body "Description"
\`\`\`

## PR Components

### Title
\`\`\`
feat: add user authentication
fix: resolve login timeout issue
\`\`\`

### Description
\`\`\`markdown
## Summary
Brief description of changes

## Changes
- Added login form
- Implemented JWT tokens

## Testing
How to test this PR

## Screenshots
If applicable
\`\`\`

## PR Workflow

\`\`\`
1. Create branch
2. Make commits
3. Push branch
4. Open PR
5. Request review
6. Address feedback
7. Get approved
8. Merge
\`\`\`

## Review a PR

\`\`\`bash
# Fetch and checkout PR locally
gh pr checkout 123

# Or manually
git fetch origin pull/123/head:pr-123
git checkout pr-123
\`\`\`

## PR Commands

\`\`\`bash
# List PRs
gh pr list

# View PR
gh pr view 123

# Merge PR
gh pr merge 123

# Close PR
gh pr close 123
\`\`\`

## Merge Options

1. **Merge commit** - All commits + merge commit
2. **Squash and merge** - One commit
3. **Rebase and merge** - Linear history

## Draft PRs

- Mark as "Draft" for work in progress
- Convert to ready when done
- Great for early feedback

## Pro Tips

- Keep PRs small and focused
- Write clear descriptions
- Reference issues: "Closes #123"
- Respond to all feedback
- Use draft PRs for WIP
    `,
  },
  // Advanced
  'git-reset': {
    title: 'git reset',
    description: 'Undo commits and unstage changes',
    content: `
# git reset

The \`git reset\` command undoes commits and unstages changes.

## Three Modes

### --soft
Move HEAD, keep changes staged:
\`\`\`bash
git reset --soft HEAD~1
\`\`\`

### --mixed (default)
Move HEAD, unstage changes, keep in working directory:
\`\`\`bash
git reset HEAD~1
git reset --mixed HEAD~1
\`\`\`

### --hard
Move HEAD, discard all changes:
\`\`\`bash
git reset --hard HEAD~1
\`\`\`

**Warning**: \`--hard\` permanently deletes uncommitted changes!

## Common Uses

### Unstage a File
\`\`\`bash
git reset HEAD filename.txt
# or modern:
git restore --staged filename.txt
\`\`\`

### Undo Last Commit (Keep Changes)
\`\`\`bash
git reset --soft HEAD~1
\`\`\`

### Undo Last 3 Commits
\`\`\`bash
git reset HEAD~3
\`\`\`

### Reset to Specific Commit
\`\`\`bash
git reset --hard abc1234
\`\`\`

### Reset to Remote State
\`\`\`bash
git reset --hard origin/main
\`\`\`

## Visual Comparison

\`\`\`
                    --soft    --mixed   --hard
HEAD                  ✓          ✓         ✓
Staging Area          ✗          ✓         ✓
Working Directory     ✗          ✗         ✓

✓ = Changed
✗ = Unchanged
\`\`\`

## Recover from Reset

If you accidentally reset:
\`\`\`bash
git reflog
# Find the commit hash
git reset --hard abc1234
\`\`\`

## reset vs revert

| reset | revert |
|-------|--------|
| Rewrites history | Adds new commit |
| Use locally | Safe for shared branches |
| Can lose commits | Preserves history |

## Pro Tips

- Never reset pushed commits on shared branches
- Use \`--soft\` to recommit differently
- Check \`git reflog\` if you mess up
    `,
  },
  'git-revert': {
    title: 'git revert',
    description: 'Undo commits safely with a new commit',
    content: `
# git revert

The \`git revert\` command undoes a commit by creating a new commit.

## Basic Usage

\`\`\`bash
git revert abc1234
\`\`\`

This creates a new commit that undoes the changes from abc1234.

## Revert Latest Commit

\`\`\`bash
git revert HEAD
\`\`\`

## Revert Multiple Commits

\`\`\`bash
# Revert range (oldest..newest)
git revert abc1234..def5678

# Revert multiple specific commits
git revert abc1234 def5678 ghi9012
\`\`\`

## Revert Without Committing

Stage changes but don't commit:
\`\`\`bash
git revert --no-commit abc1234
# or
git revert -n abc1234
\`\`\`

Then commit when ready:
\`\`\`bash
git commit -m "Revert multiple commits"
\`\`\`

## Revert a Merge Commit

\`\`\`bash
git revert -m 1 abc1234
# -m 1 specifies to keep the first parent (main branch)
\`\`\`

## Abort Revert

\`\`\`bash
git revert --abort
\`\`\`

## Continue After Conflict

\`\`\`bash
# Fix conflicts, then:
git add .
git revert --continue
\`\`\`

## revert vs reset

| revert | reset |
|--------|-------|
| Creates new commit | Removes commits |
| Safe for shared branches | Rewrites history |
| Preserves history | Can lose history |
| Use for pushed commits | Use for local commits |

## When to Use revert

- Undoing changes on shared branches
- When you need to preserve history
- Reverting specific commits (not recent ones)
- In production hotfixes

## Pro Tips

- Use revert for pushed commits
- Use reset for local commits
- Revert can be reverted too!
- Always test after reverting
    `,
  },
  'git-commit-amend': {
    title: 'git commit --amend',
    description: 'Modify the last commit',
    content: `
# git commit --amend

The \`--amend\` flag modifies the last commit.

## Change Commit Message

\`\`\`bash
git commit --amend -m "New message"
\`\`\`

Or open editor:
\`\`\`bash
git commit --amend
\`\`\`

## Add Forgotten Files

\`\`\`bash
git add forgotten-file.txt
git commit --amend --no-edit
\`\`\`

\`--no-edit\` keeps the original message.

## Remove a File from Last Commit

\`\`\`bash
git reset HEAD~1 -- file-to-remove.txt
git commit --amend --no-edit
\`\`\`

## Change Author

\`\`\`bash
git commit --amend --author="New Name <email@example.com>"
\`\`\`

## Change Date

\`\`\`bash
git commit --amend --date="2024-01-15 10:00:00"
\`\`\`

## How It Works

Amend creates a **new commit** with a new hash:
\`\`\`
Before: A - B - C (HEAD)
After:  A - B - C' (HEAD)
        (C is replaced by C')
\`\`\`

## Warning: Pushed Commits

If you've pushed the commit:
\`\`\`bash
git commit --amend
git push --force-with-lease
\`\`\`

**Only do this on your own branches!**

## Amend Without Changing Anything

Useful for re-triggering CI:
\`\`\`bash
git commit --amend --no-edit
git push --force-with-lease
\`\`\`

## Best Practices

- Only amend unpushed commits
- Use \`--force-with-lease\` not \`--force\`
- Don't amend commits others have pulled
- Consider \`git revert\` for shared history

## Pro Tips

- Great for fixing typos in commit messages
- Use \`--no-edit\` when only adding files
- Combine with \`git add -p\` for precise amendments
    `,
  },
  'git-stash': {
    title: 'git stash',
    description: 'Temporarily save uncommitted changes',
    content: `
# git stash

The \`git stash\` command temporarily saves your uncommitted changes.

## Basic Usage

\`\`\`bash
# Save changes
git stash

# Restore changes
git stash pop
\`\`\`

## Stash with Message

\`\`\`bash
git stash push -m "Work in progress on feature X"
\`\`\`

## List Stashes

\`\`\`bash
git stash list
# stash@{0}: WIP on main: abc1234 Last commit message
# stash@{1}: On main: Work in progress
\`\`\`

## Apply vs Pop

\`\`\`bash
# Apply and remove from stash
git stash pop

# Apply but keep in stash
git stash apply

# Apply specific stash
git stash apply stash@{2}
\`\`\`

## Stash Specific Files

\`\`\`bash
git stash push -m "message" file1.txt file2.txt
\`\`\`

## Include Untracked Files

\`\`\`bash
git stash -u
# or
git stash --include-untracked
\`\`\`

## View Stash Contents

\`\`\`bash
# Show stash diff
git stash show

# Show with full diff
git stash show -p

# Show specific stash
git stash show stash@{1}
\`\`\`

## Delete Stashes

\`\`\`bash
# Drop specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
\`\`\`

## Create Branch from Stash

\`\`\`bash
git stash branch new-branch-name stash@{0}
\`\`\`

## Common Use Cases

### Quick Branch Switch
\`\`\`bash
git stash
git checkout other-branch
# do work
git checkout original-branch
git stash pop
\`\`\`

### Pull with Local Changes
\`\`\`bash
git stash
git pull
git stash pop
\`\`\`

## Pro Tips

- Always use descriptive messages
- Don't let stashes pile up
- Consider committing to a WIP branch instead
    `,
  },
  'git-rebase': {
    title: 'git rebase',
    description: 'Reapply commits on top of another branch',
    content: `
# git rebase

The \`git rebase\` command moves commits to a new base.

## Basic Rebase

\`\`\`bash
git checkout feature
git rebase main
\`\`\`

This replays your feature commits on top of main.

## Rebase vs Merge

**Merge:**
\`\`\`
      C - D (feature)
     /     \\
A - B - - - E (merge commit)
    (main)
\`\`\`

**Rebase:**
\`\`\`
A - B (main) - C' - D' (feature)
\`\`\`

## Interactive Rebase

Edit, squash, or reorder commits:

\`\`\`bash
git rebase -i HEAD~3
\`\`\`

Opens editor with:
\`\`\`
pick abc1234 First commit
pick def5678 Second commit
pick ghi9012 Third commit
\`\`\`

Commands:
- \`pick\` - use commit
- \`reword\` - change message
- \`squash\` - combine with previous
- \`fixup\` - combine, discard message
- \`drop\` - remove commit
- \`edit\` - pause to amend

## Rebase Onto

\`\`\`bash
git rebase --onto main feature-a feature-b
\`\`\`

## Continue After Conflict

\`\`\`bash
# Fix conflicts
git add .
git rebase --continue
\`\`\`

## Abort Rebase

\`\`\`bash
git rebase --abort
\`\`\`

## Skip Commit

\`\`\`bash
git rebase --skip
\`\`\`

## The Golden Rule

**Never rebase public/shared branches!**

\`\`\`bash
# BAD - others have this branch
git checkout main
git rebase feature

# GOOD - only you have this branch
git checkout feature
git rebase main
\`\`\`

## Pull with Rebase

\`\`\`bash
git pull --rebase
\`\`\`

## Pro Tips

- Rebase your feature branches before merging
- Use interactive rebase to clean up history
- Always rebase onto, never rebase shared branches
    `,
  },
  'squash': {
    title: 'Squash',
    description: 'Combine multiple commits into one',
    content: `
# Squash Commits

Squashing combines multiple commits into one clean commit.

## Interactive Rebase Squash

\`\`\`bash
# Squash last 3 commits
git rebase -i HEAD~3
\`\`\`

In the editor, change \`pick\` to \`squash\` (or \`s\`):
\`\`\`
pick abc1234 First commit
squash def5678 Second commit
squash ghi9012 Third commit
\`\`\`

Save and edit the combined commit message.

## Squash with Fixup

\`fixup\` squashes and discards the commit message:
\`\`\`
pick abc1234 Main commit
fixup def5678 Small fix
fixup ghi9012 Another fix
\`\`\`

## Squash on Merge

### GitHub PR
When merging, select "Squash and merge"

### Command Line
\`\`\`bash
git checkout main
git merge --squash feature-branch
git commit -m "Add feature X"
\`\`\`

## Soft Reset Method

Alternative to interactive rebase:
\`\`\`bash
# Reset to before your commits, keep changes staged
git reset --soft HEAD~3

# Create single commit
git commit -m "Combined commit message"
\`\`\`

## When to Squash

**Good times to squash:**
- Before merging to main
- Cleanup "WIP" or "fix typo" commits
- Combining related changes

**Don't squash:**
- Commits already pushed to shared branches
- When individual commits are meaningful

## Squash Workflow

\`\`\`
1. Work on feature branch
2. Make many small commits
3. Before merge: squash into logical commits
4. Merge to main
\`\`\`

## Commit Message After Squash

\`\`\`
feat: add user authentication

- Implement login form
- Add JWT token handling
- Create user session management
- Add logout functionality
\`\`\`

## Pro Tips

- Squash before creating PRs
- Keep 1-3 meaningful commits per feature
- Use \`fixup\` for quick cleanups
- \`--autosquash\` with fixup commits
    `,
  },
  'github-actions': {
    title: 'GitHub Actions',
    description: 'Automate workflows with CI/CD',
    content: `
# GitHub Actions

Automate testing, building, and deploying with GitHub Actions.

## Workflow File

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
\`\`\`

## Triggers

\`\`\`yaml
on:
  push:
    branches: [main, develop]
  pull_request:
  schedule:
    - cron: '0 0 * * *'  # Daily
  workflow_dispatch:  # Manual trigger
\`\`\`

## Common Actions

\`\`\`yaml
# Checkout code
- uses: actions/checkout@v4

# Setup Node.js
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'

# Setup Python
- uses: actions/setup-python@v5
  with:
    python-version: '3.12'

# Cache dependencies
- uses: actions/cache@v4
  with:
    path: node_modules
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
\`\`\`

## Environment Variables

\`\`\`yaml
env:
  NODE_ENV: production

jobs:
  build:
    env:
      API_KEY: \${{ secrets.API_KEY }}
\`\`\`

## Secrets

1. Go to repo Settings → Secrets → Actions
2. Add secret
3. Use: \`\${{ secrets.SECRET_NAME }}\`

## Matrix Builds

\`\`\`yaml
jobs:
  test:
    strategy:
      matrix:
        node: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
    runs-on: \${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
\`\`\`

## Deploy Example

\`\`\`yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
\`\`\`

## Pro Tips

- Use \`workflow_dispatch\` for manual runs
- Cache dependencies for faster builds
- Use matrix for cross-platform testing
    `,
  },
  'advanced-git-tips': {
    title: 'Advanced Git Tips',
    description: 'Power user tips and tricks',
    content: `
# Advanced Git Tips

Level up your Git skills with these power user techniques.

## Useful Aliases

Add to \`~/.gitconfig\`:
\`\`\`ini
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  lg = log --oneline --graph --decorate
  unstage = reset HEAD --
  last = log -1 HEAD
  amend = commit --amend --no-edit
\`\`\`

## Search Commits

\`\`\`bash
# Search commit messages
git log --grep="bug fix"

# Search code changes
git log -S "function_name"

# Search with regex
git log -G "pattern"
\`\`\`

## Blame & History

\`\`\`bash
# Who changed each line
git blame filename.txt

# Ignore whitespace
git blame -w filename.txt

# Show file at specific commit
git show abc1234:filename.txt
\`\`\`

## Bisect (Find Bad Commit)

\`\`\`bash
git bisect start
git bisect bad              # Current is bad
git bisect good abc1234     # Known good commit
# Git will checkout middle commit
# Test, then:
git bisect good  # or bad
# Repeat until found
git bisect reset
\`\`\`

## Cherry Pick

\`\`\`bash
# Apply specific commit to current branch
git cherry-pick abc1234

# Multiple commits
git cherry-pick abc1234 def5678

# Without committing
git cherry-pick -n abc1234
\`\`\`

## Worktrees

\`\`\`bash
# Work on multiple branches simultaneously
git worktree add ../feature-branch feature

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../feature-branch
\`\`\`

## Reflog (Undo Almost Anything)

\`\`\`bash
git reflog
# Shows all HEAD movements
git reset --hard HEAD@{2}
\`\`\`

## Clean Untracked Files

\`\`\`bash
# Preview
git clean -n

# Remove files
git clean -f

# Remove files and directories
git clean -fd
\`\`\`

## Partial Commits

\`\`\`bash
git add -p filename.txt
# Stage individual hunks
\`\`\`

## Useful Commands

\`\`\`bash
# Compact log
git log --oneline -10

# Graph view
git log --graph --all --oneline

# Diff between branches
git diff main..feature

# List files changed
git diff --name-only main

# Show remote info
git remote show origin
\`\`\`

## Pro Tips

- Master the reflog - it's your safety net
- Use aliases for common commands
- \`git bisect\` is invaluable for debugging
- Learn \`git add -p\` for precise staging
    `,
  },
}

export const getLessonBySlug = (slug) => {
  return lessons[slug] || null
}
