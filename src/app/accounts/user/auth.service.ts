import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';

import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {
    public user:User;

    constructor(public af: AngularFire) {
        this.user = new User();

        this.user.name = 'Anonymous';
        this.user.loggedIn = false;

        this.authenticate().subscribe(user => this.user = user);
    }

    private clearLoggedUser() {
        this.user.name = 'Anonymous';
        this.user.loggedIn = false;
    }

    private authenticate():Observable<User> {
        return this.af.auth.map(auth => {
            if (auth) {
                let user = new User();

                user.name = auth.auth.providerData[0].displayName;
                user.picture = auth.auth.providerData[0].photoURL;
                user.loggedIn = true;

                return user;
            }
            return this.user;
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