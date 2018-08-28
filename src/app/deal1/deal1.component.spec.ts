import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal1Component } from './deal1.component';

describe('Deal1Component', () => {
  let component: Deal1Component;
  let fixture: ComponentFixture<Deal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
