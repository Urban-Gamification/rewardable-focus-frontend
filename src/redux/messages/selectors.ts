import { RootState } from '../store';

export const getMessages = (state: RootState) => state.messages.messages;
export const getCurrentCount = (state: RootState) => state.messages.counter;
