import { Component } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-accounts-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(public af: AngularFire) { }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
