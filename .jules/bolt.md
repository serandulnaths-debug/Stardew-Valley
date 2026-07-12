## 2024-07-12 - Optimize RemNote Plugin Registration

**Learning:** Independent asynchronous plugin registrations (like settings, commands, and widgets) during onActivate in RemNote plugins communicate via IPC and require round-trips. Running them sequentially limits initialization performance.

**Action:** Always group independent RemNote Plugin SDK asynchronous registration calls in onActivate with Promise.all to enable concurrent initialization.