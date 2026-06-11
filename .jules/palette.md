## 2024-06-11 - Graceful Fallbacks for Settings
**Learning:** In the RemNote plugin SDK, settings loaded via `useTracker` (e.g., `plugin.settings.getSetting`) return `undefined` if they are unset by the user. They do not have an initial async loading phase. Rendering these without fallbacks creates a poor initial empty state experience.
**Action:** Always provide sensible default fallback values directly in the render logic (e.g., `{name || 'User'}`) for synchronously tracked settings rather than rendering loading states.
