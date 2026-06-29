## 2024-11-20 - Webpack Error Avoidance
**Learning:** Avoid modifying the Webpack configuration for RemNote plugins unless absolutely necessary, as it is fragile and can easily break compilation and dynamic loading of widgets.
**Action:** Do not attempt to fix perceived entry point resolution issues in `webpack.config.js` unless they are the direct cause of the current task.

## 2024-11-20 - TypeScript Suppressions
**Learning:** The `@ts-ignore: TS2305` suppression was necessary due to the `@remnote/plugin-sdk` having incomplete types for `useTracker`, but code reviewers rejected it.
**Action:** If a type error is thrown by an imported module (like `useTracker` from `@remnote/plugin-sdk`), ensure that the suppression is strictly contained or investigate if another hook or import method is preferred.
