import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSliceState, User } from './types';

const initialState: AuthSliceState = {
  user: null,
  isAuthorized: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setAnonymous(state) {
      state.user = null;
      state.isAuthorized = false;
    }
  }
});

export const { setAuthenticated, setAnonymous } = authSlice.actions;

export default authSlice;
