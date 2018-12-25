module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  "rules": {
    "no-console": 0,
    "prettier/prettier": ["error", {
      "singleQuote": true, // 强制单引号
      "camelcase": true, // 强制驼峰法命名
      // "semi": false, // 语句强制分号结尾
      "strict": true, // 使用严格模式
      "no-spaced-func": false, // 函数调用时 函数名与()之间不能有空格
      "space-before-function-paren": false, // 函数定义时括号前面要不要有空格
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }],
    "semi": [0]
  },  
  parserOptions: {
    parser: 'babel-eslint'
  }
};