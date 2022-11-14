import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { navbarRoutes } from '../../../router/routes';

const initialState = {
  user: null,
  token: null,
};

export const auth = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<any>) {
      state.token = payload.loginUser.token;
      localStorage.setItem('token', payload.loginUser.token);
      window.location.href = navbarRoutes.home.path;
    },
  },
});

export const selectAuthUser = (state: RootState): any => state.signUp;

export default auth.reducer;

export const { setUserData } = auth.actions;
