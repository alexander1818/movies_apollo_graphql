import React from 'react';

import { useQuery } from '@apollo/client';
import { MOVIE_BY_ID_QUERY } from '../../graphQL/queries/movieQuery/queries';

import { useParams } from 'react-router-dom';

import Loader from '../../components/MaterialUI/loader/Loader';
import SimilarMovies from './SimilarMovies';

import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { GridMui } from './styles';

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
  backdropPath: string;
  budget: number;
  genres: [TGenre];
  homepage: string;
  id: string;
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: [TProductionCompanies];
  productionCountries: [TProductionCountry];
  releaseDate: string;
  revenue: number;
  runtime: number;
  spokenLanguages: [TSpokenLangs];
  tagline: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const idInt = id && parseInt(id);

  const { loading, error, data } = useQuery(MOVIE_BY_ID_QUERY, { variables: { id: idInt } });
  const movie: TMovieByID = data && data?.getMovieById;

  return (
    <Box mt={1}>
      {loading && <Loader />}
      {data && (
        <Grid container display="flex" justifyContent="space-between" spacing={1}>
          <Grid item lg={3} sx={{ filter: 'drop-shadow(2px 4px 6px grey)' }}>
            <CardMedia
              component="img"
              sx={{ height: '100%' }}
              image={movie.posterPath}
              alt={movie.title}
            />
          </Grid>
          <GridMui item lg={9} image={movie.backdropPath}>
            <Box
              p={2}
              gap={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              sx={{ height: '100%', background: 'rgba(0,0,0,0.2)' }}
            >
              <Typography variant="h5" sx={{ color: '#fff' }}>
                {movie.title} ({movie.releaseDate.slice(0, 4)})
              </Typography>
              <Box display={'flex'} style={{ color: '#fff' }}>
                <Typography variant={'body1'}>{movie.releaseDate}</Typography>
                &nbsp; (<span>{movie.productionCountries[0]?.iso_3166_1}</span>
                )&nbsp;
                {movie.genres.map((genre: TGenre) => (
                  <span key={genre.id}>{genre.name},&nbsp;</span>
                ))}
                <span>{movie.runtime} min</span>
              </Box>
              <Typography sx={{ color: '#fff' }} fontWeight={700} variant={'body1'}>
                Rating: {movie.voteAverage.toFixed(1)}
              </Typography>{' '}
              <Typography variant={'body1'} sx={{ color: '#fff' }} fontStyle={'italic'}>
                {movie.tagline}
              </Typography>
              <Typography sx={{ color: '#fff' }} variant={'body1'}>
                Description:
              </Typography>
              <Typography variant={'body1'} sx={{ color: '#fff' }}>
                {movie.overview}
              </Typography>
              <Box display={'flex'} justifyContent="space-evenly" alignItems="center">
                {movie.productionCompanies.map(
                  (company: TProductionCompanies) =>
                    company.logo_path && (
                      <img key={company.id} src={API_IMAGE_URL + company.logo_path} />
                    )
                )}
              </Box>
            </Box>
          </GridMui>
        </Grid>
      )}
      <Box mt={3}>
        <Typography fontWeight={700} variant={'h5'} color={'darkgray'}>
          Similar movies
        </Typography>
      </Box>
      <Box style={{ overflow: 'auto', height: 500 }}>
        <SimilarMovies id={idInt} />
      </Box>
    </Box>
  );
};

export default MovieDetails;
