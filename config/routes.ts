import { IConfig } from 'umi';
const routers: IConfig['routes'] = [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/home/index',
      },
      {
        path: '/stolist',
        component: '@/pages/sto/list/index',
      },
      {
        path: '/howitworks',
        component: '@/pages/howitworks/index',
      },
      {
        path: '/whoweare',
        component: '@/pages/whoweare/index',
      },
      {
        path: '/detail',
        component: '@/pages/sto/detail/index',
      },
      { exact: true, path: '*', redirect: './home' },
    ],
  },
  { exact: true, path: '*', redirect: '/home' },
];

export default routers;
