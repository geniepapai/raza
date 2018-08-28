import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recharge6Component } from './recharge6.component';

describe('Recharge6Component', () => {
  let component: Recharge6Component;
  let fixture: ComponentFixture<Recharge6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recharge6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recharge6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
