/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('Core: Toolbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    });
  });

  it(`should render title in a h1 tag`, async(() => {
    let fixture = TestBed.createComponent(ToolbarComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('MondoStudio');
  }));
});
