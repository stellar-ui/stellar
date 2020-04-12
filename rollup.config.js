import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';

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
    external(),
    resolve({
      jsnext: true,
      extensions,
    }),
    typescript({
      exclude: ['**/*.stories.tsx'],
      clean: true,
    }),
    commonjs({ extensions }),
  ],
  external: [...Object.keys(pkg.dependencies || {})],
};

export default rollupConfig;
