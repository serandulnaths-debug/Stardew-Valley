## 2024-06-25 - Group RemNote SDK Registrations

**Learning:** When developing RemNote plugins, independent SDK calls during `onActivate` (such as `registerSetting`, `registerCommand`, and `registerWidget`) require Inter-Process Communication (IPC) round-trips to the parent application. Executing them sequentially using individual `await` statements is an anti-pattern that slows down plugin initialization significantly.

**Action:** Always group independent SDK calls into `Promise.all([ ... ])` arrays during plugin activation to allow these IPC round-trips to execute concurrently, minimizing the time it takes for the plugin to start up.
