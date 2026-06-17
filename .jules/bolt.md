## 2024-10-24 - Concurrent Plugin Registration
**Learning:** In RemNote plugins, independent asynchronous registrations in `onActivate` (like settings, commands, toasts, and widgets) don't depend on each other and can safely be executed concurrently. Doing them sequentially blocks plugin activation time unnecessarily.
**Action:** Use `await Promise.all([])` to group independent async initialization calls in `onActivate` rather than awaiting them one by one.
