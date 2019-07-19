import React from 'react';
import asyncComponent from './asyncComponent';

const routes = [
  {
    component: asyncComponent(() => import('@/layout')),
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncComponent(() => import('@/pages/home')),
      },
      {
        path: '/test',
        exact: true,
        component: asyncComponent(() => import('@/pages/test')),
      },
    ],
  }
];

export default routes;
