import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal4Component } from './deal4.component';

describe('Deal4Component', () => {
  let component: Deal4Component;
  let fixture: ComponentFixture<Deal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
