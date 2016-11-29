import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AuthGuard } from '../accounts/auth-guard.service';

import { WelcomeComponent } from './welcome.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [ WelcomeComponent, DashboardComponent ],
  imports: [
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class HomeModule { }
