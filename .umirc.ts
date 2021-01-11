import { defineConfig } from 'umi';
import routes from './config/routes';
const outputPath = 'dist/';

const env = process.env.NODE_ENV;
const path = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  theme: {
    'primary-color': '#ef570c',
  },
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
  publicPath: path,
  routes,
});
