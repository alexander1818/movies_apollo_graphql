import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CardMenu } from '../MaterialUI/cardMenu/CardMenu';
import { AddMovieIcon, CardMenuWrapper } from './styles';

export type TMovieType = {
  id: number;
  posterPath: string;
  title: string;
  description: string;
  releaseDate?: string;
};

type TMovieTypeProps = {
  movie: TMovieType;
  onCardSelect: (movie: TMovieType) => void;
  isPreviewMode?: boolean;
};

export const MovieCard: FC<TMovieTypeProps> = ({ movie, onCardSelect, isPreviewMode }) => {
  const handleAddMovie = (movie: TMovieType) => {
    onCardSelect(movie);
  };

  return (
    <Card sx={{ position: 'relative' }}>
      {/*<CardHeader*/}
      {/*  avatar={*/}
      {/*    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">*/}
      {/*      R*/}
      {/*    </Avatar>*/}
      {/*  }*/}
      {/*  action={*/}
      {/*    <IconButton aria-label="settings">*/}
      {/*      <MoreVertIcon />*/}
      {/*    </IconButton>*/}
      {/*  }*/}
      {/*  title="Shrimp and Chorizo Paella"*/}
      {/*  subheader="September 14, 2016"*/}
      {/*/>*/}

      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="350" image={movie.posterPath} alt={movie.title} />
        {!isPreviewMode && (
          <CardMenuWrapper>
            <AddMovieIcon onClick={() => handleAddMovie(movie)} />
          </CardMenuWrapper>
        )}
      </Box>
      <CardContent>
        <Typography variant="h5" color="text.warning">
          {movie.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.description}
        </Typography>
        <Typography variant="caption" fontWeight={900} color="text.primary">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
