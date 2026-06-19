## 2024-05-31 - XSS in Webpack Template
**Vulnerability:** XSS vulnerability in `webpack.config.js` via `document.body.innerHTML+="Widget ID not specified."`
**Learning:** Using `innerHTML` with unsanitized data (even static strings, as a bad practice) or adjacent to DOM manipulations can lead to XSS. The original code used `innerHTML` and dynamically loaded scripts based on unvalidated `widgetName` query parameters.
**Prevention:** Use `document.body.textContent` instead of `innerHTML`, and validate `widgetName` against an allowlist of valid widget names.

## 2024-05-31 - Origin spoofing in Dev Server
**Vulnerability:** Dev server CORS check used `origin.startsWith('http://localhost:')` which could be spoofed (e.g. `http://localhost.evil.com`).
**Learning:** Checking origins using `.startsWith` is insecure and easily bypassed.
**Prevention:** Parse the origin using the `URL` API and strictly check the hostname (e.g. `url.hostname === 'localhost'`).
