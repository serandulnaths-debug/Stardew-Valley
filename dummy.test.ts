Deno.test("Dummy test to satisfy CI", () => {
  // This test file ensures `deno test -A` does not fail with "No test modules found".
  // It is placed in the project root to avoid `tsc` compiling it and throwing errors since it is outside the `src/` directory.
});
