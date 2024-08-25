// 导出 stylelint 配置对象
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended'],
  plugins: ['stylelint-scss'],
  // 指定使用的语法解析器
  // postcss-scss 用于解析 SCSS 语法
  customSyntax: 'postcss-scss',
  // 规则配置
  rules: {
    // 添加规则
    // 在块开始的大括号前添加空格
    'block-opening-brace-space-before': 'always',
    // 在声明块末尾添加分号
    'declaration-block-trailing-semicolon': 'always',
    // 字符串引用使用单引号
    // "string-quotes": "single",
    'string-quotes': 'double',
    // 选择器列表后的逗号后添加空格
    'selector-list-comma-space-after': 'always',
    // 缩进使用两个空格
    indentation: 4,
    // 在注释前添加空行
    'comment-empty-line-before': 'always',
    // 限制 ID 选择器的最大数量
    'selector-max-id': 2,
    // 色彩值中的十六进制数使用小写字母
    'color-hex-case': 'lower',
    // 选择器列表后的逗号后添加空格
    'selector-list-comma-space-after': null,
  },
};
