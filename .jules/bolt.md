## 2024-06-19 - Concurrent Plugin Initialization
**Learning:** In RemNote plugins, independent registration calls (settings, commands, widgets) during `onActivate` can bottleneck startup time if executed sequentially with `await`.
**Action:** Always group independent asynchronous setup logic in `Promise.all` during plugin initialization to ensure concurrent execution and faster startup times.
