import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import signUpReducer from './slices/authSlice/authSlice';
import signInReducer from './slices/authSlice/signInSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
