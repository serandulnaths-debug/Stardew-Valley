## 2024-06-07 - Concurrent Plugin Registration
**Learning:** Independent asynchronous initializations in `onActivate` (e.g., settings, commands, widgets) block startup latency when executed sequentially with multiple `await`s.
**Action:** Use `Promise.all` to register these concurrently, resulting in faster overall plugin startup time.
