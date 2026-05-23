## 2025-05-23 - Concurrent Task Initialization
**Learning:** Sequential plugin initialization commands in 'onActivate' using single 'await' statements unnecessarily increase startup time and decrease plugin startup performance.
**Action:** Use 'Promise.all' to concurrently register settings, commands, widgets, etc. whenever possible to ensure fast plugin starts.
