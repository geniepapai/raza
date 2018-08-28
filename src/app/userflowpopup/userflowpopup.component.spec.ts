import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserflowpopupComponent } from './userflowpopup.component';

describe('UserflowpopupComponent', () => {
  let component: UserflowpopupComponent;
  let fixture: ComponentFixture<UserflowpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserflowpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserflowpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
