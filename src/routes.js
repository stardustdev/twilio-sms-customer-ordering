import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from 'src/Layout/Auth';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    path: '*',
    component: AuthLayout,
    routes: [
      {
        path: '/login',
        exact: true,
        component: lazy(() => import('src/views/Login'))
      },
      {
        path: '/register',
        exact: true,
        component: lazy(() => import('src/views/Register'))
      }
    ]
  }
];
