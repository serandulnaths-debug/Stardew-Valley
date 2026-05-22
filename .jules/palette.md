## 2023-05-22 - Semantic HTML in Widgets
**Learning:** Loading plugin settings asynchronously can leave widget initial state completely undefined, causing poor UX before settings populate. React SDK does not handle this natively.
**Action:** Adding a fallback loading state (like `aria-busy`) and ensuring structural elements like headings map properly via `id` and `aria-labelledby` creates a more predictable accessible experience for dynamic widgets.
