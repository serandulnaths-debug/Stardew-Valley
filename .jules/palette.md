## 2024-06-25 - Fallback States for Synchronous Plugin Settings
**Learning:** In RemNote plugins, settings retrieved via `useTracker` load synchronously. However, if a user hasn't configured a setting yet, it returns `undefined`, which can cause blank spaces in the UI or confusing sentences.
**Action:** Always provide polite fallback default values (e.g., `name || 'User'`) and use semantic HTML to ensure the interface remains clear and accessible even with uninitialized settings.
