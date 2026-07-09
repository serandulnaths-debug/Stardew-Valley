## YYYY-MM-DD - Fix DOM XSS in Webpack HtmlWebpackPlugin
**Vulnerability:** The HTML template in `webpack.config.js` used `innerHTML` and dynamically created a script tag with the untrusted `widgetName` query parameter, allowing DOM-based XSS and arbitrary script execution.
**Learning:** Build-time configuration templates that process query parameters must treat them as untrusted input just like server-side code.
**Prevention:** Always validate URL parameters against an allowlist (e.g., generated at build-time) before dynamic script inclusion, and use `textContent` rather than `innerHTML` to prevent script injection.
## YYYY-MM-DD - Fix CORS Origin Spoofing in Webpack devServer
**Vulnerability:** The CORS policy in `webpack.config.js` used `.startsWith('http://localhost:')` to validate origins, which could be bypassed by a malicious domain spoofing the origin (e.g., `http://localhost:8080.malicious.com`).
**Learning:** Simple string matching for origins is insecure and prone to spoofing.
**Prevention:** Always use the built-in `URL` API to strictly parse and validate the origin's `hostname`.
