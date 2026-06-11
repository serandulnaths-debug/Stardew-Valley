## 2024-06-11 - Optimize Plugin Activation Concurrency
**Learning:** Independent asynchronous registrations (settings, commands, widgets, toasts) during plugin initialization inside the `onActivate` function can and should be grouped in a `Promise.all` block. By default, templates may register them sequentially using `await` consecutively, which scales poorly with more registrations.
**Action:** Always inspect sequential `await` calls in initialization phases. If the promises do not depend on the results of the others, run them concurrently using `Promise.all` to save initialization time.
