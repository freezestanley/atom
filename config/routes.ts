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
      {
        path: '/home/stolist',
        component: '@/pages/home/sto/list/index',
      },
      {
        path: '/home/howitworks',
        component: '@/pages/home/howitworks/index',
      },
      {
        path: '/home/whoweare',
        component: '@/pages/home/whoweare/index',
      },
      { exact: true, path: '*', redirect: './home/home' },
    ],
  },
  // {
  //   path: '/login',
  //   component: './login/index',
  //   meta: { title: '账号登录' },
  // }, // 登录
  { exact: true, path: '*', redirect: '/home' },
];

export default routers;
