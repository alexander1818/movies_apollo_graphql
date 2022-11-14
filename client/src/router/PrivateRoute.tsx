import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { mainRoutes } from './routes';

type IProps = {
  children: any;
};

const PrivateRoute: FC<IProps> = ({ children }) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={mainRoutes.login.path} />;
  }
  return children;
};

export default PrivateRoute;
