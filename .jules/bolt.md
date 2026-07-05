## 2025-02-18 - Concurrent initialization for IPC calls
**Learning:** RemNote Plugin SDK registrations (like settings, commands, toast, widget) inside `onActivate` are independent asynchronous IPC calls to the parent window. Grouping them with `Promise.all` allows concurrent execution, significantly speeding up plugin activation.
**Action:** Always batch independent RemNote Plugin SDK registration calls during initialization using `Promise.all` to reduce total round-trip time.
