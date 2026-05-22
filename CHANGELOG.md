# Changelog

All notable changes to this project will be documented in this file.

## [0.0.1] - Unreleased

### Changed
- ⚡ **Performance**: Replaced sequential plugin registration calls in `onActivate` (`src/widgets/index.tsx`) with concurrent registration using `Promise.all`. This significantly reduces the time required for the plugin to activate.
