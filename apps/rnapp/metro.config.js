/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const fs = require('fs');
const JSON5 = require('json5');
const path = require('path');

const tsConfig = JSON5.parse(
  fs.readFileSync(path.resolve(__dirname, 'tsconfig.json'), 'utf8')
);
const { compilerOptions } = tsConfig;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    ...(compilerOptions?.paths && !process.env.RN_DISABLE_TS_PATHS
      ? Object.values(compilerOptions?.paths).map((folders) =>
          path.resolve(__dirname, folders[0] || '')
        )
      : []),
  ],
};
