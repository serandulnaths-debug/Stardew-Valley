## 2024-03-01 - Optimizing Plugin Initialization

**Learning:** RemNote plugins initialize using the `@remnote/plugin-sdk`, which relies on IPC (Inter-Process Communication) to communicate with the parent window. Sequential `await` calls for registering settings, commands, and widgets create a performance bottleneck because each call requires a round-trip to the parent window before the next one can start.

**Action:** Always group independent asynchronous SDK registration calls (like settings, commands, and widgets) during plugin activation using `Promise.all` to execute them concurrently and significantly speed up initialization.
