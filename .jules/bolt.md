## 2026-06-05 - Concurrent Plugin Initialization
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) can be executed concurrently using `Promise.all` instead of sequentially awaiting them, which significantly speeds up plugin startup time.
**Action:** Always group independent initialization promises into a `Promise.all` block when initializing a plugin.
