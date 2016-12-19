import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard, AuthService } from '../accounts';
import { ProjectService } from '../projects/project.service';

import { WelcomeComponent } from './welcome.component';
import { DashboardComponent } from './dashboard.component';
import { NewProjectDialogComponent } from './newproject.dialog.component';

@NgModule({
  declarations: [ WelcomeComponent, DashboardComponent, NewProjectDialogComponent ],
  entryComponents: [ NewProjectDialogComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ AuthService, AuthGuard, ProjectService ]
})
export class HomeModule { }
