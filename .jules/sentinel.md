## 2024-05-18 - [DOM-based XSS in Widget Loader]
**Vulnerability:** DOM-based XSS through the `widgetName` query parameter which was unsafely injected into the document using `innerHTML` and dynamically appended as a script source in `webpack.config.js`.
**Learning:** Build-time configurations that generate HTML templates must treat all runtime inputs (like URL parameters) as untrusted, especially when dynamically constructing scripts or rendering error messages.
**Prevention:** Validate inputs against a strict allowlist generated at build time. Use `textContent` instead of `innerHTML` to prevent script execution if rendering untrusted input.
