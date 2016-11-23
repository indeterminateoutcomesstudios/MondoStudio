/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('Home: Dashboard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    });
  });

  it(`should render a string 'Welcome'`, async(() => {
    let fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').textContent).toContain('Welcome');
  }));
});
