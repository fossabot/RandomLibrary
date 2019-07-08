const path = require('path');
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules = [path.join(__dirname, '../src/'), 'node_modules']
  return config;
};
