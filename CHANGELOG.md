# Changelog

## [Unreleased]
### Performance
- ⚡ Accelerated plugin startup time by executing plugin setup registrations (settings, commands, widgets) concurrently using `Promise.all` in the `onActivate` function.
