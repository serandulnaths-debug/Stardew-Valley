## 2024-05-24 - Batch IPC registrations
**Learning:** Sequential RemNote SDK registrations in `onActivate` are slow because they communicate via IPC to the parent window, causing round-trip overhead for each `await`.
**Action:** Always wrap independent SDK registrations (settings, commands, widgets) in `Promise.all()` to execute them concurrently and reduce initialization time.
