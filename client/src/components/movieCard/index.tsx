import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CardMenu } from '../MaterialUI/cardMenu/CardMenu';
import { AddMovieIcon, CardMenuWrapper, CardTitle } from './styles';
import { dashBoardRoutes } from '../../router/routes';
import MovieDetails from '../../pages/movieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';

export type TMovieType = {
  id: number;
  posterPath: string;
  title: string;
  description: string;
  genre_ids?: [number];
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
        <CardTitle
          to={`movie-details:${movie.id}`}
          target={'_blank'}
          // onClick={() => handleAddMovie(movie)}
        >
          {movie.title}
        </CardTitle>
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
