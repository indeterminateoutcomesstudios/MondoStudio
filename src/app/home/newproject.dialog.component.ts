import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-new-project-dialog',
    templateUrl: 'newproject.dialog.component.html',
    styleUrls: ['newproject.dialog.component.scss']
})
export class NewProjectDialogComponent {
    constructor(public dialogRef: MdDialogRef<NewProjectDialogComponent>) { }
}