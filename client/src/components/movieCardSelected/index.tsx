import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import { TMovieType } from '../movieCard';
import { useTheme } from '@mui/material/styles';
import { CardMenu } from '../MaterialUI/cardMenu/CardMenu';

type TGenre = {
  name: string;
  id: number;
};

export type TMovieCardSelectedProps = {
  movie: TMovieType;
  onDelete: (movie: TMovieType) => void;
};

const MovieCardSelected: FC<TMovieCardSelectedProps> = ({ movie, onDelete }) => {
  const handleDeleteMovie = (movie: TMovieType) => {
    onDelete(movie);
  };
  return (
    <Card sx={{ display: 'flex', position: 'relative' }}>
      <CardMedia component="img" sx={{ width: 100 }} image={movie.posterPath} alt={movie.title} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          {/*{movie?.genre && movie?.genre?.length ? (*/}
          {/*  <Typography variant="subtitle1" color="text.secondary" component="div">*/}
          {/*    Genre: {movie.genre[0]?.name}*/}
          {/*  </Typography>*/}
          {/*) : null}*/}
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {/*Time: {movie.runtime}*/}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <CardMenu text={'Delete'} onCardSelect={() => handleDeleteMovie(movie)} />
        {/*<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>*/}
        {/*  <IconButton aria-label="previous">*/}
        {/*    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}*/}
        {/*  </IconButton>*/}
        {/*  <IconButton aria-label="play/pause">*/}
        {/*    <PlayArrowIcon sx={{ height: 38, width: 38 }} />*/}
        {/*  </IconButton>*/}
        {/*  <IconButton aria-label="next">*/}
        {/*    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}*/}
        {/*  </IconButton>*/}
        {/*</Box>*/}
      </Box>
    </Card>
  );
};

export default MovieCardSelected;
