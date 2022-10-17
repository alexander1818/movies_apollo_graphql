import React from 'react';

import { AppBar, Box, Button, IconButton, Toolbar, Drawer, List, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import { dashBoardRoutes } from '../../router/routes';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Box pt={1}>
          {Object.values(dashBoardRoutes).map(({ title, path }, index) => (
            <Box key={title} data-testid={`test_link_${title}`}>
              <Button
                // className={pathname === path ? classes.custom_link_clicked : classes.custom_link}
                component={Link}
                to={path}
                // startIcon={<Icon color={pathname === path ? colors.blue : colors.blackBeauty} />}
                onClick={() => toggleDrawer()}
              >
                {title}
              </Button>
            </Box>
          ))}
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
              {Object.values(dashBoardRoutes).map(({ title, path }, index) => (
                <Box key={title} data-testid={`test_link_${title}`}>
                  <Button
                    style={{ color: '#fff' }}
                    // className={pathname === path ? classes.custom_link_clicked : classes.custom_link}
                    component={Link}
                    to={path}
                    // startIcon={<Icon color={pathname === path ? colors.blue : colors.blackBeauty} />}
                    // onClick={() => handler(index)}
                  >
                    {title}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>

        <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => toggleDrawer()}>
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navigation;
