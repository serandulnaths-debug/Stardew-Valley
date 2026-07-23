## 2024-07-23 - DOM XSS and Path Traversal in Webpack Dev Server Sandbox
**Vulnerability:** Unvalidated `widgetName` URL parameter was interpolated directly into a `<script src="...">` tag inside the generated `index.html` via `HtmlWebpackPlugin` in `webpack.config.js`.
**Learning:** The dev server environment for RemNote widget sandboxing allows arbitrary string values to be injected into the DOM as script execution targets. This exposes developers running the plugin locally to DOM XSS and Path Traversal if they visit a crafted URL.
**Prevention:** Always validate URL parameters and untrusted user input against a dynamically generated or statically defined allowlist (e.g., using `glob.sync` for entry point chunks) before interpolating them into HTML templates.
