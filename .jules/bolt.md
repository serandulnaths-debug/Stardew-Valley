## 2024-05-30 - Concurrent Plugin Initialization
**Learning:** Independent asynchronous SDK calls (like registering settings, commands, and widgets) inside `onActivate` block each other if awaited sequentially, leading to slower initialization times.
**Action:** Group independent asynchronous registrations in `onActivate` into a single `Promise.all` call to allow concurrent execution and improve performance.
