import { Component } from '@angular/core';

import { AuthService } from '../../accounts';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  constructor(public auth: AuthService) { }

  signOut():void {
    this.auth.logout();
  }

  signIn():void {
    this.auth.login();
  }
}
