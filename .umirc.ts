import { defineConfig } from 'umi';
import theme from './config/theme';
import routes from './config/routes';
const outputPath = 'dist/';
const env = process.env.NODE_ENV;
const otpath = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

const path = require('path')
export default defineConfig({
  ssr: {
    devServerRender: false,
  },
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
  publicPath: otpath,
  routes,
  theme,
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@less': path.resolve(__dirname, 'src/less'),
    API: path.resolve(__dirname, 'src/api'),
    utils: path.resolve(__dirname, 'src/utils'),
  }
});
