export interface UnauthorizedUser {
  name: string;
  login: string;
  password: string;
}

export interface AuthorizedUser {
  id: string;
  name: string;
  login: string;
  token: string;
}

export interface EditableUserData extends UnauthorizedUser {
  repeatedPassword: string;
  confirmationPassword: string;
}
