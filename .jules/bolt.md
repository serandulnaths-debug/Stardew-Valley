## 2024-05-19 - Concurrent Initialization in onActivate
**Learning:** Sequential `await` calls during plugin activation in `src/widgets/index.tsx` for registering multiple settings, commands, and widgets create a performance bottleneck. The `useTracker` hook must be maintained for reactive tracking, avoid confusing it with non-existent `useTrackerPlugin`.
**Action:** Always group independent async SDK calls during plugin initialization into a `Promise.all` block to maximize performance.
