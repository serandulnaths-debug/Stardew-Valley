## 2023-10-27 - DOM-based XSS (Arbitrary Script Injection) and CORS Domain Spoofing

**Vulnerability:**
1. DOM-based XSS (Arbitrary Script Injection): `HtmlWebpackPlugin` template was using the `widgetName` query parameter directly without validation to construct the `src` attribute of a `<script>` tag, allowing arbitrary external scripts to be loaded and executed.
2. CORS Domain Spoofing: `webpack.config.js` `devServer` CORS policy validated origins using `origin.startsWith('http://localhost:')`, which allows an attacker to spoof domains (e.g. `http://localhost:8080.attacker.com`).

**Learning:**
1. Dynamically injecting query parameters directly into `<script src="...">` tags without validation allows attackers to execute arbitrary code (DOM-based XSS).
2. Simple string prefix checks (`startsWith`) for origin validation in CORS policies are insecure and easily bypassed.

**Prevention:**
1. Generate an allowlist of valid widget entries at build-time.
2. Validate user input (`widgetName`) strictly against the allowlist before processing.
3. Use safe DOM methods like `document.createTextNode` or `textContent` instead of `innerHTML` for displaying errors.
4. Always parse URLs properly using the `URL` API (`new URL(origin).hostname`) for strict hostname matching in CORS origin validation.
