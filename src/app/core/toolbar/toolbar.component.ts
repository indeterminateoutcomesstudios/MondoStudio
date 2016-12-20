import { Component, OnInit } from '@angular/core';

import { ToolbarService } from './toolbar.service';

import { Project } from '../../projects/project';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public project:Project;

  constructor(public service:ToolbarService) {
    this.project = null;
  }

  ngOnInit():void {
    this.service.project().subscribe((project) => {
      this.project = project;
    });
  }
}
