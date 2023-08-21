import typescript from '@rollup/plugin-typescript'; // transpile typescript to javascript
import commonjs from '@rollup/plugin-commonjs'; // convert CommonJS modules to ES6
import resolve from '@rollup/plugin-node-resolve'; // resolve node_modules
import json from '@rollup/plugin-json'; // convert json to ES6
import nodePolyfills from 'rollup-plugin-node-polyfills'; // polyfill nodejs modules
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'; // dynamic import vars

export default {
  input: 'src/index.ts',
  // output: {
  //   dir: 'dist',
  //   format: 'cjs',
  //   // sourcemap: true,
  // },
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    json(),
    nodePolyfills(),
    dynamicImportVars()
  ],
  external: ['axios', 'figlet']
};