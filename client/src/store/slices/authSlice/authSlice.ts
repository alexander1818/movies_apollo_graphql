import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { mainRoutes, navbarRoutes } from '../../../router/routes';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

type TLoginUser = {
  user: null | TUser;
  token: null | string;
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
};

export const auth = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<any>) {
      state.token = payload.loginUser.token;

      const decodedToken: TUser = jwtDecode(payload.loginUser.token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        toast.dark('Unauthorized');
        window.location.href = mainRoutes.login.path;
      } else {
        localStorage.setItem('token', payload.loginUser.token);
        localStorage.setItem('user', payload.loginUser.username);
        state.user = decodedToken;
        window.location.href = navbarRoutes.popularMovies.path;
      }
    },
    logOut(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const selectAuthUser = (state: RootState): TLoginUser => state.signUp;

export default auth.reducer;

export const { setUserData, logOut } = auth.actions;
