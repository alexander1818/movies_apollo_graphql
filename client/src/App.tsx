import React, { useContext } from 'react';

import { BrowserRouter } from 'react-router-dom';
import InternalRouter from './router/Router';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from './context/contextApp';
import { TDefaultContext } from './context/defaultContext';

import { Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';

import { ContainerWrapper } from './styles';

import Provider from './i18n/i18n';

function App() {
  const { locale }: TDefaultContext = useContext(AppContext);

  const httpLink = new HttpLink({ uri: 'http://localhost:5000/' });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    // eslint-disable-next-line no-prototype-builtins
    const customHeaders = operation.getContext().hasOwnProperty('headers')
      ? operation.getContext().headers
      : {};
    operation.setContext({
      headers: {
        ...customHeaders,
        locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <Provider locale={locale}>
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
    </Provider>
  );
}

export default App;
