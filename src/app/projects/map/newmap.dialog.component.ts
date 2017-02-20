import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { Map } from '../map';

@Component({
    selector: 'app-new-map-dialog',
    templateUrl: './newmap.dialog.component.html',
    styleUrls: ['./newmap.dialog.component.scss']
})
export class NewMapDialogComponent extends OnInit {
    public newMapForm: FormGroup;
    public map: Map;

    constructor(public dialogRef: MdDialogRef<NewMapDialogComponent>, private fb:FormBuilder) {
        super();
    }

    buildForm() {
        this.map = new Map();
        this.newMapForm = this.fb.group({
            name: [this.map.name, [Validators.required]],
            slug: [this.map.slug, [Validators.required]],
            width: [this.map.width, [Validators.required]],
            height: [this.map.height, [Validators.required]]
        });
    }

    ngOnInit() {
        this.buildForm();
    }
}