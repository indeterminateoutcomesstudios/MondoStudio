import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterState } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarService } from '../core/toolbar/toolbar.service';
import { ProjectService } from './project.service';
import { MapService } from './map.service';
import { AuthGuard } from '../accounts/auth-guard.service';

import { ProjectDashboardComponent } from './projectdashboard.component';
import { OverviewComponent } from './overview.component';
import { SettingsComponent } from './settings.component';
import { MapsComponent } from './maps.component';

import { MapComponent } from './map/map.component';
import { NewMapDialogComponent } from './map/newmap.dialog.component';

@NgModule({
  declarations: [ ProjectDashboardComponent, OverviewComponent, SettingsComponent, MapsComponent, MapComponent, NewMapDialogComponent ],
  entryComponents: [ NewMapDialogComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    RouterModule.forRoot([{
      path: ':username/:project',
      component: ProjectDashboardComponent,
      canActivate: [ AuthGuard ],
      children: [
        { path: '', component: OverviewComponent, canActivate: [ AuthGuard ] },
        { path: 'maps', component: MapsComponent, canActivate: [ AuthGuard ] },
        { path: 'settings', component: SettingsComponent, canActivate: [ AuthGuard ] }
      ]
    },
    {
      path: ':username/:project/map/:map',
      component: MapComponent,
      canActivate: [ AuthGuard ]
    }])
  ],
  exports: [ RouterModule ],
  providers: [ ProjectService, MapService, AuthGuard, ToolbarService ]
})
export class ProjectsModule { }