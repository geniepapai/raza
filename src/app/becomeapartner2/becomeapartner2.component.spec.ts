import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Becomeapartner2Component } from './becomeapartner2.component';

describe('Becomeapartner2Component', () => {
  let component: Becomeapartner2Component;
  let fixture: ComponentFixture<Becomeapartner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Becomeapartner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Becomeapartner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
