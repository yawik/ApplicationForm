
module.exports = {
  extends: [
    'stylelint-config-standard',
    // "stylelint-config-recess-order"
  ],
  plugins: ['stylelint-scss'],
  rules:
   {
     'no-empty-source': null,
     'number-no-trailing-zeros': null,
     'color-hex-case': 'upper',
     'color-hex-length': 'short',
     'comment-empty-line-before': null,
     'block-opening-brace-space-before': null,
     'block-opening-brace-newline-after': 'always-multi-line',
     'block-opening-brace-newline-before': 'always-multi-line',
     'length-zero-no-unit': null,
     'at-rule-no-unknown': null,
     'at-rule-empty-line-before': null,
     indentation: 2,
     'scss/at-rule-no-unknown': true,
   }
};
