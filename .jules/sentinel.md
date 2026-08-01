## 2024-05-24 - [Fix DOM-based XSS in RemNote Plugin Template]
**Vulnerability:** DOM-based XSS (Client-Side Script Inclusion) in webpack.config.js where the widgetName query parameter is directly interpolated into a <script src="..."> tag.
**Learning:** The template dynamically loaded sandboxed widgets based on the URL query parameter without validation, allowing arbitrary script inclusion.
**Prevention:** Strictly validate widgetName against a build-time allowlist of valid widgets extracted from Webpack entry points.
