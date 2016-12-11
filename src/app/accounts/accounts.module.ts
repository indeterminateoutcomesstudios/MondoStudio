import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from './user/auth.service';
import { AuthGuard } from './auth-guard.service';

import { FirstLoginComponent } from './firstlogin.component';
import { ProfileSettingsComponent } from './profilesettings.component';

@NgModule({
  declarations: [ FirstLoginComponent, ProfileSettingsComponent ],
  imports: [
    RouterModule.forRoot([
      { path: 'accounts/settings', component: ProfileSettingsComponent, canActivate: [ AuthGuard ] },
      { path: 'accounts/welcome', component: FirstLoginComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  providers: [ AuthService, AuthGuard ]
})
export class AccountsModule {}
