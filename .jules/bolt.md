## 2024-07-09 - Concurrent Plugin SDK Initializations
**Learning:** In the `remnote-plugin-sdk`, independent asynchronous registrations in the plugin activation hook (like `registerStringSetting`, `registerWidget`, `registerCommand`) require round-trips to the parent RemNote window via IPC. Doing these sequentially with individual `await` calls adds unnecessary latency.
**Action:** Always wrap independent IPC initialization calls in `Promise.all` during `onActivate` to execute them concurrently and improve plugin load times.
