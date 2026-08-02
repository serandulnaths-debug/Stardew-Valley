## 2024-08-02 - [Concurrent IPC calls for faster activation]
**Learning:** Independent asynchronous registrations in RemNote Plugin SDK communicate via IPC to the parent window. Sequential awaits add unnecessary round-trip latency.
**Action:** Always batch independent SDK registration calls with `Promise.all` during plugin activation.
