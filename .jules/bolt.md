## 2026-06-09 - Concurrent Plugin Initialization
**Learning:** In RemNote plugins, independent asynchronous registrations in the `onActivate` function (like settings, commands, and widgets) can significantly slow down startup if awaited sequentially.
**Action:** Use `Promise.all` to run these independent setup tasks concurrently to improve plugin load times.
