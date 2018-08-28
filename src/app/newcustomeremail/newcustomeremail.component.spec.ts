import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomeremailComponent } from './newcustomeremail.component';

describe('NewcustomeremailComponent', () => {
  let component: NewcustomeremailComponent;
  let fixture: ComponentFixture<NewcustomeremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomeremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomeremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
