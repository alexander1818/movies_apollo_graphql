import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import signInReducer from './slices/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    signUp: signInReducer,
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
