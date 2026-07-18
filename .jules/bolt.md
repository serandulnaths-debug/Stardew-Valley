## 2024-05-18 - RemNote Plugin SDK IPC Latency
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) require round-trips to the parent window because these RemNote Plugin SDK calls communicate via IPC. Awaiting them sequentially causes a noticeable performance bottleneck during plugin initialization due to accumulated latency.
**Action:** Always execute independent RemNote SDK calls concurrently using `Promise.all` in `onActivate` for better performance.
