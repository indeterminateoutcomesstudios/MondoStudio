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
  public loaded:Promise<Project>;

  constructor(private ps: ProjectService, private route: ActivatedRoute, private ts: ToolbarService) {
    this.project = new Project();
    this.loaded = this.load();
    this.ts.unsetProject();
  }

  load():Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      this.route.params.switchMap(params => this.ps.retrieve({
      username: params['username'],
      project: params['project']})).subscribe(project => resolve(project));
    });
  }

  ngOnInit():void {
    this.loaded.then(project => {
      this.project = project;
      this.ts.setProject(project);
      return project;
    });
  }

  ngOnDestroy() {
    this.ts.unsetProject();
  }
}
