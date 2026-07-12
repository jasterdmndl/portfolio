import { useState } from 'react'
import { GitHubRepo, getLanguageLabel, getRelativeTime } from '../utils/github'
import './GitHubProjectCard.css'

const ArrowUpRight = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
const Star = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>

export interface GitHubProjectCardProps {
  repo: GitHubRepo
  isSelected?: boolean
}

export function GitHubProjectCard({ repo, isSelected }: GitHubProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  const topics = repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : []
  const lastUpdated = getRelativeTime(repo.updated_at)

  return (
    <article className={`github-project-card ${isSelected ? 'active' : ''} ${expanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        <div className="card-title-section">
          <h3>{repo.name}</h3>
          <p className="card-description">{repo.description || 'No description provided'}</p>
        </div>
        <button className="expand-toggle" aria-expanded={expanded}>
          <span className="expand-icon">▼</span>
        </button>
      </div>

      {expanded && (
        <div className="card-details">
          <div className="details-row">
            <span className="label">Language:</span>
            <span className="value">{repo.language ? getLanguageLabel(repo.language) : '—'}</span>
          </div>
          {topics.length > 0 && (
            <div className="details-row">
              <span className="label">Topics:</span>
              <div className="topics-list">
                {topics.map((topic) => (
                  <span key={topic} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          )}
          <div className="details-row">
            <span className="label">Updated:</span>
            <span className="value">{lastUpdated}</span>
          </div>
          {repo.stargazers_count > 0 && (
            <div className="details-row">
              <span className="label">Stars:</span>
              <span className="value"><Star /> {repo.stargazers_count}</span>
            </div>
          )}
          <div className="card-actions">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="button small primary">
              View on GitHub <ArrowUpRight />
            </a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="button small secondary">
                Live demo <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
