## 2024-05-15 - Prevent DOM-based XSS in HtmlWebpackPlugin template

**Vulnerability:** A DOM-based Cross-Site Scripting (XSS) vulnerability existed in `webpack.config.js` within the `HtmlWebpackPlugin` template. It directly read a query parameter (`widgetName`) from the URL and injected it into both `document.body.innerHTML +=` and as a `<script src="...">` attribute without any validation or sanitization. This allowed an attacker to execute arbitrary JavaScript if a user clicked a crafted link.

**Learning:** It is crucial to remember that dynamically injecting content from URL query parameters (like `window.location.search`) into the DOM, especially into sensitive contexts like innerHTML or script sources, poses a high risk. Build-time templates must be carefully evaluated for runtime DOM injection vulnerabilities.

**Prevention:** Always validate user input against a strict allowlist. Here, we extracted the actual entry point keys at build time to form a `validWidgetNames` array. At runtime, we validate the query parameter against this allowlist before injecting it. Furthermore, prefer safer DOM manipulation methods like `textContent` over `innerHTML` to prevent script execution if unescaped content ever leaks.
