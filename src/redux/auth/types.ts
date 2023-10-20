export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface AuthSliceState {
  user: User | null;
  isAuthorized: boolean;
}
