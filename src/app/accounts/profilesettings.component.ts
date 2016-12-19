import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MdSnackBar } from '@angular/material';

import { AuthService } from './user/auth.service';
import { UserService } from './user/user.service';

@Component({
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.scss'],
  providers: [MdSnackBar]
})
export class ProfileSettingsComponent implements OnInit {
  public accountSettingsForm: FormGroup;
  public invalidUsername:boolean;

  constructor(public auth:AuthService, public service:UserService, private fb:FormBuilder, public snackBar:MdSnackBar) { }

  ngOnInit():void {
    this.buildForm();
  }

  buildForm():void {
    this.accountSettingsForm = this.fb.group({
      name: [this.auth.auth.user.name, [Validators.required]],
      username: [this.auth.auth.user.username, [Validators.required]]
    });

    this.accountSettingsForm.valueChanges.subscribe(data => {
      this.onValueChanged(data);
    });

    this.onValueChanged();
  }

  onValueChanged(data?:any) {
    if (data) {
      this.service.hasUsername().subscribe(exists => {
        this.invalidUsername = exists;
      });
    }
  }

  save() {
    this.service.user = this.auth.auth.user;
    this.service.save().then(() => {
      this.snackBar.open("Successfuly saved", "DISMISS", { duration: 5000 });
    });
  }
}