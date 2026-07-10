## 2024-06-25 - Parallelize Plugin Activation IPC Calls
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) should be executed concurrently using `Promise.all` for better performance. These RemNote Plugin SDK calls communicate via IPC and require round-trips to the parent window, so parallelizing them speeds up initialization time.
**Action:** When initializing multiple independent settings, commands, or widgets via the RemNote plugin SDK, group the Promises and `await Promise.all()` instead of sequentially awaiting them.
