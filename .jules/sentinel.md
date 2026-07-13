## 2024-07-13 - Prevent DOM-based XSS in HtmlWebpackPlugin Template
**Vulnerability:** The dynamic script inclusion in `webpack.config.js` via `HtmlWebpackPlugin` did not validate the `widgetName` provided in the URL query parameter before injecting it into the DOM, making it vulnerable to DOM-based Cross-Site Scripting (XSS). Additionally, `innerHTML` was used for rendering error messages.
**Learning:** URL query parameters should never be trusted or injected directly into the DOM or script tag attributes without validation. Generating an allowlist dynamically during the build process provides an automated layer of security.
**Prevention:** Always validate URL-derived data against a known allowlist before usage, and prefer safer DOM APIs like `textContent` over `innerHTML`.
