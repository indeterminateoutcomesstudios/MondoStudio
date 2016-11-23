/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

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
      providers: [
        { provide: AngularFire, useClass: MockAngularFire }
      ]
    });
  });

  it(`should render button with an image and span with name`, async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button span').textContent).toContain('loading...');
  }));
});
