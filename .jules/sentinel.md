## 2024-05-18 - Fix DOM-based XSS and CORS domain spoofing in Webpack Config
**Vulnerability:**
1. **DOM XSS:** Webpack `HtmlWebpackPlugin` template parsed `widgetName` directly from URL query parameters and appended it to the DOM using `innerHTML` and dynamically loaded scripts using `src` without verifying against known entry points.
2. **CORS Spoofing:** `webpack-dev-server` dynamically allowed CORS based on the `Origin` header. It validated localhost using `.startsWith('http://localhost:')`, which is susceptible to domain spoofing (e.g., `http://localhost:8080.attacker.com`).

**Learning:**
Build configuration files (`webpack.config.js`) often contain web servers and static HTML generation templates that are susceptible to standard web vulnerabilities like XSS and CORS misconfigurations. Even internal developer tools must properly validate and sanitize all dynamic inputs (URL params, headers).

**Prevention:**
1. **DOM XSS:** Avoid `innerHTML`, use `textContent`. Implement server/build-time allowlisting. For dynamic scripts, ensure inputs map directly to known build artifacts (e.g., filtering `widgetName` against `Object.keys(entryFiles)`).
2. **CORS:** Parse origins strictly with `new URL(origin)` and check exact `url.hostname` instead of string matching like `.startsWith` or `.includes`.
