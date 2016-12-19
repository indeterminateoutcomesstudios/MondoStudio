import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';

import { Auth, User } from './user';

import { UserService } from './user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/expand';

@Injectable()
export class AuthService {
  public auth:Auth;

  constructor(public af: AngularFire, public us: UserService) {
    this.auth = new Auth();

    this.auth.user = new User();
    this.auth.loggedIn = false;

    this.authenticate().subscribe(auth => this.auth = auth);
  }

  private clearLoggedUser() {
    this.auth.user = new User();
    this.auth.picture = null;
    this.auth.loggedIn = false;
  }

  private authenticate():Observable<Auth> {
    return this.retrieve();
  }

  public retrieve():Observable<Auth> {
    return this.af.auth.map(obj => {
      let auth = new Auth();
      auth.user = new User();
      auth.user.id = obj.uid;

      auth.picture = obj.auth.providerData[0].photoURL;
      auth.loggedIn = true;

      return auth;
    }).switchMap((auth, i) => {
      this.us.user = auth.user;
      return this.us.retrieve().map((user) => {
        auth.user = user;
        return auth;
      });
    });
  }

  public checkLogin():Observable<boolean> {
    return this.af.auth.map(auth => {
      if (auth) {
        return !auth.auth.isAnonymous;
      }
      return false;
    }).take(1);
  }

  public login():void {
    this.af.auth.login();
  }

  public logout():void {
    this.af.auth.logout();
    this.clearLoggedUser();
  }
}