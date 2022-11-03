import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_ID_QUERY } from '../home/queries';
import { useLocation } from 'react-router-dom';
import React from 'react';
import Loader from '../../components/MaterialUI/loader/Loader';

const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type TGenre = {
  id: number;
  name: string;
};

type TProductionCompanies = {
  name: string;
  id: string;
  logo_path: string;
  origin_country: string;
};

type TProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type TSpokenLangs = {
  iso_639_1: string;
  name: string;
};

type TMovieByID = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: [TGenre];
  homepage: string;
  id: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [TProductionCompanies];
  production_countries: [TProductionCountry];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [TSpokenLangs];
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const MovieDetails = () => {
  const params = useLocation();
  const id = parseInt(params.pathname.split(':')[1]);

  const { loading, error, data } = useQuery(MOVIES_BY_ID_QUERY, { variables: { id } });
  const movie: TMovieByID = data && data?.movieByID;

  return (
    <>
      {loading && <Loader />}
      {data && (
        <Grid container display="flex" justifyContent="space-between" spacing={1}>
          <Grid item lg={3}>
            <CardMedia
              component="img"
              // sx={{ width: 50 }}
              image={movie.poster_path}
              alt={movie.title}
            />
          </Grid>
          <Grid item lg={9}>
            <Typography variant="h5">
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Typography>
            <Box display={'flex'}>
              <Typography variant={'body1'}>{movie.release_date}</Typography>&nbsp; (
              <span>{movie.production_countries[0]?.iso_3166_1}</span>)&nbsp;
              {movie.genres.map((genre: TGenre) => (
                <span>{genre.name},&nbsp;</span>
              ))}
              <span>{movie.runtime} min</span>
            </Box>
            <Typography fontWeight={700} variant={'body1'}>
              Rating: {movie.vote_average.toFixed(1)}
            </Typography>{' '}
            <Typography variant={'body1'} color={'darkgray'} fontStyle={'italic'}>
              {movie.tagline}
            </Typography>
            <Typography variant={'body1'} fontStyle={'italic'}>
              Description:
            </Typography>
            <Typography variant={'body1'} color={'darkgray'}>
              {movie.overview}
            </Typography>
            <Box display={'flex'} justifyContent="space-evenly" alignItems="center">
              {movie.production_companies.map(
                (company: TProductionCompanies) =>
                  company.logo_path && (
                    <img key={company.id} src={API_IMAGE_URL + company.logo_path} />
                  )
              )}
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MovieDetails;
