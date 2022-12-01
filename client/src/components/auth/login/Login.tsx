import React, { useState } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import { GraphQLClient } from 'graphql-request';
import { useMutation } from '@apollo/client';
import { GraphQLError } from 'graphql/error';

import { Link } from 'react-router-dom';

import { Box, IconButton, InputAdornment } from '@mui/material';
import { TextField } from '../../MaterialUI/textField/TextField';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import Loader from '../../MaterialUI/loader/Loader';

import { useAppDispatch } from '../../../hooks/redux';
import { setUserData } from '../../../store/slices/authSlice/authSlice';

import { LoginWrapper, SubmitLogin } from '../styles';

import { mainRoutes } from '../../../router/routes';

import { toast } from 'react-toastify';

import { LOGIN_USER } from '../../../graphQL/mutations/auth/login';
import { GOOGLE_LOGIN_USER } from '../../../graphQL/queries/googleAuth/googleAuth';

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

  const onSuccess = async (tokenResponse: CredentialResponse) => {
    try {
      const idToken = await tokenResponse.credential;
      const authorizationHeaders = {
        authorization: `Bearer ${idToken}`,
      };

      const client = new GraphQLClient('http://localhost:5000/', {
        headers: { ...authorizationHeaders },
      });

      const { googleLoginUser } = await client.request(GOOGLE_LOGIN_USER);
      dispatch(setUserData({ ...googleLoginUser }));
    } catch (err) {
      console.log('ERR ==>', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = () => {
    loginUser({
      variables: {
        loginInput: user,
      },
    })
      .then(({ data }) => {
        dispatch(setUserData({ ...data.loginUser }));
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
          <Link style={{ textDecoration: 'none', color: '#ffff' }} to={mainRoutes.signUp.path}>
            Sign up
          </Link>
          <SubmitLogin variant="outlined" onClick={() => onSubmitHandler()}>
            Login
          </SubmitLogin>
        </Box>
        <Box>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              onSuccess(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </Box>
      </Box>
    </LoginWrapper>
  );
};
