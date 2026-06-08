## 2024-06-08 - Concurrent Plugin Initialization
**Learning:** In RemNote plugins, initialization operations in `onActivate` like `registerStringSetting` and `registerCommand` are independent asynchronous tasks. Awaiting them serially unnecessarily delays plugin startup and degrades perceived performance.
**Action:** Always group independent initialization promises in `onActivate` within a `Promise.all()` to ensure they resolve concurrently.
