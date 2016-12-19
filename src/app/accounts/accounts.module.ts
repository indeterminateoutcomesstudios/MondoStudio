import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AuthService } from './user/auth.service';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard.service';

import { FirstLoginComponent } from './firstlogin.component';
import { ProfileSettingsComponent } from './profilesettings.component';

@NgModule({
  declarations: [ FirstLoginComponent, ProfileSettingsComponent ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'accounts/settings', component: ProfileSettingsComponent, canActivate: [ AuthGuard ] },
      { path: 'accounts/welcome', component: FirstLoginComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  providers: [ AuthService, UserService, AuthGuard ]
})
export class AccountsModule {}
