import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Virtualnumber1Component } from './virtualnumber1.component';

describe('Virtualnumber1Component', () => {
  let component: Virtualnumber1Component;
  let fixture: ComponentFixture<Virtualnumber1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Virtualnumber1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Virtualnumber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
