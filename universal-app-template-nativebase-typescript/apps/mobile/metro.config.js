const path = require('path');

const extraNodeModules = {
  'universal-components': path.resolve(__dirname, '..', 'components'),
};

const watchFolders = [path.resolve(__dirname, '..', '..'), path.resolve(__dirname, '..', 'components')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
