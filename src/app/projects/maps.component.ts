import { Component, OnInit, Host } from '@angular/core';

import { Router } from '@angular/router';

import { Project } from './project';

import { ProjectService } from './project.service';

import { ProjectDashboardComponent } from './projectdashboard.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  public project: Project;

  constructor(@Host() parent: ProjectDashboardComponent, ps: ProjectService, private router: Router) {
    this.project = parent.project;
    if (!parent.project.slug) {
      parent.load().then(project => {
        this.project = project;
        console.log(this.project);
        return project;
      });
    }
  }
}