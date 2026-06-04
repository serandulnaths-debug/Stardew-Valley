## 2024-05-20 - Semantic HTML and Fallbacks for Plugin Settings
**Learning:** RemNote plugin settings via `useTracker` return `undefined` when unset, causing broken text rendering (e.g., "Hi ,"). Additionally, widgets lack semantic structure by default.
**Action:** Always provide graceful default values for `useTracker` settings (e.g., `name || 'User'`), use `<section>` with `aria-labelledby` for widget containers, and apply semantic tags (`<p>`, `<strong>`) to improve accessibility and readability within the RemNote UI.
