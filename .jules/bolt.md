## 2024-07-26 - Avoid sequential IPC calls during plugin initialization
**Learning:** RemNote plugin initializations often involve multiple settings, commands, and widgets, all of which communicate with the parent window via IPC. Doing these sequentially creates multiple unnecessary round-trips that noticeably impact start-up performance.
**Action:** Always group independent SDK registration calls (like `settings.register*`, `app.registerCommand`, `app.registerWidget`) within `Promise.all` during `onActivate` to drastically reduce startup latency.
