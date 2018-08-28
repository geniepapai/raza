import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recharge2Component } from './recharge2.component';

describe('Recharge2Component', () => {
  let component: Recharge2Component;
  let fixture: ComponentFixture<Recharge2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recharge2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recharge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
