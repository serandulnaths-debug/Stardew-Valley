## 2026-06-05 - DOM XSS in Widget Loader
**Vulnerability:** The HtmlWebpackPlugin template in webpack.config.js allowed arbitrary script execution via an unvalidated `widgetName` query parameter used directly in a script `src` attribute.
**Learning:** Unvalidated inputs from URL query parameters must never be used to construct paths or load resources dynamically, even in build configuration templates.
**Prevention:** Generate a build-time allowlist of valid resources (e.g., from the entry object keys) and strictly validate any runtime parameters against this list before loading resources.
