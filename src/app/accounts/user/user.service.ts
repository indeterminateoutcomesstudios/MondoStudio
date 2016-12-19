import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { User } from './user';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  public user:User;

  constructor(public af:AngularFire) {}

  save() {
    return this.af.database.object("/profile/" + this.user.id).update(this.user);
  }

  retrieve():Observable<User> {
    return this.af.database.object("/profile/" + this.user.id).map(value => {
      let user = new User();
      user.id = value.$key;
      user.name = value.name;
      user.username = value.username;
      return user;
    });
  }

  hasUsername():Observable<boolean> {
    return this.af.database.list("/profile", {
      query: {
        orderByChild: 'username',
        equalTo: this.user.username
      }
    }).map(result => {
      if (result.length > 0) {
        if (result[0].$key == this.user.id) {
          return false;
        }
        return true;
      }
      return false;
    });
  }
}