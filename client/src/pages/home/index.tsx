import React, { FC, useState } from 'react';
import { Box, Grid, Pagination, Paper, styled, Typography } from '@mui/material';
import { SeletctedMovie, StickyBox } from './styles';
import MovieCard, { TMovieType } from '../../components/movieCard';

import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies/useMovies';
import MovieCardSelected from '../../components/movieCardSelected';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  if (error) {
    return 'Error';
  }

  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box mt={2}>
            <Paper>
              <Grid container spacing={2} p={2}>
                {loading
                  ? 'Loading'
                  : data.movies.results.map((movie: TMovieType, index: number) => (
                      <Grid key={index} item xs={6} md={4} lg={3}>
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
              </Grid>
            </Paper>
          </Box>
          <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={data?.movies?.totalPages}
              page={page}
              onChange={paginationHandler}
              color="secondary"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <StickyBox>
            <SeletctedMovie>
              {!selectedMovies.length ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  p={3}
                >
                  <LiveTvIcon />
                  <Typography variant="body2">No selected movies</Typography>
                </Box>
              ) : (
                selectedMovies.map((movie: TMovieType) => (
                  <MovieCardSelected key={movie.id} movie={movie} onDelete={deleteMovie} />
                ))
              )}
            </SeletctedMovie>
          </StickyBox>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
