import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from '../home/queries';
import { useMovies } from '../../hooks/useMovies/useMovies';
import { useSearchParams } from 'react-router-dom';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Loader from '../../components/MaterialUI/loader/Loader';
import MovieCard, { TMovieType } from '../../components/movieCard';
import React from 'react';

const Recommended = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const [params, setParams] = useSearchParams();
  const ids = new URLSearchParams(params)
    .get('ids')
    ?.split(',')
    .map((id) => parseInt(id));
  const title = new URLSearchParams(params).get('title');

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids } });

  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Box mt={2}>
        <Paper>
          <Grid container spacing={2} p={2}>
            {loading && <Loader />}
            {data &&
              data.moviesByIds.map((movie: TMovieType, index: number) => (
                <Grid key={index} item xs={12} md={3} lg={2}>
                  <MovieCard movie={movie} onCardSelect={selectMovie} isPreviewMode />
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default Recommended;
