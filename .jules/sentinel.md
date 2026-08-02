## 2026-08-02 - DOM-based XSS in Webpack HtmlWebpackPlugin template
**Vulnerability:** DOM-based XSS (Client-Side Script Inclusion) in webpack.config.js where widgetName is directly interpolated into a <script> tag.
**Learning:** Webpack configurations that dynamically generate HTML templates must validate any URL query parameters before injecting them into the DOM to prevent arbitrary script execution.
**Prevention:** Strictly validate query parameters against an allowlist (e.g., valid Webpack entry names) before appending them to the DOM.
