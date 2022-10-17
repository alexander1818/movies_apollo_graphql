import React from 'react';

import { Box, Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Settings from './pages/settings';
import Home from './pages/home';
import InternalRouter from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <InternalRouter />

        <Box>
          <Outlet />
        </Box>
        {/*<Routes>*/}
        {/*  <Route path="/" element={<Home />} />*/}
        {/*  /!*<Route index element={<Home />} />*!/*/}
        {/*  <Route path="settings" element={<Settings />}>*/}
        {/*    /!*<Route path=":teamId" element={<Team />} />*!/*/}
        {/*    /!*<Route path="new" element={<NewTeamForm />} />*!/*/}
        {/*    /!*<Route index element={<LeagueStandings />} />*!/*/}
        {/*    /!*</Route>*!/*/}
        {/*  </Route>*/}
        {/*</Routes>*/}
      </Container>
    </BrowserRouter>
  );
}

export default App;
