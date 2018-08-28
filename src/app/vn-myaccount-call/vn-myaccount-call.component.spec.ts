import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountCallComponent } from './vn-myaccount-call.component';

describe('VnMyaccountCallComponent', () => {
  let component: VnMyaccountCallComponent;
  let fixture: ComponentFixture<VnMyaccountCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
