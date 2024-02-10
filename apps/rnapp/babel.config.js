const fs = require('fs');
const JSON5 = require('json5');
const path = require('path');

const tsConfig = JSON5.parse(
  fs.readFileSync(path.resolve(__dirname, 'tsconfig.json'), 'utf8')
);
const { compilerOptions } = tsConfig;

const BASE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const PLATFORMS = ['', '.ios', '.android'];
const EXTENSIONS = BASE_EXTENSIONS.flatMap((ext) =>
  PLATFORMS.map((platform) => `${platform}${ext}`)
);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: EXTENSIONS,
        alias: {
          '@': './src',
          ...(compilerOptions?.paths && !process.env.RN_DISABLE_TS_PATHS
            ? Object.fromEntries(
                Object.entries(compilerOptions?.paths).map(([from, to]) => [
                  from,
                  path.resolve(__dirname, to[0] || ''),
                ])
              )
            : {}),
        },
      },
    ],
  ],
};
