## 2024-05-31 - [Fix DOM-based XSS in widget loading in Webpack Template]
**Vulnerability:** A DOM-based Cross-Site Scripting (XSS) vulnerability was present in the `HtmlWebpackPlugin` template inside `webpack.config.js`. The `widgetName` query parameter was read directly from the URL (`window.location.search`) and used to dynamically construct a script source (`s.src = widgetName + "-sandbox.js"`) and injected into the DOM using `document.body.innerHTML`. This allowed arbitrary script execution if a user clicked on a crafted link with a malicious `widgetName`.
**Learning:** The URL query parameters cannot be trusted and must be validated before being used to construct scripts or modify the DOM. In this case, since valid widgets are known at build time (via `glob` searching the `src/widgets` directory), we can embed this list in the generated HTML and use it to validate the user input. Furthermore, `innerHTML` should never be used with user-controlled input.
**Prevention:**
1. Generate an allowlist of valid widget names during the build process and embed it in the HTML template.
2. Validate the user-provided `widgetName` against this allowlist before loading any script.
3. Replace unsafe DOM manipulation methods like `innerHTML` with safe alternatives like `textContent`.
