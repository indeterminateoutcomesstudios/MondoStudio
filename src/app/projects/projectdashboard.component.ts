import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './project.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './projectdashboard.component.html'
})
export class ProjectDashboardComponent implements OnInit {

  constructor(private ps: ProjectService, private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.params.switchMap(params => this.ps.retrieve({
      username: params['username'],
      project: params['project']}))
      .subscribe(project => {
        console.log(project);
      });
  }
}
