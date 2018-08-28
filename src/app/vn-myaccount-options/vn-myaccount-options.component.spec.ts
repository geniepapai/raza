import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountOptionsComponent } from './vn-myaccount-options.component';

describe('VnMyaccountOptionsComponent', () => {
  let component: VnMyaccountOptionsComponent;
  let fixture: ComponentFixture<VnMyaccountOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
