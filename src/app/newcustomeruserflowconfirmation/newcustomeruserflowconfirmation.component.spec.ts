import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomeruserflowconfirmationComponent } from './newcustomeruserflowconfirmation.component';

describe('NewcustomeruserflowconfirmationComponent', () => {
  let component: NewcustomeruserflowconfirmationComponent;
  let fixture: ComponentFixture<NewcustomeruserflowconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomeruserflowconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomeruserflowconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
