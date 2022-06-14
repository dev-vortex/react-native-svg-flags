module.exports = api => {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        targets: {
          browsers: ['defaults'],
        },
        useBuiltIns: 'entry',
      },
    ],
    '@babel/react',
    '@babel/react-native',
    '@babel/preset-flow',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
    'add-module-exports',
    'babel-plugin-dynamic-import-node',
  ]

  return {
    presets,
    plugins,
  }
}
