import React from 'react';

import { Box, Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom';
import InternalRouter from './router/Router';
import { ContainerWrapper } from './styles';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <ContainerWrapper>
          <Container maxWidth="xl">
            <InternalRouter />
            <ToastContainer
              position="bottom-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Container>
        </ContainerWrapper>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
