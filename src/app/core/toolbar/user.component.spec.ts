/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { Observable } from 'rxjs/Rx';

import { AngularFire } from 'angularfire2';

import { UserComponent } from './user.component';

class MockAngularFire {
  public auth = Observable.create((observer) => {
    console.dir(observer);
  });
}

describe('Core: Toolbar: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [ MaterialModule.forRoot() ],
      providers: [
        { provide: AngularFire, useClass: MockAngularFire }
      ]
    });
  });

  it(`should render button with a text "Sign in with Google"`, async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toContain('Sign in with Google');
  }));
});
