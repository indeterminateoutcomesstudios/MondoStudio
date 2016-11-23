import { Component } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  public user = {
    displayName: "loading...",
    photoUrl: ""
  };

  constructor(public af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      this.user = {
        displayName: auth.google.displayName,
        photoUrl: auth.google.photoURL
      };
    });
  }
}
