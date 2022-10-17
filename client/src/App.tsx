import React from 'react';

import { Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom';
import InternalRouter from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <InternalRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
