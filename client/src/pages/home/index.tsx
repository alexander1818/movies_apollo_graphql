import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import Navigation from '../../components/navigation';
import { ContainerWrapper } from '../../styles';

const Home: FC = () => {
  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Navigation />
      <Container maxWidth="xl">
        <ContainerWrapper>
          <Outlet />
        </ContainerWrapper>
      </Container>
    </Box>
  );
};
export default Home;
