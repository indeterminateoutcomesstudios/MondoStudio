import { User } from '../accounts/user/user';

export class Project {
  username: string;
  slug: string;
  name: string;

  home():string {
    return `/${this.username}/${this.slug}`;
  }
}