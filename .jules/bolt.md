## 2024-06-14 - Concurrent Plugin Registration Anti-pattern

**Learning:** In RemNote plugins, independent asynchronous registrations during the `onActivate` function (such as `registerStringSetting`, `registerCommand`, `registerWidget`, `toast`) are often written sequentially using `await`. Since these calls involve communication over the plugin bridge, sequential `await`s create an unnecessary waterfall, increasing total plugin load time. They can and should be executed concurrently.

**Action:** Whenever initializing a plugin or registering multiple independent settings/commands/widgets, wrap the registration calls in a `Promise.all` array to execute them concurrently and speed up plugin activation.
