## 2024-07-16 - DOM XSS in HtmlWebpackPlugin template
**Vulnerability:** DOM-based XSS via unvalidated `widgetName` query parameter being used as script src and `innerHTML`.
**Learning:** Build-time generated templates loading scripts dynamically must validate user-provided input against an allowlist of valid entries before inclusion, and avoid using `innerHTML` to display error messages.
**Prevention:** Use an allowlist and `textContent` for dynamic values in HTML template scripts.
