import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS, MOVIES_QUERY } from './queries';

import MovieCard, { TMovieType } from '../../components/movieCard';
import MovieCardSelected from '../../components/movieCardSelected';
import SelectedMovieForm, {
  TFormValues,
} from '../../components/selectedMovieForm/SelectedMovieForm';
import { Modal } from '../../components/MaterialUI/modal/Modal';
import Loader from '../../components/MaterialUI/loader/Loader';
import { SocialShare } from '../../components/socialShare/SocialShare';

import { AppContext } from '../../context/contextApp';
import { mainRoutes } from '../../router/routes';

import { useMovies } from '../../hooks/useMovies/useMovies';

import { Box, Button, Grid, Pagination, Paper, TextField, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import { SeletctedMovie, StickyBox } from './styles';
import { CREATE_USER } from '../../mutations/createUser';

const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const [page, setPage] = useState<number>(1);
  const [link, setLink] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });
  console.log(data);
  // const { data: usData } = useQuery(CREATE_USER, {
  //   variables: { input: { userName: 'Testww', age: '23' } },
  // });

  // const { data: userData } = useQuery(GET_ALL_USERS);
  // const [createUser] = useMutation(CREATE_USER);
  // console.log(userData);

  const { locale } = useContext(AppContext);
  const host = `${window.location.host}`;

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const onSubmit = ({ selectedMoviesField }: TFormValues) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      mainRoutes.recommended.path
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
    return 'Error';
  }

  const [user, setUser] = useState({ userName: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    console.log('user', user);
    // createUser({
    //   variables: {
    //     input: user,
    //   },
    // }).then(({ data }) => console.log('data', data));
    // // setUser({ userName: '', age: 0 });
  };

  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Modal open={false} title={'Create new user'} onClose={handleCloseModal} maxWidth={'lg'}>
        <>
          <Box pt={2}>
            <TextField
              id="outlined-name"
              label="name"
              name={'userName'}
              value={user.userName}
              onChange={handleChange}
            />
            <TextField
              id="outlined-name"
              label="age"
              name={'age'}
              value={user.age}
              onChange={handleChange}
            />
          </Box>
          <Box mt={3} mb={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => onSubmitHandler()}>
              Add user
            </Button>
            {/*<CopyToClipboard text={link} onCopy={() => toast.dark('Copied')}>*/}
            {/*  <Button variant="outlined" color={'warning'} onClick={handleCloseModal}>*/}
            {/*    Copy link and close modal*/}
            {/*  </Button>*/}
            {/*</CopyToClipboard>*/}
          </Box>
        </>
      </Modal>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filter section</Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box mt={2}>
            <Paper>
              <Grid container spacing={2} p={2}>
                {loading && <Loader />}
                {data?.popularMovies.results.map((movie: TMovieType, index: number) => {
                  return (
                    <Grid key={index} item xs={6} md={4} lg={3}>
                      <MovieCard movie={movie} onCardSelect={selectMovie} />
                    </Grid>
                  );
                })}
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
