import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFire } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  private loggedIn: boolean;

  constructor(public af: AngularFire, public router: Router) {
    af.auth.subscribe(user => {
      if (user) {
        this.loggedIn = true;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.auth.map((auth) => {
      if (!auth) {
        this.router.navigateByUrl('accounts/login');
        return false;
      }
      return true;
    }).take(1);
  }
}
