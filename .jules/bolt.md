## 2024-07-23 - Concurrent IPC Registrations in RemNote SDK
**Learning:** Independent asynchronous RemNote Plugin SDK calls (like registering settings, commands, or widgets) communicate with the parent window via IPC. Awaiting these sequentially creates a waterfall of round-trips that delays plugin activation.
**Action:** When initializing a plugin in `onActivate`, always group independent registration calls using `Promise.all` to execute them concurrently and reduce initialization time.
