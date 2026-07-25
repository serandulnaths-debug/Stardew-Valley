## 2026-07-25 - Concurrently Register Independent SDK Calls
**Learning:** Sequential await calls for RemNote Plugin SDK API methods (like `plugin.settings.registerStringSetting`, `plugin.app.registerCommand`) add up significantly during plugin initialization, as each setting requires IPC round-trips to the parent window.
**Action:** Always wrap independent SDK registration calls in a `Promise.all` block within `onActivate` to concurrently register them, noticeably speeding up the plugin's load time.
