import React, { FC } from 'react';
import { Box, Grid, Paper, styled } from '@mui/material';
import { SeletctedMovie } from './styles';
import MovieCard from '../../components/movieCard';
import { movies } from '../../stories/stub';

const Home: FC = () => {
  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box p={1}>
            <Paper>
              <Grid container display="flex" m={0.5} spacing={3}>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard movie={movies[0]} />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MovieCard movie={movies[1]} />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <SeletctedMovie>Selected movies</SeletctedMovie>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
