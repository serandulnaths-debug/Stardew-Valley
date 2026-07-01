## 2024-05-24 - Parallelize RemNote Plugin IPC Registrations
**Learning:** Sequential `await` calls in RemNote SDK integrations (such as plugin.settings, plugin.app.registerCommand, etc.) block each other, unnecessarily slowing down plugin initialization due to multiple IPC round-trips to the parent window.
**Action:** Use `Promise.all` to concurrently register independent SDK commands, settings, and widgets inside `onActivate` to speed up the startup sequence.
