import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardMenu } from '../MaterialUI/cardMenu/CardMenu';

export type TMovieType = {
  image: string;
  title: string;
  description: string;
  releaseDate?: string;
};

type TMovieTypeProps = {
  size?: string;
  label?: string;
  primary?: boolean;
  movie: TMovieType;
  onCardSelect?: () => void;
};

export const MovieCard: FC<TMovieTypeProps> = ({ movie, onCardSelect }) => {
  const handleAddMovie = () => {
    console.log('Added');
  };

  return (
    <Card sx={{ maxWidth: 230, position: 'relative' }}>
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

      <CardMenu text={'Add'} onCardSelect={handleAddMovie} />

      <CardMedia component="img" height="350" image={movie.image} alt={movie.title} />

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
