import React, { useCallback, useContext } from 'react';

import { AppBar, Box, Button, IconButton, Toolbar, Drawer, List, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { mainRoutes, navbarRoutes } from '../../router/routes';
import { AppContext } from '../../context/contextApp';
import { LOCALES } from '../../constants/constants';
import { TLocale } from '../../context/defaultContext';

import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../hooks/redux';
import { logOut } from '../../store/slices/authSlice/authSlice';

const Navigation = () => {
  const appDispatch = useAppDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { locale, dispatch } = useContext(AppContext);
  const setLanguage = useCallback((locale: TLocale) => {
    if (dispatch) {
      dispatch({ type: 'setLocale', locale });
    }
  }, []);

  const handler = (index: number) => {
    // console.log('click');
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Box pt={1}>
          {Object.values(navbarRoutes).map(
            ({ title, path }, index) =>
              title && (
                <Box key={path + index} data-testid={`test_link_${title}`}>
                  <Button component={Link} to={path} onClick={() => toggleDrawer()}>
                    {title}
                  </Button>
                </Box>
              )
          )}
        </Box>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ mr: 2, display: { md: 'flex', lg: 'flex' }, justifyContent: 'space-between' }}
        >
          <Hidden only={['lg', 'xl']}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <Box pt={1} display="flex">
              {Object.values(navbarRoutes).map(
                ({ title, path }, index) =>
                  title && (
                    <Box key={path + index} data-testid={`test_link_${title}`}>
                      <Button
                        style={{ color: '#fff' }}
                        component={Link}
                        to={path}
                        onClick={() => handler(index)}
                      >
                        {/*<FormattedMessage id={`navigation.${title}`} />*/}
                        {title}
                      </Button>
                    </Box>
                  )
              )}
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant={'text'}
              color={'inherit'}
              disabled={locale === LOCALES.en}
              onClick={() => setLanguage(LOCALES.en)}
            >
              En
            </Button>
            |
            <Button
              variant={'text'}
              color={'inherit'}
              disabled={locale === LOCALES.uk}
              onClick={() => setLanguage(LOCALES.uk)}
            >
              UK
            </Button>
          </Box>

          <Button
            component={Link}
            to={mainRoutes.login.path}
            color="inherit"
            onClick={() => appDispatch(logOut())}
          >
            <LogoutIcon />
          </Button>
        </Toolbar>

        <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => toggleDrawer()}>
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navigation;
