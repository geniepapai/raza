import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal3Component } from './deal3.component';

describe('Deal3Component', () => {
  let component: Deal3Component;
  let fixture: ComponentFixture<Deal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
