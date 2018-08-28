import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeuserPaymentComponent } from './homeuser-payment.component';

describe('HomeuserPaymentComponent', () => {
  let component: HomeuserPaymentComponent;
  let fixture: ComponentFixture<HomeuserPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeuserPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeuserPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
