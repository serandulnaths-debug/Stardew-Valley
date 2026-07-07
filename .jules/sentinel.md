## 2025-01-20 - Fix DOM-based XSS and CORS domain spoofing vulnerabilities in webpack.config.js
**Vulnerability:**
1. DOM-based XSS: `document.body.innerHTML += ...` allowed XSS via the `widgetName` query parameter because the HTMLWebpackPlugin template did not sanitize the input.
2. CORS domain spoofing: Webpack dev server headers check for `localhost` and `127.0.0.1` used `startsWith` on the raw `origin` string instead of parsing it as a URL, allowing an attacker to bypass CORS using a spoofed domain like `http://localhost.evil.com`.

**Learning:**
1. Template strings in `HtmlWebpackPlugin` can introduce XSS if they don't properly handle or validate user input before insertion into the DOM, especially when using `innerHTML`.
2. String matching (like `startsWith`) is insufficient for validating CORS origins because URLs can contain the matched string in the subdomain or path. The origin must be parsed to reliably check the hostname.

**Prevention:**
1. Prevent DOM-based XSS by validating the `widgetName` against an allowlist (derived from the actual entry points) before creating dynamic scripts. Also, use `document.body.textContent` instead of `innerHTML` to prevent script execution if an error message contains user input.
2. Prevent CORS spoofing by parsing the `origin` using the `URL` API and strictly matching `url.hostname` against `localhost` and `127.0.0.1`.