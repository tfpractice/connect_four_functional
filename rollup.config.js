import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';

export default {
  entry: 'index.js',
  targets: [
  { dest: 'dist/bundle.cjs.js', format: 'cjs', },
  { dest: 'dist/bundle.umd.js', format: 'umd', },
  ],
  moduleId: 'connect_four_functional',
  moduleName: 'connect_four_functional',
  sourceMap: true,
  exports: 'named',
  external: [ 'game_grid', 'turmeric-utils' ],
  plugins: [
    progress({ clearLine: false, }),
    filesize(),
    nodeResolve(),
    commonjs(),
    babel({
        exclude: 'node_modules/**',
        plugins:  [ 'external-helpers' ],
    }),
    visualizer({ filename: 'stats.html', }),
    replace({ ENV: JSON.stringify(process.env.NODE_ENV || 'development'), }),
    (process.env.NODE_ENV === 'production' && uglify({ beautify: true, })),
  ],
};
