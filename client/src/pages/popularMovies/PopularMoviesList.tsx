import React, { FC, ReactElement } from 'react';
import MovieCard, { TMovieType } from '../../components/movieCard';
import { Grid } from '@mui/material';

type TPopularMoviesListProps = {
  movies: TMovieType[];
  selectMovie: (movie: TMovieType) => void;
};

const PopularMoviesList = ({ movies, selectMovie }: TPopularMoviesListProps): JSX.Element => {
  return (
    <>
      {movies.map((movie: TMovieType, index: number) => (
        <Grid key={index} item xs={6} md={4} lg={3}>
          <MovieCard movie={movie} onCardSelect={selectMovie} />
        </Grid>
      ))}
    </>
  );
};

export default PopularMoviesList;
