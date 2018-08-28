import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deal2Component } from './deal2.component';

describe('Deal2Component', () => {
  let component: Deal2Component;
  let fixture: ComponentFixture<Deal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
