## 2024-05-18 - Concurrent Initialization in RemNote Plugins
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) communicate via IPC and require round-trips to the parent window. Running them sequentially introduces unnecessary latency.
**Action:** Group these independent `await` calls using `Promise.all()` to execute them concurrently, reducing plugin startup time.
