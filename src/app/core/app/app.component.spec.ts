/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

describe('App: MondoStudio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        AppComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }]
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
