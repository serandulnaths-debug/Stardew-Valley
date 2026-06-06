## 2024-05-24 - DOM XSS and CORS Spoofing in Webpack Config
**Vulnerability:**
1. The webpack dev server configuration contained a DOM XSS vulnerability where `document.body.innerHTML` was used directly with the unsanitized URL query parameter `widgetName`.
2. The `devServer` CORS header validation allowed any origin starting with `http://localhost:`, which exposed it to domain spoofing attacks (e.g., `http://localhost:8080.attacker.com`).

**Learning:**
Using string methods like `.startsWith()` for origin validation is a common security pitfall. Additionally, even in build configuration templates, directly injecting unsanitized data into `innerHTML` is dangerous.

**Prevention:**
1. Validate input against a dynamically generated allowlist before using it in the DOM and use safe APIs like `document.body.textContent` instead of `innerHTML`.
2. Always use the native `URL` API (`new URL(origin).hostname === 'localhost'`) for robust hostname extraction and origin validation.
