## 2026-06-12 - Handling undefined tracker values
**Learning:** In RemNote plugins, settings loaded via `useTracker` (like `plugin.settings.getSetting`) return `undefined` when a setting is unset by the user, rather than resolving through an initial async loading phase. Attempting to render these raw undefined values in the UI can lead to awkward blank spaces in sentences.
**Action:** Always provide explicit fallback values (e.g., `{name || 'User'}`) when rendering tracker-derived settings to prevent empty text and maintain a smooth reading experience.
