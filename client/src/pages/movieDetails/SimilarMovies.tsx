import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { SIMAILAR_MOVIES_QUERY } from '../home/queries';
import Loader from '../../components/MaterialUI/loader/Loader';
import MovieCard, { TMovieType } from '../../components/movieCard';
import { useMovies } from '../../hooks/useMovies/useMovies';

type TSimilarMoviesProps = {
  id: number;
};

const SimilarMovies: FC<TSimilarMoviesProps> = ({ id }) => {
  const { selectMovie } = useMovies();
  const { loading, error, data } = useQuery(SIMAILAR_MOVIES_QUERY, { variables: { id } });

  return (
    <>
      <Grid container spacing={2} p={2}>
        {loading && <Loader />}
        {data?.similarMovies.results.map((movie: TMovieType, index: number) => {
          return (
            <Grid key={index} item xs={6} md={4} lg={3}>
              <MovieCard movie={movie} onCardSelect={selectMovie} isPreviewMode={true} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SimilarMovies;
