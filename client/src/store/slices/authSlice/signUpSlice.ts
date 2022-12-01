import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { mainRoutes, navbarRoutes } from '../../../router/routes';

type TSignUpUser = {
  username: string;
  user: string;
  token: string;
};

const initialState: TSignUpUser = {
  username: '',
  user: '',
  token: '',
};

export const signUp = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    registerNewUser(state) {
      window.location.href = mainRoutes.login.path;
    },
  },
});

export const selectSignUp = (state: RootState): TSignUpUser => state.signUp;

export default signUp.reducer;

export const { registerNewUser } = signUp.actions;
