## 2024-05-24 - Parallelize independent async plugin SDK registrations
**Learning:** Independent async registrations (settings, commands, widgets) in RemNote plugins communicate via IPC with the parent window, causing significant latency when executed sequentially.
**Action:** Use `Promise.all` to concurrently execute independent RemNote SDK registrations during plugin activation.
