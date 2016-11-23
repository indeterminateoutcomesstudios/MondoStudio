import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
         path: 'accounts/login',
         component: LoginComponent
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class AccountsModule {}
