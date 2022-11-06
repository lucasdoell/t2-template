module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip', 'feat', 'fix', 'config', 'refactor', 'revert',
        'chore', 'ci', 'assets', 'test', 'docs', 'init', 'update'
      ],
    ],
  },
}