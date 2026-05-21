## 2024-03-24 - [Concurrent Plugin Registration]
**Learning:** Sequential `await` calls for independent plugin registrations (settings, commands, widgets) in `onActivate` cause unnecessary delay as they await multiple round-trip resolutions (e.g., IPC boundaries in plugin frameworks).
**Action:** Group independent async initialization calls in a `Promise.all` array to execute them concurrently, drastically reducing the plugin startup time.
