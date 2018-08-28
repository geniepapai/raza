import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnMyaccountsetupComponent } from './vn-myaccountsetup.component';

describe('VnMyaccountsetupComponent', () => {
  let component: VnMyaccountsetupComponent;
  let fixture: ComponentFixture<VnMyaccountsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnMyaccountsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnMyaccountsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
