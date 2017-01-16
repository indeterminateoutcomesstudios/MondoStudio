import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../project.service';

import { ToolbarService } from '../../core/toolbar/toolbar.service';

import { Map } from '../map';
import { MapService } from '../map.service';

@Component({
  selector: 'app-project-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  public map:Map;

  constructor(private ps: ProjectService, private ms: MapService, private route: ActivatedRoute, private ts: ToolbarService) {
    this.map = new Map();
    ts.unsetProject();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.retrieve({
        username: params['username'],
        project: params['project']
      }).subscribe(project => {
        this.ts.setProject(project);
        this.ms.project = project;
        this.map = this.ms.retrieve(params['map']);
      });
    });
  }

  ngOnDestroy() {
    this.ts.unsetProject();
  }
}