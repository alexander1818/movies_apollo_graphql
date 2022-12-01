import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { navbarRoutes } from '../../../router/routes';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

type TLoginUser = {
  user: null | TUser;
  token: null | string;
  refreshToken: null | string;
};

type TUser = {
  email: string;
  exp: number;
  iat: number;
  user_id: string;
};

const initialState: TLoginUser = {
  user: null,
  token: null,
  refreshToken: null,
};

export const signIn = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<any>) {
      state.token = payload.token;

      const decodedToken: TUser = jwtDecode(payload.token);
      // if (decodedToken.exp * 1000 < Date.now()) {
      // TODO: Need to fix 'Unauthorized' after google authorization

      //   localStorage.removeItem('token');
      //   toast.dark('Unauthorized');
      //   window.location.href = mainRoutes.login.path;
      // } else {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refreshToken', payload.refreshToken);
      localStorage.setItem('user', payload.username);
      window.location.href = navbarRoutes.popularMovies.path;
      // }
    },
    logOut(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
  },
});

export const selectAuthUser = (state: RootState): TLoginUser => state.signIn;

export default signIn.reducer;

export const { setUserData, logOut } = signIn.actions;
