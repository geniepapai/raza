import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninexistingComponent } from './signinexisting.component';

describe('SigninexistingComponent', () => {
  let component: SigninexistingComponent;
  let fixture: ComponentFixture<SigninexistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninexistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninexistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
