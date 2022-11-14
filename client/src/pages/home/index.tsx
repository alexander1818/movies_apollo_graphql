import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import Navigation from '../../components/navigation';
import { ContainerWrapper } from '../../styles';

const Home: FC = () => {
  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Navigation />
      <ContainerWrapper>
        <Outlet />
      </ContainerWrapper>
    </Box>
  );
};
export default Home;
