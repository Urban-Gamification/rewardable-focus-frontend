export interface User {
  username: string;
  did: string;
  pfp: string | null;
}

export interface AuthSliceState {
  user: User | null;
  isAuthorized: boolean;
}
