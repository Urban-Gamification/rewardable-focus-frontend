import { MessagesSliceState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: MessagesSliceState = {
  counter: 0,
  messages: []
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    incrementCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
    addMessage(state, action: PayloadAction<string>) {
      state.messages.push(action.payload);
    }
  }
});

export const { incrementCounter, addMessage } = messagesSlice.actions;

export default messagesSlice;
