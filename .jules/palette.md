## 2025-02-27 - Asynchronous Settings Loading
**Learning:** RemNote plugin settings loaded via `useTracker` are initially asynchronous and return `undefined` on the first few renders. If rendered directly, this causes an ugly flash of uninitialized variables (e.g. "Hi , you don't like pizza and your favorite number is !").
**Action:** Always provide semantic fallback/loading states (e.g., using `aria-busy="true"` and `aria-live="polite"`) when using `useTracker` for settings to prevent uninitialized variable rendering flashes and ensure screen readers announce the loading state correctly.
