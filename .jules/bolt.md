## 2024-07-19 - Concurrent Plugin Activation

**Learning:** Independent asynchronous plugin registrations (`plugin.settings.*`, `plugin.app.*`) within `onActivate` cause unnecessary sequential IPC round-trips to the host parent window, degrading startup performance. Wait times for these are cumulative.

**Action:** Whenever multiple independent SDK calls are awaited sequentially during initialization, refactor them using `Promise.all` to allow concurrent execution and prevent compounding round-trip delays.
