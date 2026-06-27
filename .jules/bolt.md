## 2024-06-25 - Batched IPC registrations during plugin initialization
**Learning:** Independent RemNote SDK calls, like registering settings, commands, and widgets during `onActivate`, communicate with the parent window via IPC. Sequentially awaiting these registrations compounds IPC latency and delays the plugin's startup time.
**Action:** Always batch independent asynchronous SDK registrations inside a `Promise.all` instead of sequentially awaiting them to optimize plugin activation performance.
