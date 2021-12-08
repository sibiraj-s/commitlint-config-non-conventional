# commitlint-config-non-conventional

> Shared [commitlint] config to enforce a good commit message

This config disllows the usage of [conventinal style commits][conventionalcommits]. Sometimes all you need is just a proper commit messages with rules enforced.

[![Tests](https://github.com/sibiraj-s/commitlint-config-non-conventional/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/commitlint-config-non-conventional/actions/workflows/tests.yml)
[![Version](https://badgen.net/npm/v/commitlint-config-non-conventional)](https://npmjs.com/package/commitlint-config-non-conventional)
[![License](https://badgen.net/npm/license/commitlint-config-non-conventional)](https://github.com/sibiraj-s/commitlint-config-non-conventional/blob/master/LICENSE)
![Node](https://badgen.net/npm/node/commitlint-config-non-conventional)

## Rules

A commit message or commit title should

- not be empty
- be sentence cased
- contain atleast 10 characters
- not exceed 50 characters
- not end with full stop

If the commit message has a body and footer. They should have 2 blank leading lines and should not exceed 72 characters. The description(body) should be sentence cased.

## Installation

```bash
npm i -D @commitlint/cli commitlint-config-non-conventional
```

## Usage

```js
// commitlint.config.js

module.exports = {
  extends: 'non-conventional',
};
```

### Configuring with husky

```bash
# Install husky
npm i -D husky

# Activate husky hooks
npx husky install

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

Checkout the [husky documentation][install-husky] on how to automatically install git hooks post installation.

[commitlint]: https://commitlint.js.org
[conventionalcommits]: https://www.conventionalcommits.org/
[install-husky]: https://typicode.github.io/husky/#/?id=manual

### Useful links

- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
