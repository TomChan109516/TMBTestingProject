export interface IFormValues {
  userId: string;
  password: string;
}

export interface IFormErrors {
  userId: string;
  password: string;
}

export interface ILoginInitialState {
  userID: string;
  response: [];
  loader: boolean;
}

export interface ICredentials {
  userId: string;
  password: string;
  ipAddress: string;
}