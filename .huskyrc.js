module.exports = {
  hooks: {
    'pre-commit': 'yarn lint',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  }
};
