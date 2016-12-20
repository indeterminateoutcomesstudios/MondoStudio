import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { ToolbarService } from '../core/toolbar/toolbar.service';

import { ProjectService } from './project.service';

import { AuthGuard } from '../accounts/auth-guard.service';

import { ProjectDashboardComponent } from './projectdashboard.component';

@NgModule({
  declarations: [ ProjectDashboardComponent ],
  imports: [
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: ':username/:project', component: ProjectDashboardComponent }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ ProjectService, AuthGuard, ToolbarService ]
})
export class ProjectsModule { }