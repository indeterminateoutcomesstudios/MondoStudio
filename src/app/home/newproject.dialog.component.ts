import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { Project } from '../projects/project';
import { AuthService } from '../accounts';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './newproject.dialog.component.html',
  styleUrls: ['./newproject.dialog.component.scss']
})
export class NewProjectDialogComponent implements OnInit {
  public newProjectForm: FormGroup;
  public project: Project;

  constructor(public dialogRef: MdDialogRef<NewProjectDialogComponent>, private fb:FormBuilder, private auth:AuthService, private service:ProjectService) { }

  ngOnInit():void {
    this.buildForm();
  }

  buildForm():void {
    this.project = new Project();
    this.newProjectForm = this.fb.group({
      name: [this.project.name, [Validators.required]],
      slug: [this.project.slug, [Validators.required]]
    });
  }

  save() {
    if (this.newProjectForm.valid) {
      this.project.username = this.auth.auth.user.username;
      this.service.project = this.project;
      this.service.save().then(() => {
        this.dialogRef.close();
      });
    }
  }
}