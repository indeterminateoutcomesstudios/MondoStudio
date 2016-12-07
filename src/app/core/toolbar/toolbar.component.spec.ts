/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';

describe('Core: Toolbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  it(`renders MondoStudio SVG logo`, async(() => {
    let fixture = TestBed.createComponent(ToolbarComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('img').src).toContain('/assets/img/logo.svg');
  }));
});
