## 2024-05-24 - Optimizing Plugin Initialization Time

**Learning:** Sequential `await` calls for independent plugin SDK registrations (settings, commands, widgets) in the `onActivate` function create an unnecessary initialization bottleneck in RemNote plugins. Since these platform API registrations don't depend on each other, executing them serially delays the final ready state of the plugin.

**Action:** Whenever registering multiple independent platform constructs (like settings, commands, UI widgets) during a plugin's lifecycle hooks (`onActivate`), always wrap the registration promises in a `Promise.all` block. This ensures they resolve concurrently, leading to much faster startup times and snappier UI responsiveness.