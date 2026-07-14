## 2024-05-18 - Concurrent Plugin Initialization
**Learning:** In RemNote plugins, independent asynchronous registration methods (like `registerSetting`, `registerCommand`, etc.) in `onActivate` communicate via IPC. Awaiting them sequentially causes unnecessary round-trips to the parent window, delaying plugin initialization.
**Action:** Group independent initialization logic in `Promise.all` to execute them concurrently.
