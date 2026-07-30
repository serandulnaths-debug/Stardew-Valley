## 2026-07-30 - RemNote SDK IPC Performance
**Learning:** Independent asynchronous registrations in `onActivate` (like settings, commands, and widgets) cause sequential IPC round-trips to the RemNote parent window, blocking startup.
**Action:** Group these independent calls using `Promise.all()` for concurrent execution to minimize startup latency.
