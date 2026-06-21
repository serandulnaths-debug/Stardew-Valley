
## 2024-06-21 - Concurrent Initialization of RemNote Plugin SDK Registrations
**Learning:** Sequential `await` calls on independent RemNote Plugin SDK registrations (`registerStringSetting`, `registerCommand`, `registerWidget`, etc.) block the initialization of the `onActivate` function unnecessarily. Because these API calls interface via IPC and require round-trips to the parent window, calling them in sequence introduces multiple accumulated delays, slowing down the overall plugin load time.
**Action:** Always group independent SDK registrations into an array and execute them concurrently using `Promise.all` inside `onActivate` to minimize IPC round-trip latency and speed up the plugin initialization.
