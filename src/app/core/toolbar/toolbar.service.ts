import { Injectable } from '@angular/core';

import { Project } from '../../projects/project';

import { Observable, Subject } from 'rxjs/Rx';

export class ToolbarService {
  private dataProject:Subject<Project>;

  constructor() {
    this.dataProject = new Subject<Project>();
  }

  public project():Observable<Project> {
    return this.dataProject.asObservable();
  }

  setProject(project:Project) {
    this.dataProject.next(project);
  }

  unsetProject() {
    this.dataProject.next(null);
  }
}