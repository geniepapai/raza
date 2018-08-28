import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerSigninComponent } from './newcustomer-signin.component';

describe('NewcustomerSigninComponent', () => {
  let component: NewcustomerSigninComponent;
  let fixture: ComponentFixture<NewcustomerSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomerSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
