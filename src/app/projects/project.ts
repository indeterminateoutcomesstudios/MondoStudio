import { User } from '../accounts/user/user';

import { Map } from './map';

export class Project {
  username: string;
  slug: string;
  name: string;
  maps?: Array<Map>;

  home():string {
    return `/${this.username}/${this.slug}`;
  }
}