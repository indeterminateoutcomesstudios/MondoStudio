/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('Accounts: Register', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    });
  });

  it(`should render a form with name, email and password`, async(() => {
    let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('form input[name=name]')).toBeDefined();
    expect(compiled.querySelector('form input[name=email]')).toBeDefined();
    expect(compiled.querySelector('form input[name=password]')).toBeDefined();
  }));
});
