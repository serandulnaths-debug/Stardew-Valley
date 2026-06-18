## 2026-06-18 - Optimize Plugin Initialization
**Learning:** Independent asynchronous plugin initializations (e.g., settings, commands, widgets) in `onActivate` are often registered sequentially with `await`, unnecessarily blocking the event loop and slowing down the plugin startup time.
**Action:** Always group independent promise-based initialization tasks using `Promise.all` in the `onActivate` hook to execute them concurrently, reducing total startup time.
