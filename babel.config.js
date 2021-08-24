module.exports = {
  env: {
    production: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          { targets: { node: 'current' }, modules: 'commonjs' },
        ],
      ],
    },
  },
}
