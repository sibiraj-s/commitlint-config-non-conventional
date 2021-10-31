// https://commitlint.js.org/#/reference-rules

module.exports = {
  rules: {
    // disable type
    'type-empty': [2, 'always'],

    // disable scope
    'scope-empty': [2, 'always'],

    // diable subject
    // since type and scope are disabled, first line of the header is the subject
    'subject-empty': [2, 'always'],

    // header
    'header-case': [2, 'always', 'sentence-case'],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 50],
    'header-full-stop': [2, 'never'],

    // body
    'body-leading-blank': [2, 'always'],
    'body-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [2, 'always', 72],

    // footer
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 72],
  },
  helpUrl: '',
};
