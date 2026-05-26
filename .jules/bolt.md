## 2024-05-18 - Concurrent Plugin Registrations

**Learning:** This codebase's architecture often has independent asynchronous initializations like registering settings, commands, and widgets sequentially during the `onActivate` hook. This causes a blocking chain where each `await` must wait for the previous one, leading to slower plugin startup times.
**Action:** Use `Promise.all` to execute these independent asynchronous registrations concurrently in `onActivate`, which significantly reduces plugin activation time by avoiding sequential blocking.