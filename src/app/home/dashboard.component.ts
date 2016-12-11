import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { NewProjectDialogComponent } from './newproject.dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public name:string;
    public slug:string;

    dialogRef: MdDialogRef<NewProjectDialogComponent>;

    constructor(public dialog: MdDialog) {}

    openNewProjectDialog() {
        this.dialogRef = this.dialog.open(NewProjectDialogComponent, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
}