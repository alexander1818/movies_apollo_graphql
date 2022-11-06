import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routes';

const InternalRouter: FC = () => {
  return (
    <Routes>
      {Object.values(mainRoutes).map((r: any, idx) => {
        return <Route key={idx + r.path} path={r.path} element={<r.element />} />;
      })}
    </Routes>
  );
};
export default InternalRouter;
