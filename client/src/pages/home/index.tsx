import React, { FC, useState } from 'react';
import { Box, Button, Grid, Pagination, Paper, styled, Typography } from '@mui/material';
import { SeletctedMovie, StickyBox } from './styles';
import MovieCard, { TMovieType } from '../../components/movieCard';

import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies/useMovies';
import MovieCardSelected from '../../components/movieCardSelected';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SelectedMovieForm from '../../components/selectedMovieForm/SelectedMovieForm';
import { toast } from 'react-toastify';
import { Modal } from '../../components/MaterialUI/modal/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();
  const [page, setPage] = useState<number>(1);
  const [link, setLink] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const onSubmit = ({ selectedMoviesField }: any) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      window.location.host
    }/recommended?title=${selectedMoviesField}&ids=${ids.join()}`;
    setLink(link);
    setOpenModal(!openModal);
    toast.dark('Link was created');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setLink('');
  };

  if (error) {
    return 'Error';
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
                {loading
                  ? 'Loading'
                  : data.movies.results.map((movie: TMovieType, index: number) => (
                      <Grid key={index} item xs={6} md={4} lg={3}>
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
              </Grid>
            </Paper>
          </Box>
          <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={data?.movies?.totalPages}
              page={page}
              onChange={paginationHandler}
              color="secondary"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <StickyBox>
            <SeletctedMovie>
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
            <Box>{link}</Box>
            <Box mt={3} display="flex" justifyContent="space-evenly">
              <Button variant="outlined" color={'warning'} onClick={handleCloseModal}>
                Preview
              </Button>
              <CopyToClipboard text={link} onCopy={() => toast.dark('Copied')}>
                <Button variant="outlined" color={'warning'} onClick={handleCloseModal}>
                  Copy link and close modal
                </Button>
              </CopyToClipboard>
            </Box>
          </>
        </Modal>
      </Grid>
    </Box>
  );
};
export default Home;
