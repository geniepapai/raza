import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recharge5Component } from './recharge5.component';

describe('Recharge5Component', () => {
  let component: Recharge5Component;
  let fixture: ComponentFixture<Recharge5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recharge5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recharge5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
