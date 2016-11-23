/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('App: MondoStudio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'MondoStudio'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MondoStudio');
  }));
});
