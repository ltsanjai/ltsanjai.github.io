import { useEffect, useState } from 'react'

const API_BASE = 'https://api.github.com'

/**
 * Fetches a GitHub user's public profile and repositories using the
 * unauthenticated public REST API (no token required). Works entirely
 * client-side, which is why results are capped by GitHub's anonymous
 * rate limit (60 requests/hour per IP) — plenty for a portfolio site.
 */
export function useGitHub(username) {
  const [state, setState] = useState({
    status: 'loading', // 'loading' | 'error' | 'empty' | 'ready'
    user: null,
    repos: [],
    error: null,
  })

  useEffect(() => {
    if (!username || username === 'YOUR_GITHUB_USERNAME') {
      setState({
        status: 'error',
        user: null,
        repos: [],
        error: 'Set GITHUB_USERNAME in src/config/portfolio.js to load real data.',
      })
      return
    }

    let cancelled = false

    async function load() {
      setState((s) => ({ ...s, status: 'loading', error: null }))
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`${API_BASE}/users/${username}`),
          fetch(`${API_BASE}/users/${username}/repos?per_page=100&sort=updated`),
        ])

        if (userRes.status === 404) {
          throw new Error(`No GitHub user found for "${username}".`)
        }
        if (userRes.status === 403 || reposRes.status === 403) {
          throw new Error('GitHub API rate limit reached. Please try again shortly.')
        }
        if (!userRes.ok) {
          throw new Error(`GitHub API error (${userRes.status}).`)
        }
        if (!reposRes.ok) {
          throw new Error(`GitHub API error (${reposRes.status}).`)
        }

        const user = await userRes.json()
        const reposRaw = await reposRes.json()

        const repos = (Array.isArray(reposRaw) ? reposRaw : [])
          .filter((r) => !r.fork && !r.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

        if (cancelled) return

        setState({
          status: repos.length === 0 ? 'empty' : 'ready',
          user,
          repos,
          error: null,
        })
      } catch (err) {
        if (cancelled) return
        setState({
          status: 'error',
          user: null,
          repos: [],
          error: err.message || 'Something went wrong loading GitHub data.',
        })
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  return state
}
