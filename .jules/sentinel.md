## 2025-02-14 - Fix DOM-based XSS in HtmlWebpackPlugin template
**Vulnerability:** A DOM-based XSS vulnerability existed in `webpack.config.js` where the URL parameter `widgetName` was being directly written to the DOM using `innerHTML` and unsafely concatenated into a `<script>` tag's `src` attribute.
**Learning:** `HtmlWebpackPlugin` templates must treat all URL parameters (e.g., `window.location.search`) as untrusted user input, even in build-time configuration files used for development or staging environments.
**Prevention:** Always validate URL parameters against an allowlist (e.g., dynamically generated valid widget names at build time) and use safe DOM APIs like `textContent` instead of `innerHTML` for rendering untrusted strings.
