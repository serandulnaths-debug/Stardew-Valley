## 2024-06-28 - Parallelize Independent IPC Calls on Plugin Activation
**Learning:** RemNote Plugin SDK API calls (like settings and command registrations) communicate via IPC and require round-trips to the parent window. Awaiting them sequentially causes performance bottlenecks during initialization.
**Action:** Always group independent asynchronous SDK registrations in `onActivate` within a `Promise.all` to execute them concurrently and reduce total startup time.
