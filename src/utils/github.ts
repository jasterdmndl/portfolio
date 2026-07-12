/**
 * GitHub API utilities for fetching user repositories
 */

export interface GitHubRepo {
  [x: string]: any
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'jasterdmndl'

/**
 * Fetch repositories for a GitHub user
 */
export async function fetchUserRepos(username: string = GITHUB_USERNAME): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`)
      return []
    }

    const repos = (await response.json()) as GitHubRepo[]
    // Filter out forks and archived repos
    return repos.filter(repo => !repo.fork)
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}

/**
 * Get the primary language for a repo with nice formatting
 */
export function getLanguageLabel(language: string | null): string {
  if (!language) return 'Unknown'
  return language
}

/**
 * Format updated date to relative time
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks}w ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  const years = Math.floor(months / 12)
  return `${years}y ago`
}

/**
 * Map a repository to a monument/project card
 */
export function mapRepoToProject(repo: GitHubRepo, index: number) {
  const colors = ['#d7ff64', '#6c8cff', '#4dd5cb']
  const types = ['spire', 'gateway', 'pavilion']

  return {
    id: `project-${String(index + 1).padStart(2, '0')}`,
    title: repo.name,
    description: repo.description || 'No description provided',
    color: colors[index % colors.length],
    type: types[index % types.length],
    repo,
  }
}
