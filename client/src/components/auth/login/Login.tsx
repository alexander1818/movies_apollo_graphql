import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Box, IconButton, InputAdornment } from '@mui/material';
import { TextField } from '../../MaterialUI/textField/TextField';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import Loader from '../../MaterialUI/loader/Loader';

import { useAppDispatch } from '../../../hooks/redux';
import { setUserData } from '../../../store/slices/authSlice/authSlice';

import { LoginWrapper, SubmitLogin } from '../styles';

import { mainRoutes } from '../../../router/routes';

import { useMutation } from '@apollo/client';
import { GraphQLError } from 'graphql/error';
import { LOGIN_USER } from '../../../graphQL/mutations/auth/login';

import { toast } from 'react-toastify';

type TLogin = {
  email: string;
  password: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onError({ graphQLErrors }) {
      graphQLErrors.forEach((error: GraphQLError) => toast.dark(error.message));
    },
  });

  const [user, setUser] = useState<TLogin>({ email: '', password: '' });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(user);
  const onSubmitHandler = () => {
    loginUser({
      variables: {
        loginInput: user,
      },
    })
      .then(({ data }) => {
        dispatch(setUserData(data));
      })
      .catch((err) => console.log('ERROR', err));
    setUser({ email: '', password: '' });
  };

  return (
    <LoginWrapper>
      {loading && <Loader />}
      <Box pt={2} gap={3} display={'flex'} flexDirection={'column'}>
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
        <Box mb={2} display="flex" justifyContent="space-between" alignItems={'center'}>
          <Link style={{ textDecoration: 'none', color: '#ffff' }} to={mainRoutes.signIn.path}>
            Sign in
          </Link>
          <SubmitLogin variant="outlined" onClick={() => onSubmitHandler()}>
            Login
          </SubmitLogin>
        </Box>
      </Box>
    </LoginWrapper>
  );
};
