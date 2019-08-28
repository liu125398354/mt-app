module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'vue/no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'prefer-const': 0
  }
}
