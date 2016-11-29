import { Component } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  public user = {
    displayName: "loading...",
    photoUrl: "",
    loggedIn: false
  };

  constructor(public af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      if (auth) {
        this.user.displayName = auth.google.displayName;
        this.user.photoUrl = auth.google.photoURL;
        this.user.loggedIn = true;
      } else {
        this.user.displayName = "Anonymous";
        this.user.photoUrl = "";
        this.user.loggedIn = false;
      }
    });
  }

  signOut():void {
    this.af.auth.logout();
  }

  signIn():void {
    this.af.auth.login();
  }
}
