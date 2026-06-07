
## 2024-06-07 - DOM-based XSS via HtmlWebpackPlugin Template
**Vulnerability:** The HTML template inside `webpack.config.js` was reading a URL query parameter (`widgetName`) and directly appending it to `document.body.innerHTML` and using it as a source for a dynamically created `<script>` tag.
**Learning:** `HtmlWebpackPlugin` templates run in the browser if they contain inline scripts. Using `document.body.innerHTML += ...` with unsanitized URL parameters allows DOM-based XSS attacks, while loading a script from an unvalidated URL parameter allows arbitrary script execution.
**Prevention:** Always use `.textContent` instead of `.innerHTML` when inserting text. Create an allowlist of valid script names at build-time (e.g. from the filesystem via `glob`), inject that list into the template, and strictly validate the URL parameter against the allowlist before using it to load scripts.
