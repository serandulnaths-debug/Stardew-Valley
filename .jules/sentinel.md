## 2025-02-28 - DOM-based XSS in Widget Loader
**Vulnerability:** The `HtmlWebpackPlugin` template in `webpack.config.js` unsafely extracted the `widgetName` query parameter and injected it directly into a dynamically created `<script>` tag's `src` attribute, and into `document.body.innerHTML` without validation.
**Learning:** Build-time configuration files that generate runtime HTML templates can introduce significant security risks if they don't validate dynamic inputs before DOM manipulation.
**Prevention:** Validate runtime inputs against a build-time generated allowlist of known-good values, and strictly use `textContent` instead of `innerHTML` for displaying user-controlled text.
