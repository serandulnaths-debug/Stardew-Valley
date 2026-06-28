## 2025-05-16 - DOM-based XSS and CORS Spoofing in Webpack Config
**Vulnerability:**
1. DOM-based XSS: `HtmlWebpackPlugin` in `webpack.config.js` was reading the `widgetName` query parameter directly and injecting it into the DOM using `.innerHTML` without validation, leading to potential XSS.
2. CORS spoofing: The `devServer` CORS logic validated `localhost` origins using `origin.startsWith`, which an attacker could bypass with a malicious domain like `http://localhost.attacker.com`.

**Learning:**
1. Client-side URL parameters must be treated as untrusted user input, even in build configuration templates.
2. `startsWith` string matching is insufficient for origin validation because domains can easily prefix the allowed string.

**Prevention:**
1. Validate URL parameters against a strict allowlist (e.g., dynamically generated valid entry points) and use safer DOM insertion methods like `textContent`.
2. Use the `URL` API to securely parse and validate the `hostname` property of an origin.
