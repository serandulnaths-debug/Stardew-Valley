## 2025-02-20 - [Promise.all for IPC Registration]
**Learning:** In RPC/IPC-based plugin architectures (like RemNote), sequential `await` calls during initialization (e.g., in `onActivate`) create a significant performance bottleneck due to unnecessary round-trips to the parent application.
**Action:** Group independent plugin registration calls (`registerStringSetting`, `registerCommand`, `registerWidget`, etc.) using `Promise.all([...])` to execute them concurrently, reducing the activation latency from O(N) to roughly O(1).
