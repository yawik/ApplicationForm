const path = require('path');

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    babelOptions:
      {
        configFile: path.resolve(__dirname, './babel.config.js')
      },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    // 'plugin:vue/essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'standard',
    "plugin:quasar/standard"
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',
    'quasar',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    semi: ['error', 'always'],
    'spaced-comment': 'off',
    'no-var': ['error'],
    'brace-style': ['error', 'allman'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
          consistent: true
        },
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'one-var': [
      'error',
      {
        uninitialized: 'always',
        initialized: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 6,
          allowFirstLine: true
        }
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives'],
          ['provide', 'inject'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'filters',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'ROUTER_GUARDS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always', {
      ignore: []
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': ['error'],
    'vue/one-component-per-file': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': 'warn',
    'vue/attributes-order': 'error',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style']
    }],
    'vue/no-lone-template': 'error',
    'vue/no-multiple-slot-args': 'warn',
    'vue/no-v-html': 'warn',
    'vue/this-in-template': ['error', 'never'],
    'vue/custom-event-name-casing': ['error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/html-comment-content-newline': ['error',
      {
        singleline: 'never',
        multiline: 'always',
      },
      {
        exceptions: []
      }
    ],
    'vue/html-comment-content-spacing': ['error',
      'always',
      {
        exceptions: []
      }
    ],
    'vue/html-comment-indent': 'off',
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true
    }],
    'vue/next-tick-style': ['error', 'callback'],
    'vue/no-bare-strings-in-template': ['error', {
      allowlist: [
        '(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%', '$', '!', '?', ':', '[', ']', '{', '}', '<', '>', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\u00b7', '\u200B', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212', '|'
      ],
      attributes: {
        '/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
        '/input|textarea/': ['placeholder'],
        img: ['alt']
      },
      directives: ['v-text'],
    }],
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['all'],
      custom: ['test']
    }],
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true
    }],
    'vue/no-template-target-blank': 'error',
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed'],
      deepData: false,
      ignorePublicMembers: false
    }],
    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    'vue/no-useless-v-bind': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-direct-export': ['error', {
      disallowFunctionalComponentFunction: true
    }],
    'vue/require-name-property': 'error',
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      autofix: false,
      ignore: []
    }],
    'vue/v-on-function-call': 'error',
    'vue/valid-next-tick': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/key-spacing': 'error',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quasar/no-legacy-components': "error",
    'quasar/no-legacy-css': "error",
    'quasar/no-legacy-directives': "error",
    'quasar/no-legacy-properties': "error",
    'quasar/no-legacy-plugins': "error",
    'quasar/no-invalid-props': "error",
    'quasar/no-invalid-qfield-usage': "error"
  }
}
