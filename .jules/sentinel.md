## 2026-07-28 - DOM-based XSS in Webpack dev sandbox
**Vulnerability:** DOM-based XSS (Client-Side Script Inclusion) in `webpack.config.js` via unvalidated `widgetName` query parameter interpolation into a `<script src="...">` tag.
**Learning:** The Webpack dev sandbox blindly trusted user input from the URL to load a module script.
**Prevention:** Validate input against a strict allowlist generated at build time from the source files before using it in the DOM.
