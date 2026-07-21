## YYYY-MM-DD - [Parallelize RemNote SDK IPC Registration]
**Learning:** The RemNote Plugin SDK communicates via IPC with the parent window. Awaiting independent registrations sequentially causes multiple synchronous round-trips, creating a noticeable initialization bottleneck.
**Action:** Group independent registrations inside `onActivate` using `Promise.all` to execute them concurrently and improve plugin load time.
