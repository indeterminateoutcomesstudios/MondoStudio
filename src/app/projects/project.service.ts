import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Project } from './project';

import { Observable } from 'rxjs/Rx';

import { MapService } from './map.service';

@Injectable()
export class ProjectService {
  
  public project: Project;

  constructor(private af:AngularFire, private ms:MapService) { }

  retrieve(params:{ username:string, project:string }):Observable<Project> {
    return this.af.database.object("/project/" + params.username + "/" + params.project).map(value => {
      return this.transform({
        name: value.name,
        username: value.username,
        slug: value.slug,
        maps: value.maps
      });
    });
  }

  save() {
    return this.af.database.object("/project/" + this.project.username + "/" + this.project.slug).update(this.project);
  }

  transform(data:{username:string, name:string, slug:string, maps?:Array<any>}):Project {
    let project = new Project();
    project.username = data.username;
    project.name = data.name;
    project.slug = data.slug;

    if (data.maps) {
      project.maps = [];
      Object.keys(data.maps).forEach((slug, index) => {
        project.maps.push(this.ms.transform({
          project: project,
          name: data.maps[slug].name,
          slug: slug, 
          width: data.maps[slug].width,
          height: data.maps[slug].height
        }));
      });
    }
    return project;
  }

  list(username:string):Observable<Array<Project>> {
    return this.af.database.list("/project/" + username).map(values => {
      let projects:Array<Project> = [];
      values.forEach((value, i) => {
        projects.push(this.transform({
          username: value.username,
          name: value.name,
          slug: value.slug,
          maps: value.maps
        }));
      });
      return projects;
    });
  }
}