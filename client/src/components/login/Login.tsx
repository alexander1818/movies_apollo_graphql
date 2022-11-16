import React, { useState } from 'react';

import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { Modal } from '../MaterialUI/modal/Modal';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphQL/queries/authQuery/login';
import { TextField } from '../MaterialUI/textField/TextField';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useAppDispatch } from '../../hooks/redux';
import { setUserData } from '../../store/slices/authSlice/authSlice';

type TLogin = {
  email: string;
  password: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const [loginUser] = useMutation(LOGIN_USER);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [user, setUser] = useState<TLogin>({ email: '', password: '' });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
        // console.log('data', data);
        dispatch(setUserData(data));
      })
      .catch((err) => console.log('ERROR', err));
    // setUser({ email: '', password: '' });
  };

  return (
    // <Modal open={true} title={'Login'} onClose={handleCloseModal} maxWidth={'lg'}>
    <>
      <Box pt={2} gap={5} display={'flex'} flexDirection={'column'}>
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
            // classes: { root: classes.inputClasses },
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
      </Box>
      <Box mt={3} mb={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={() => onSubmitHandler()}>
          Login
        </Button>
        <Button variant="outlined" color={'warning'} onClick={handleCloseModal}>
          Cancel
        </Button>
      </Box>
    </>
    // </Modal>
  );
};
