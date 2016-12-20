import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Project } from './project';

import { ProjectService } from './project.service';

import { ToolbarService } from '../core/toolbar/toolbar.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './projectdashboard.component.html',
  styleUrls: ['./projectdashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit, OnDestroy {

  public project:Project;

  constructor(private ps: ProjectService, private route: ActivatedRoute, private ts: ToolbarService) {
    this.project = new Project();
    this.ts.unsetProject();
  }

  ngOnInit():void {
    this.route.params.switchMap(params => this.ps.retrieve({
      username: params['username'],
      project: params['project']}))
      .subscribe(project => {
        this.project = project;
        this.ts.setProject(project);
      });
  }

  ngOnDestroy() {
    this.ts.unsetProject();
  }
}
