## 2024-08-01 - Batch SDK Initialization for Faster Startup
**Learning:** Independent RemNote Plugin SDK registrations in `onActivate` (settings, commands, widgets) cause IPC round-trips to the parent window, leading to slow sequential initialization.
**Action:** Always batch asynchronous SDK initialization calls using `Promise.all` to execute them concurrently and reduce IPC overhead.
