export class Auth {
  user: User;
  loggedIn: boolean;
  picture: string;
}

export class User {
  id: string;
  name: string;
  username: string;
}