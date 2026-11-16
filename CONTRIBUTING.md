# Contributing to redact-sensitive

Thank you for contributing. This project welcomes first-time contributors.

## How to contribute

1. Pick an open issue, or open one describing the pattern, bug or feature you want to work on.
2. Fork the repo, create a branch from `main` (`feat/<short-name>` or `fix/<short-name>`).
3. Add or update tests in `test/` first where possible, then implement the change.
4. Run `npm test` — all tests must pass.
5. Open a pull request with a short description and a before/after example.

## Adding a new pattern

New patterns are the most welcome contribution. A good pattern PR includes:

- The pattern in `src/index.js`, with a clear `name` and `label`.
- A test in `test/redact.test.js` with a real example and a false-positive example (text that must *not* be redacted).
- A row in the README table, if the pattern is user-facing.

Please do **not** put real secrets in tests or examples. Use the standard test values (for example `4111 1111 1111 1111` for cards, `AKIAIOSFODNN7EXAMPLE` for AWS keys).

## Code of conduct

Be kind and professional. Reviewers will be too. Disagreement about a pattern is normal — bring a test case and we will work it out.
