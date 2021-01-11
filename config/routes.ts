import { IConfig } from 'umi';
const routers: IConfig['routes'] = [
  {
    path: '/home',
    component: '@/pages/index',
    routes: [
      {
        path: '/home/home',
        component: '@/pages/home/index',
      },
      { exact: true, path: '*', redirect: './home/home' },
    ],
  },
  { exact: true, path: '*', redirect: '/home' },
];

export default routers;
