module.exports = {
    parser: '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'env': {
        'es6': true,
        'node': true,
        'jest': true,
        'browser': true,
        'serviceworker': true,
    },
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'extends': ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/@typescript-eslint', 'prettier/flowtype', 'prettier/react'],
    'plugins': ['@typescript-eslint', 'jsx', 'react', 'prettier'],
    'rules': {
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'camelcase': ['error', { properties: 'never' }],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never',
        }],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'dot-location': ['error', 'property'],
        'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
        'func-call-spacing': ['error', 'never'],
        'generator-star-spacing': ['error', { 'before': false, 'after': true }],
        'no-use-before-define': 'off',
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
        'jsx/uses-factory': ['error', { 'pragma': 'React' }],
        'jsx/factory-in-scope': ['error', { 'pragma': 'React' }],
        'jsx/mark-used-vars': 'error',
        'jsx/no-undef': 'error',
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { 'code': 120 }],
        'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],
        'new-parens': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': ['error', { 'varsIgnorePattern': 'React' }],
        'no-useless-concat': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var', 'block-like', 'function', 'case'], next: '*' },
            { blankLine: 'always', prev: 'default', next: 'case' },
            { blankLine: 'always', prev: '*', next: ['const', 'block-like'] },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
        ],
        'prettier/prettier': 'error',
        'quotes': ['error', 'single'],
        'require-await': 'error',
        'semi': ['error', 'always'],
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
    },
};
