import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { dashBoardRoutes, mainRoutes, navbarRoutes } from './routes';
import PrivateRoute from './PrivateRoute';

const InternalRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      {Object.values(mainRoutes).map((r, idx) => {
        if (r.title === mainRoutes.home.title) {
          return (
            <Route
              key={idx}
              path={r.path}
              element={
                <PrivateRoute>
                  <r.element />
                </PrivateRoute>
              }
            >
              {Object.values(navbarRoutes).map((dashBoardRoutes: any, index) => {
                return (
                  <Route
                    key={index}
                    path={dashBoardRoutes.path}
                    element={<dashBoardRoutes.element />}
                  />
                );
              })}
            </Route>
          );
        }
        return <Route key={idx + r.path} path={r.path} element={<r.element />} />;
      })}
    </Routes>
  );
};
export default InternalRouter;
