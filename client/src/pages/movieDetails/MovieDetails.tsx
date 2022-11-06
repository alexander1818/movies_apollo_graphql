import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_ID_QUERY } from '../home/queries';
import { Params, useLocation, useParams, useSearchParams } from 'react-router-dom';
import React from 'react';
import Loader from '../../components/MaterialUI/loader/Loader';
import SimilarMovies from './SimilarMovies';
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
  const { id } = useParams<{ id: string }>();
  const idInt = id && parseInt(id);

  const { loading, error, data } = useQuery(MOVIES_BY_ID_QUERY, { variables: { id: idInt } });
  const movie: TMovieByID = data && data?.movieByID;

  return (
    <>
      {loading && <Loader />}
      {data && (
        <Grid container display="flex" justifyContent="space-between" spacing={1}>
          <Grid item lg={3} sx={{ filter: 'drop-shadow(2px 4px 6px grey)' }}>
            <CardMedia
              component="img"
              sx={{ height: '100%' }}
              image={movie.poster_path}
              alt={movie.title}
            />
          </Grid>
          <GridMui item lg={9} image={movie.backdrop_path}>
            <Box
              p={2}
              gap={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              sx={{ height: '100%', background: 'rgba(0,0,0,0.2)' }}
            >
              <Typography variant="h5" sx={{ color: '#fff' }}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </Typography>
              <Box display={'flex'} style={{ color: '#fff' }}>
                <Typography variant={'body1'}>{movie.release_date}</Typography>
                &nbsp; (<span>{movie.production_countries[0]?.iso_3166_1}</span>
                )&nbsp;
                {movie.genres.map((genre: TGenre) => (
                  <span key={genre.id}>{genre.name},&nbsp;</span>
                ))}
                <span>{movie.runtime} min</span>
              </Box>
              <Typography sx={{ color: '#fff' }} fontWeight={700} variant={'body1'}>
                Rating: {movie.vote_average.toFixed(1)}
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
                {movie.production_companies.map(
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
    </>
  );
};

export default MovieDetails;
