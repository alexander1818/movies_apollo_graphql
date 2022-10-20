import React from 'react';

import { Box, Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom';
import InternalRouter from './router/Router';
import { ContainerWrapper } from './styles';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <ContainerWrapper>
          <Container maxWidth="xl">
            <InternalRouter />
          </Container>
        </ContainerWrapper>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
