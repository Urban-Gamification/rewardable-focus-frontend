import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/slice';
import messagesSlice from './messages/slice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [messagesSlice.name]: messagesSlice.reducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
