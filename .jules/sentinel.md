## 2025-02-18 - Prevent DOM-based XSS via strict build-time widget allowlisting in Webpack configurations

**Vulnerability:** A critical DOM-based Cross-Site Scripting (XSS) vulnerability was found in the `HtmlWebpackPlugin` template of `webpack.config.js`. The template dynamically retrieved the `widgetName` query parameter from the URL and used it to construct a script tag's source URL (`widgetName + "-sandbox.js"`) before appending it to the DOM. Additionally, if `widgetName` was missing, it used `document.body.innerHTML +=` to render an error message. Since `widgetName` was not validated or sanitized, an attacker could supply a malicious payload, leading to arbitrary code execution (XSS) or HTML injection.

**Learning:** When developing RemNote plugins or similar applications that rely on sandboxed environments, developers often use URL parameters to dictate which components to render. Relying purely on client-side logic to determine file paths without validation creates severe injection risks. The fact that the application compiles specific, known entry points at build time means a strict allowlist can be generated and baked into the client-side code directly from the build process.

**Prevention:**
1. **Strict Allowlisting:** Never trust user input to load scripts. Generate a list of valid entry points (or "widgets") during the build phase (e.g., using `glob` in Webpack) and inject this allowlist into the HTML template. At runtime, validate the `widgetName` parameter against this allowlist before generating any script tags.
2. **Safe DOM APIs:** Always prefer `textContent` (or `innerText`) over `innerHTML` when rendering user-supplied data or error messages to prevent arbitrary HTML injection.
