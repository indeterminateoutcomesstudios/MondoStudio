/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { Observable } from 'rxjs/Rx';

import { UserComponent } from './user.component';

import { User, AuthService } from '../../accounts';

class MockAuthService {
  public user:User;

  login() {}

  logout() {}
}

class MockAnonymousAuthService extends MockAuthService {
  public user:User = {
    name: 'Anonymous',
    picture: '',
    username: '',
    loggedIn: false
  };
}

class MockLoggedInAuthService extends MockAuthService {
  public user:User = {
    name: 'John Doe',
    picture: '/any/given/picture.png',
    username: 'johndoe',
    loggedIn: true
  };
}

describe('Core: Toolbar: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [ MaterialModule.forRoot() ]
    });
  });

  it(`should render button with a text "Sign in with Google"`, async(() => {
    let fixture = TestBed.configureTestingModule({ providers: [
      { provide: AuthService, useClass: MockAnonymousAuthService }
    ]}).createComponent(UserComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('Sign in with Google');
  }));

  it(`shoud render button with a text "John Doe"`, async(() => {
    let fixture = TestBed.configureTestingModule({ providers: [
      { provide: AuthService, useClass: MockLoggedInAuthService }
    ]}).createComponent(UserComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('John Doe');
  }));
});
