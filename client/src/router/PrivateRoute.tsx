import React, { FC, ReactElement } from 'react';

type IProps = {
  children: ReactElement;
};

const PrivateRoute: FC<IProps> = ({ children }) => {
  return children;
};

export default PrivateRoute;
