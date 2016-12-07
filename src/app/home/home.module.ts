import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthGuard, AuthService } from '../accounts';

import { WelcomeComponent } from './welcome.component';
import { DashboardComponent } from './dashboard.component';
import { NewProjectDialogComponent } from './newproject.dialog.component';

@NgModule({
  declarations: [ WelcomeComponent, DashboardComponent, NewProjectDialogComponent ],
  entryComponents: [ NewProjectDialogComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ AuthService, AuthGuard ]
})
export class HomeModule { }
