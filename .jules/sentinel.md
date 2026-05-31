## 2024-05-15 - DOM-based XSS in Widget Loader
**Vulnerability:** The dynamic loader for widgets in `HtmlWebpackPlugin` took the `widgetName` parameter directly from the URL query string and used it to generate a `<script src="...">` tag without validation. It also used `innerHTML` to display error messages.
**Learning:** Build tools that inject client-side logic to load assets based on URL parameters are a potential source of DOM-based XSS if the parameter isn't validated.
**Prevention:** Always validate URL query parameters against an allowlist (e.g., generated at build time) before using them to construct script tags. Avoid `innerHTML` for displaying arbitrary strings and use `textContent` instead.
