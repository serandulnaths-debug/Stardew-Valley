## 2024-06-23 - Batching Independent Plugin SDK Calls
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) block plugin initialization if executed sequentially because RemNote Plugin SDK calls communicate via IPC and require round-trips to the parent window.
**Action:** Always wrap independent SDK initialization calls in `Promise.all` during plugin startup to execute them concurrently and avoid initialization waterfall delays.
