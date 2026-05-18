## 2024-05-18 - [Plugin Startup Parallelization]
**Learning:** RemNote plugin initialization operations like `registerSetting` and `registerWidget` are asynchronous IPC calls. Executing them sequentially with `await` introduces artificial startup latency.
**Action:** Always wrap independent async plugin SDK registrations in `Promise.all` during `onActivate` to initialize plugins faster.
