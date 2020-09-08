import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from 'src/Layout/Auth';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('src/views/Login')),
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('src/views/Register')),
      },
    ],
  },
];
