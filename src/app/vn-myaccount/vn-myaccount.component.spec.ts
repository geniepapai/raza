import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountComponent } from './vn-myaccount.component';

describe('VnMyaccountComponent', () => {
  let component: VnMyaccountComponent;
  let fixture: ComponentFixture<VnMyaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
