## 2024-05-24 - [DOM XSS via Widget Script Injection]
**Vulnerability:** Untrusted user input from URL parameters (`widgetName`) was directly concatenated into script `src` URLs and error messages were rendered using `innerHTML`. This could allow attackers to inject malicious scripts via crafted URLs.
**Learning:** URL parameters mapped directly to script injection points are highly vulnerable. Even error handling needs to use safe properties like `textContent` rather than `innerHTML` to avoid reflecting malicious input.
**Prevention:** Always validate user input against a strict allowlist (in this case, dynamically generated build entries) before utilizing it in sensitive DOM elements like `<script>`. Use `textContent` or `innerText` for error messages instead of `innerHTML`.
