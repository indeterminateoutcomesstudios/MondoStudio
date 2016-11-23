/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AngularFire } from 'angularfire2';

import { LoginComponent } from './login.component';

class MockAngularFire { }

describe('Accounts: Login', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: AngularFire, useClass: MockAngularFire }
      ]
    });
  });

  it(`should render a button to sign in with Google`, async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('Sign in with Google');
  }));
});
