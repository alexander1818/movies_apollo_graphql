import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';

const Home: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Filter section
        </Grid>
        <Grid item xs={12} md={8}>
          List of movies
        </Grid>
        <Grid item xs={12} md={4}>
          Selected movies
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
