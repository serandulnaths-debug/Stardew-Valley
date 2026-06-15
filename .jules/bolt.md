## 2024-05-24 - Concurrently Registering Independent Settings
**Learning:** In RemNote plugins, independent asynchronous setup tasks inside `onActivate` (like setting registrations, command registrations, and widget registrations) block on each `await`, which can unnecessarily slow down plugin initialization.
**Action:** Always group these independent setup promises and execute them concurrently using `Promise.all` to minimize the overall startup latency.
