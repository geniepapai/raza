import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal6Component } from './deal6.component';

describe('Deal6Component', () => {
  let component: Deal6Component;
  let fixture: ComponentFixture<Deal6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
