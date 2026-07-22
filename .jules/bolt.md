## 2024-03-24 - Concurrent RemNote Plugin IPC Registrations
**Learning:** Each registration in the RemNote Plugin SDK (settings, commands, widgets) makes an independent IPC call to the parent window. Running them sequentially with multiple `await` calls in `onActivate` causes unnecessary network/round-trip initialization delays and negatively impacts startup performance.
**Action:** Always group independent SDK IPC registrations in `onActivate` using `Promise.all` so they execute concurrently, reducing the critical path of plugin initialization.
