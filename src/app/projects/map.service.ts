import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { ProjectService } from './project.service';

import { Map } from './map';
import { Project } from './project';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {
  public project: Project;
  public map: Map;

  constructor(private af: AngularFire) {}

  save() {
    return this.af.database.object(`${this.map.project.username}/${this.map.project.slug}/maps/${this.map.slug}`).update({
      name: this.map.name,
      slug: this.map.slug,
      width: this.map.width,
      height: this.map.height
    });
  }

  retrieve(slug:string):Map {
    let needle: Map;
    this.project.maps.forEach(map => {
      if (map.slug == slug) {
        needle = map;
      }
    });
    return needle;
  }

  transform(data:{project:Project, name:string, slug:string, width:number, height:number}):Map {
    let map = new Map();
    map.project = data.project;
    map.name = data.name;
    map.slug = data.slug;
    map.height = data.height;
    map.width = data.width;
    return map;
  }
}