## 2024-07-08 - RemNote Plugin SDK IPC Bottleneck

**Learning:** Independent asynchronous registrations in the RemNote Plugin SDK's `onActivate` hook (like settings, commands, and widgets) communicate via IPC (Inter-Process Communication) and require round-trips to the parent window. When called sequentially, these round-trips block each other, leading to slower plugin startup times.

**Action:** Group these independent `await` calls concurrently using `Promise.all` to parallelize the IPC requests and significantly speed up the plugin initialization.
