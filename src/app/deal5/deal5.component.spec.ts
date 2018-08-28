import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal5Component } from './deal5.component';

describe('Deal5Component', () => {
  let component: Deal5Component;
  let fixture: ComponentFixture<Deal5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
