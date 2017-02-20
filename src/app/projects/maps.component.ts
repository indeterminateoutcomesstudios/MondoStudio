import { Component, OnInit, Host } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog } from '@angular/material';

import { Project } from './project';

import { ProjectService } from './project.service';

import { ProjectDashboardComponent } from './projectdashboard.component';

import { NewMapDialogComponent } from './map/newmap.dialog.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  public project: Project;
  protected newMapDialogRef: MdDialogRef<NewMapDialogComponent>

  constructor(@Host() parent: ProjectDashboardComponent, public dialog: MdDialog, public ps: ProjectService, private router: Router) {
    this.project = parent.project;
    if (!parent.project.slug) {
      parent.load().then(project => {
        this.project = project;
        console.log(this.project);
        return project;
      });
    }
  }

  openNewMapDialog() {
    this.newMapDialogRef = this.dialog.open(NewMapDialogComponent, {
      disableClose: false
    });

    this.newMapDialogRef.afterClosed().subscribe(result => {
      this.newMapDialogRef = null;
    });
  }
}