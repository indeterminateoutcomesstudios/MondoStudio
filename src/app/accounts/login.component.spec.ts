/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Accounts: Login', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ]
    });
  });

  it(`should render a form with email and password`, async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('form input[name=email]')).toBeDefined();
    expect(compiled.querySelector('form input[name=password]')).toBeDefined();
  }));
});
