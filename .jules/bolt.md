## 2024-06-13 - Concurrent RemNote Plugin Registrations
**Learning:** In RemNote plugins, independent asynchronous registrations in the `onActivate` function (such as settings, commands, and widgets) were executed sequentially. This causes sequential `await` bottlenecks which delays the plugin startup time.
**Action:** Always wrap independent initialization logic inside `Promise.all` to execute them concurrently, reducing total startup time.
