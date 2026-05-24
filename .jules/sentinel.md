## 2024-05-24 - Fix DOM-based XSS in Webpack Template
**Vulnerability:** A DOM-based XSS vulnerability existed in `webpack.config.js` where `widgetName` from query parameters was injected directly into `document.body.innerHTML` and a script tag `src` attribute without validation.
**Learning:** Build-time configuration files often template runtime HTML that must treat URL query parameters as untrusted user input.
**Prevention:** Validate untrusted input against an allowlist generated at build time (e.g., using glob to extract valid entry points) and use `textContent` instead of `innerHTML` when displaying untrusted data in the DOM.
