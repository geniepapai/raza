import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recharge4Component } from './recharge4.component';

describe('Recharge4Component', () => {
  let component: Recharge4Component;
  let fixture: ComponentFixture<Recharge4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recharge4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recharge4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
