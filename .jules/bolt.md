## 2023-10-24 - RemNote Plugin Initialization Optimization
**Learning:** In RemNote plugins, independent asynchronous registrations in `onActivate` (like settings, commands, widgets, and toasts) do not depend on each other. Registering them sequentially using multiple `await` statements unnecessarily blocks initialization.
**Action:** Always group independent initialization calls (like `registerStringSetting`, `registerCommand`, `registerWidget`) into a single `Promise.all` block in `onActivate` to execute them concurrently, significantly reducing plugin startup time.
