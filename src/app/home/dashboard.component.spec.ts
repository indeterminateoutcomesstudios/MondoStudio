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

  it(`should render a group of tabs with "Projects" and "Resources" tabs`, async(() => {
    let fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.md-tab-header #md-tab-label-0-0').textContent).toContain('Projects');
    expect(compiled.querySelector('.md-tab-header #md-tab-label-0-1').textContent).toContain('Resources');
  }));
});
