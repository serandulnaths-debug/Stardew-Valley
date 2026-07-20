## 2024-05-24 - [Optimize Plugin Registrations]
**Learning:** Independent asynchronous registrations in RemNote Plugin SDK communicate via IPC with the parent window, and sequential execution adds unnecessary round-trip delay to startup.
**Action:** Use Promise.all for independent registrations in onActivate to perform them concurrently.
