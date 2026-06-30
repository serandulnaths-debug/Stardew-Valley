## 2024-06-30 - Concurrent Plugin Initialization
**Learning:** Sequential await calls for plugin setup functions (e.g., settings, commands, widgets) create unnecessary IPC round-trips to the parent RemNote window, increasing initialization time.
**Action:** Use Promise.all to register independent plugin capabilities concurrently, significantly decreasing the initial load time overhead.
