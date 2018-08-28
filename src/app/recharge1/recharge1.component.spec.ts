import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recharge1Component } from './recharge1.component';

describe('Recharge1Component', () => {
  let component: Recharge1Component;
  let fixture: ComponentFixture<Recharge1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recharge1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recharge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
