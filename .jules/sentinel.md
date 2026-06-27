## 2023-10-27 - [XSS and CORS Spoofing in Dev Webpack Config]
**Vulnerability:** The HtmlWebpackPlugin template blindly appended a script tag with a user-controlled `widgetName` from the URL, allowing DOM-based XSS and arbitrary script execution. Furthermore, the `webpack-dev-server` CORS allowed spoofed hostnames via `origin.startsWith`.
**Learning:** Build-time webpack configuration needs the exact same strict runtime validations as any other app, especially sandbox pages that rely on URL parameters. Using `.startsWith` for host validation is fundamentally flawed and vulnerable to prefix spoofing.
**Prevention:** Always implement explicit allowlists for dynamic script injections and use the `URL` API strictly checking `.hostname` instead of string matching when validating CORS origins.
