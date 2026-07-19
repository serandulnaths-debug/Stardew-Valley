## 2024-05-18 - [Fix DOM XSS in Sandbox HTML Template]
**Vulnerability:** DOM-Based Cross-Site Scripting (XSS) in `webpack.config.js`. The `HtmlWebpackPlugin` template blindly reflected the `widgetName` query parameter into a `<script>` tag's `src` attribute.
**Learning:** Build configuration files (like `webpack.config.js`) that inject user-controlled input (like query parameters) directly into the generated HTML can be a source of DOM XSS, especially in sandbox or plugin environments where widgets are dynamically loaded.
**Prevention:** Implement strict allowlisting. Dynamically resolve the list of valid widget names during the build process, inject this allowlist into the template, and validate the query parameter against it at runtime before appending the script tag to the DOM.
