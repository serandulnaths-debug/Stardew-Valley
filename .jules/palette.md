## 2024-05-18 - Asynchronous settings with useTracker
**Learning:** `useTracker` loads plugin settings asynchronously. Not accounting for this can cause awkward rendering (e.g. "Hi undefined...") and sudden layout shifts when the data resolves.
**Action:** Always implement a fallback or loading state (with `aria-live="polite"` for screen readers) when using `useTracker` to retrieve settings to ensure a smooth, accessible UX.
