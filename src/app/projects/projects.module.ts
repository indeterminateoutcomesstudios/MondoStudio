import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ProjectService } from './project.service';

import { AuthGuard } from '../accounts/auth-guard.service';

import { ProjectDashboardComponent } from './projectdashboard.component';

@NgModule({
  declarations: [ ProjectDashboardComponent ],
  imports: [
    RouterModule.forRoot([
      { path: ':username/:project', component: ProjectDashboardComponent }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ ProjectService, AuthGuard ]
})
export class ProjectsModule { }