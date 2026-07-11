## 2024-07-11 - Optimize Plugin Initialization with Promise.all
**Learning:** Sequential `await` calls on RemNote Plugin SDK registration functions (e.g., settings, commands, widgets) create performance bottlenecks during plugin activation because each call requires an IPC round-trip to the parent window.
**Action:** Use `Promise.all` to batch independent asynchronous registration calls in `onActivate` to initialize the plugin significantly faster.
