import { defineConfig } from 'umi';
import theme from './config/theme';
import routes from './config/routes';
const outputPath = 'dist/';
const env = process.env.NODE_ENV;

const path = require('path')
export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  theme,
  title: 'Atom 8',
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: {
    immer: true,
    // hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: outputPath,
  publicPath: env === 'development' ? 'http://127.0.0.1:8000/' : outputPath,
  routes,
});
