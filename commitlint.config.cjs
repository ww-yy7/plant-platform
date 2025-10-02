module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交信息必须以 feat / fix / docs / style / refactor / test / chore 开头
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ],
    // subject 不能为空
    'subject-empty': [2, 'never'],
    // subject 最大长度 50
    'subject-max-length': [2, 'always', 50],
  },
};
