/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';

describe('Home: Dashboard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ MaterialModule.forRoot() ]
    });
  });

  it(`renders a welcome message when there is no projects listed`, async(() => {
    let fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('md-card-title').textContent).toContain('Welcome to MondoStudio');
  }));
});
