import { RootState } from '../store';

export const getUserCredentials = (state: RootState) => state.auth.user;
