## 2024-05-24 - Concurrent initialization in plugin activation
**Learning:** In the `onActivate` function of RemNote plugins, settings, commands, and widgets are often registered sequentially using `await`. Since these registrations do not depend on each other, running them sequentially blocks the initialization process unnecessarily.
**Action:** Group independent asynchronous registrations (like settings, commands, and widgets) in `Promise.all` inside `onActivate` for concurrent execution, which will speed up the plugin's startup time.
