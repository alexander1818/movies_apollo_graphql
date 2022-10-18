import React from 'react';

import { Box, Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom';
import InternalRouter from './router/Router';
import { ContainerWrapper } from './styles';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <ContainerWrapper>
        <Container maxWidth="xl">
          <InternalRouter />
        </Container>
      </ContainerWrapper>
    </BrowserRouter>
  );
}

export default App;
