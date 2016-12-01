import { Component } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent {
  public user:{ displayName:string, photoUrl:string, loggedIn:boolean } = {
    displayName: null,
    photoUrl: null,
    loggedIn: false
  };

  constructor(public af:AngularFire) {
    af.auth.subscribe(auth => {
      if (auth) {
        this.user.displayName = auth.google.displayName;
        this.user.photoUrl = auth.google.photoURL;
        this.user.loggedIn = true;
      }
      else {
        this.user.displayName = null;
        this.user.photoUrl = null;
        this.user.loggedIn = false;
      }
    });
  }
}