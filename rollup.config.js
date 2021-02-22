import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';

import pkg from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

const rollupConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extract: path.resolve('dist/index.css'), // generate a separate CSS file
      plugins: [
        postcssUrl({
          url: 'inline', // enable inline assets using base64 encoding
          maxSize: 20, // maximum file size to inline (in kilobytes)
          fallback: 'copy', // fallback method to use if max size is exceeded
        }),
      ],
      to: 'dist/index.css',
    }),
    nodeResolve({
      extensions,
      moduleDirectories: [path.resolve(__dirname, 'src'), 'node_modules'],
    }),
    typescript({
      clean: true,
      exclude: ['**/*.stories.tsx'],
      rollupCommonJSResolveHack: true,
    }),
    commonjs({ exclude: ['**/*.stories.tsx'], extensions }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

export default rollupConfig;
