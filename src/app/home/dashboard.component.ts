import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { NewProjectDialogComponent } from './newproject.dialog.component';

import { AuthService } from '../accounts';

import { Project } from '../projects/project';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends OnInit {
  public projects:Array<Project>;
  protected dialogRef: MdDialogRef<NewProjectDialogComponent>;

  constructor(public dialog: MdDialog, private ps: ProjectService, private as: AuthService) {
    super();
    this.projects = [];
  }

  ngOnInit():void {
    this.as.retrieve().switchMap((auth, i) => this.ps.list(auth.user.username)).subscribe(list => {
      this.projects = list;
    });
  }

  openNewProjectDialog() {
    this.dialogRef = this.dialog.open(NewProjectDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}