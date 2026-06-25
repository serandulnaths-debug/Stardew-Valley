## 2024-06-25 - Parallelize independent SDK registrations
**Learning:** Independent SDK registration calls (like settings, commands, and widgets) in the RemNote plugin SDK communicate via IPC and require round-trips to the parent window. Awaiting them sequentially causes a noticeable startup delay.
**Action:** Always group independent SDK calls inside `Promise.all` in `onActivate` (or similar startup functions) to overlap network/IPC latency.
