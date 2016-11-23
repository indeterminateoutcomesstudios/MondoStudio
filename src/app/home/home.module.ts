import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../accounts/auth-guard.service';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class HomeModule { }
