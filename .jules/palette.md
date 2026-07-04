## 2024-05-18 - Handling uninitialized settings in React hooks

**Learning:** When using `useTracker` to fetch settings in a RemNote plugin, the returned values might initially be `undefined` if the user hasn't set them yet. This can lead to unstyled or incomplete UI if not handled correctly.

**Action:** Always provide fallback values or render appropriate loading/empty states when fetching settings using `useTracker`. For example, use logical OR (`||`) for strings or nullish coalescing (`??`) for booleans and numbers to provide a default value until the user explicitly sets one.
