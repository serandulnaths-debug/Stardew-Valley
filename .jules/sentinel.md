## 2024-05-15 - [DOM-based XSS and CORS Origin Spoofing in Dev Server]
**Vulnerability:** Found DOM-based XSS vulnerability via the widgetName query parameter unsafely injected into an HTML template using document.body.innerHTML +=. Also identified CORS Origin Spoofing where origin.startsWith allowed domains like http://localhost.attacker.com.
**Learning:** Build-time configurations generating dynamic content for dev tools or sandbox environments must still securely validate inputs and properly parse URLs to prevent spoofing.
**Prevention:** Generate allowlists at build time to validate query parameters before DOM injection. Use document.body.textContent instead of innerHTML. Use URL API and check url.hostname instead of simple string prefix checks for origins.
