import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { mainRoutes, navbarRoutes } from '../../../router/routes';

type TSignInUser = {
  username: string;
  user: string;
  token: string;
};

const initialState: TSignInUser = {
  username: '',
  user: '',
  token: '',
};

export const signIn = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    registerNewUser(state) {
      // window.location.href = mainRoutes.login.path;
    },
  },
});

export const selectSignIn = (state: RootState): TSignInUser => state.signIn;

export default signIn.reducer;

export const { registerNewUser } = signIn.actions;
