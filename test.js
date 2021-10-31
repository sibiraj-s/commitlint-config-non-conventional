const lint = require('@commitlint/lint').default;
const { rules } = require('.');

const tests = [
  {
    name: 'a valid oneline commit message',
    message: 'Great commit summaries contain fewer than 50 chars',
    valid: true,
    errors: [],
  },
  {
    name: 'a detailed commit',
    message: 'Great commit summaries contain fewer than 50 chars'
      + '\n\n'
      + 'More detailed explanatory text, if necessary. Wrap it to about 72\n'
      + 'characters or so. In some contexts, the first line is treated as the\n'
      + 'subject of the commit and the rest of the text as the body\n'
      + '\n\n'
      + 'Fixes #1',
    valid: true,
    errors: [],
  },
  {
    name: 'message should be sentence cased',
    message: 'fix error with something',
    valid: false,
    errors: ['header-case'],
  },
  {
    name: 'message should not exceed 50 chars',
    message: 'This is a long commit message which is not accepted by given rules',
    valid: false,
    errors: ['header-max-length'],
  },
  {
    name: 'message should contain at least 10 chars',
    message: 'Invalid',
    valid: false,
    errors: ['header-min-length'],
  },
  {
    name: 'should not allow conventional commit type',
    message: 'fix: error with something',
    valid: false,
    errors: ['type-empty', 'subject-empty', 'header-case'],
  },
  {
    name: 'should not allow conventional commit with scope',
    message: 'fix(scope): error message with type and scope',
    valid: false,
    errors: ['header-case', 'type-empty', 'scope-empty', 'subject-empty'],
  },
  {
    name: 'body should have a leading blank line',
    message: `Great commit summaries contain fewer than 50 chars
    Body should have leading blank line to seperate from the subject
    `,
    valid: false,
    errors: ['body-leading-blank'],
  },
  {
    name: 'body should have a leading blank line',
    message: 'Great commit summaries contain fewer than 50 chars'
      + '\n\n'
      + 'A detailed explanatory decscription on the change, should be wrapped within 72 characters',
    valid: false,
    errors: ['body-max-line-length'],
  },
  {
    name: 'footer should have a leading blankline',
    message: 'Great commit summaries contain fewer than 50 chars'
      + '\n\n'
      + 'A detailed explanatory decscription on the change'
      + '\n'
      + 'Fixes #1',
    valid: false,
    errors: ['footer-leading-blank'],
  },
  {
    name: 'footer should have a leading blankline',
    message: 'Great commit summaries contain fewer than 50 chars'
      + '\n\n'
      + 'A detailed explanatory decscription on the change'
      + '\n\n'
      + 'BREAKING CHANGE: Footer comesFooter sentence should not exceed 72 characters',
    valid: false,
    errors: ['footer-max-line-length'],
  },
];

test.each(tests)('$name', async ({ message, ...t }) => {
  const result = await lint(message, rules);

  expect(result.valid).toBe(t.valid);
  expect(t.errors.length).toEqual(result.errors.length);

  const resultErrors = result.errors.map((err) => err.name);
  expect(t.errors).toEqual(expect.arrayContaining(resultErrors));
});
