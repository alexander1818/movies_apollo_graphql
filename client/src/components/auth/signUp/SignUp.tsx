import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, IconButton, InputAdornment } from '@mui/material';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { TextField } from '../../MaterialUI/textField/TextField';
import { LoginWrapper, SubmitLogin } from '../styles';

import { mainRoutes } from '../../../router/routes';

import { registerNewUser } from '../../../store/slices/authSlice/signUpSlice';
import { useAppDispatch } from '../../../hooks/redux';

import Loader from '../../MaterialUI/loader/Loader';

import { useMutation } from '@apollo/client';
import { GraphQLError } from 'graphql/error';
import { REGISTER_USER } from '../../../graphQL/mutations/auth/registerUser';

import { toast } from 'react-toastify';

type TSignIn = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onError({ graphQLErrors }) {
      graphQLErrors.forEach((error: GraphQLError) => toast.dark(error.message));
    },
  });

  const [user, setUser] = useState<TSignIn>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = () => {
    registerUser({
      variables: {
        registerInput: user,
      },
    })
      .then(({ data }) => {
        dispatch(registerNewUser());
      })
      .catch((err) => console.log('ERROR', err));
    setUser({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <LoginWrapper>
      {loading && <Loader />}
      <Box pt={2} gap={3} display={'flex'} flexDirection={'column'}>
        <TextField
          fullWidth
          hiddenLabel
          fontWeight={700}
          title={'Name'}
          name={'username'}
          value={user.username}
          placeholder={'Name'}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          hiddenLabel
          fontWeight={700}
          title={'Email'}
          name={'email'}
          value={user.email}
          placeholder={'Email'}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          hiddenLabel
          title={'Password'}
          fontWeight={700}
          name={'password'}
          placeholder={'Password'}
          value={user.password}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  arial-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          hiddenLabel
          title={'Confirm password'}
          fontWeight={700}
          name={'confirmPassword'}
          placeholder={'Confirm password'}
          value={user.confirmPassword}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  arial-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box mb={2} display="flex" justifyContent="space-between" alignItems={'center'}>
          <Link style={{ textDecoration: 'none', color: '#ffff' }} to={mainRoutes.login.path}>
            Login
          </Link>
          <SubmitLogin variant="outlined" onClick={() => onSubmitHandler()}>
            Register
          </SubmitLogin>
        </Box>
      </Box>
    </LoginWrapper>
  );
};
