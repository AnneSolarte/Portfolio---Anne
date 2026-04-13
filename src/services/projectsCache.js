const STORAGE_KEY = 'portfolio_projects_cache_v1'

export const readProjectsCache = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : null
  } catch {
    return null
  }
}

export const writeProjectsCache = (projects) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  } catch (e) {
    console.error('Error writing projects cache:', e)
  }
}

export const clearProjectsCache = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.error('Error clearing projects cache:', e)
  }
}
