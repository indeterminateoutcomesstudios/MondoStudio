import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Project } from './project';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {
  
  public project: Project;

  constructor(public af:AngularFire) { }

  retrieve(params:{ username:string, project:string }):Observable<Project> {
    return this.af.database.object("/project/" + params.username + "/" + params.project).map(value => {
      let project = new Project();
      project.name = value.name;
      project.slug = value.slug;
      project.username = value.username;
      return project;
    });
  }

  save() {
    return this.af.database.object("/project/" + this.project.username + "/" + this.project.slug).update(this.project);
  }

  list(username:string):Observable<Array<Project>> {
    return this.af.database.list("/project/" + username).map(values => {
      let projects:Array<Project> = [];
      values.forEach((value, i) => {
        projects.push(value);
      });
      return projects;
    });
  }
}