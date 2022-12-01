import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useQuery } from '@apollo/client';

import { TMovieType } from '../../components/movieCard';
import MovieCardSelected from '../../components/movieCardSelected';
import SelectedMovieForm, {
  TFormValues,
} from '../../components/selectedMovieForm/SelectedMovieForm';
import { Modal } from '../../components/MaterialUI/modal/Modal';
import Loader from '../../components/MaterialUI/loader/Loader';
import { SocialShare } from '../../components/socialShare/SocialShare';

import { AppContext } from '../../context/contextApp';
import { dashBoardRoutes } from '../../router/routes';

import { useMovies } from '../../hooks/useMovies/useMovies';

import { Box, Button, Grid, Pagination, Paper, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import { SeletctedMovie, StickyBox } from './styles';

import { MOVIES_QUERY } from '../../graphQL/queries/movieQuery/queries';
import PopularMoviesList from './PopularMoviesList';

const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const [page, setPage] = useState<number>(1);
  const [link, setLink] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });

  const { locale } = useContext(AppContext);
  const host = `${window.location.host}`;

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const onSubmit = ({ selectedMoviesField }: TFormValues) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      dashBoardRoutes.recommended.path
    }?title=${selectedMoviesField}&locale=${locale}&ids=${ids.join()}`;
    setLink(link);
    setOpenModal(!openModal);
    toast.dark('Link was created');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setLink('');
  };

  if (error) {
    return (
      <>
        <Typography variant="h3">Error</Typography>
        {toast.dark('Something went wrong')}
      </>
    );
  }

  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box mt={2}>
            <Paper>
              <Grid container spacing={2} p={2}>
                {loading && <Loader />}
                {data && (
                  <PopularMoviesList
                    movies={data.popularMovies.results}
                    selectMovie={selectMovie}
                  />
                )}
              </Grid>
            </Paper>
          </Box>
          <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={data?.popularMovies.totalPages}
              page={page}
              onChange={paginationHandler}
              color="secondary"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <StickyBox>
            <SeletctedMovie>
              {selectedMovies.length ? (
                <Typography variant="caption" color="gray">
                  Selected movies: {selectedMovies.length}
                </Typography>
              ) : null}
              {!selectedMovies.length ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  p={3}
                >
                  <LiveTvIcon />
                  <Typography variant="body2">No selected movies</Typography>
                </Box>
              ) : (
                selectedMovies.map((movie: TMovieType) => (
                  <MovieCardSelected key={movie.id} movie={movie} onDelete={deleteMovie} />
                ))
              )}
            </SeletctedMovie>
            {selectedMovies.length ? <SelectedMovieForm onSubmit={onSubmit} /> : null}
          </StickyBox>
        </Grid>
        <Modal
          open={openModal}
          title={'Recommended movies link'}
          onClose={handleCloseModal}
          maxWidth={'lg'}
        >
          <>
            <Box>{host + link}</Box>
            <Box mt={3} mb={2} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                component={Link}
                color={'warning'}
                to={link}
                target={'_blank'}
              >
                Preview
              </Button>
              <CopyToClipboard text={link} onCopy={() => toast.dark('Copied')}>
                <Button variant="outlined" color={'warning'} onClick={handleCloseModal}>
                  Copy link and close modal
                </Button>
              </CopyToClipboard>
            </Box>
            <SocialShare link={link} title={'Title'} />
          </>
        </Modal>
      </Grid>
    </Box>
  );
};
export default Home;
