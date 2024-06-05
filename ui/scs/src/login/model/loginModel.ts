export interface IFormValues {
  userId: string;
  password: string;
}

export interface IFormErrors {
  userId: string;
  password: string;
  centerID: string;
}

export interface ILoginInitialState {
  userID: string;
  centreId: string;
  response: [];
  centres: ICentres[] | null;
  loader: boolean;
}
export interface ICentres {
  centreId: string;
  centreCode:string;
  centreName: string;
}
export interface ICredentials {
  userName: string;
  password: string;
  centreId: string;
}