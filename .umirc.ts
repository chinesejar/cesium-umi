import { defineConfig } from 'umi';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const path = require('path');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: false,
  runtimePublicPath: true,
  chainWebpack(memo, { webpack }) {
    memo.output.set('sourcePrefix', '');
    memo.resolve.alias.set('cesium', path.resolve(__dirname, cesiumSource));
    memo.amd.toUrlUndefined = true;
    memo.node.set('fs', 'empty');
    memo.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
        ],
      },
    ]);
    memo
      .plugin('define')
      .use(webpack.DefinePlugin, [{ CESIUM_BASE_URL: JSON.stringify('/') }]);
    return memo;
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/public',
      routes: [
        { path: '/', exact: true, component: '@/pages/index' },
      ]
    },
  ],
});
